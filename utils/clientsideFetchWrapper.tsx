export const fetchData = async (
    path: string,
    formData: any | null,
    method?: string
) => {
    try {
        let seen: any[] = [];

        const response = await fetch(path, {
            method: method ?? (formData ? 'POST' : 'GET'),
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            ...(formData && {
                body: JSON.stringify(formData, function (key, val) {
                    if (val != null && typeof val == 'object') {
                        if (seen.indexOf(val) >= 0) {
                            return;
                        }
                        seen.push(val);
                    }
                    return val;
                }),
            }),
        });

        console.log('response', response, await response.json());

        if (!response.ok) {
            throw response;
        }

        const data = (await response.json()).data as any[] | any;
        console.log('data', data);

        if (!data) {
            return [];
        }
        return data;
    } catch (err) {
        throw err;
    }
};

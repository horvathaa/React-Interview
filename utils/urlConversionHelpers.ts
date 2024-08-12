export const convertToUrlRequest = (query: any, path: string) => {
    return `${path}?${new URLSearchParams(query).toString()}`;
};

export const convertSingleNestedObjectToUrlRequest = (
    query: any,
    path: string
) => {
    const params: { [key: string]: any } = {};

    for (const prop in query) {
        if (query[prop] instanceof Object) {
            for (const subProp in query[prop]) {
                const paramName = `${prop}.${subProp}`;
                params[paramName] = query[prop][subProp];
            }
        } else {
            params[prop] = query[prop];
        }
    }

    return `${path}?${new URLSearchParams(params).toString()}`;
};

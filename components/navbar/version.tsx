import { useEffect, useState } from 'react';
import { BasicBadge } from '../badges/badges';
import { fetchData } from '../../utils/clientsideFetchWrapper';

export const Version = () => {
    const [version, setVersion] = useState<string | null>(null);

    useEffect(() => {
        fetchData('/api/version', null)
            .then((e) => {
                setVersion(e as unknown as string);
            })
            .catch(async (err) => {
                setVersion('0.1.0');
            });
    }, []);

    return (
        <>
            {version && (
                <div
                    className="relative ml-2 md:m-auto"
                    data-headlessui-state=""
                >
                    <BasicBadge label={'v' + (version ?? '')} />
                </div>
            )}
        </>
    );
};

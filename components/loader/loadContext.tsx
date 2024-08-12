import React, { createContext, ReactNode, useState } from 'react';
import { LoaderContextsProps } from '../../interfaces/contextInterfaces';
import { CornerLoader } from './loader';

export const loaderContext = createContext<LoaderContextsProps>({
    loading: false,
});

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <loaderContext.Provider value={{ loading, setLoading }}>
            {children}
            {loading && (
                <div className="">
                    <CornerLoader />
                </div>
            )}
        </loaderContext.Provider>
    );
};

export const LoaderContextCheck = ({
    children,
    loaderContexts,
}: {
    children: any;
    loaderContexts: LoaderContextsProps | null;
}) => {
    return loaderContexts ? children : <></>;
};

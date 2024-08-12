import { Dispatch, SetStateAction } from 'react';

export interface LoaderContextsProps {
    loading: boolean;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ToastContextProps {
    alertType: string;
    alertShow: boolean;
    alertText: string;
    setAlertShow: Dispatch<SetStateAction<boolean>>;
    setAlertType: Dispatch<SetStateAction<string>>;
    setAlertText: Dispatch<SetStateAction<string>>;
    submissionErrors?: (error: any) => Promise<void>;
    clearAlert?: () => void;
    setAlert?: (text: string, type: string) => void;
}

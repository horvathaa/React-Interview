import {
    CheckIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    QuestionMarkCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import React, {
    createContext,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import { ToastContextProps } from '../../interfaces/contextInterfaces';

export const toastContext = createContext<ToastContextProps>({
    alertType: '',
    alertShow: false,
    alertText: '',
    setAlertShow: (e: SetStateAction<boolean>) => {},
    setAlertText: (e: SetStateAction<string>) => {},
    setAlertType: (e: SetStateAction<string>) => {},
});

export const ToastIconBuilder = ({
    icon,
    bgBadgeColor,
}: {
    icon: JSX.Element;
    bgBadgeColor: string;
}) => {
    return (
        <div className="flex items-start justify-between">
            <div className="w-full  flex justify-center">
                <div
                    className={
                        bgBadgeColor +
                        ' mx-auto flex h-8 w-8 xl:h-12 xl:w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10'
                    }
                >
                    {icon}
                </div>
            </div>
        </div>
    );
};

export const ToastIcon = ({ type }: { type: string }) => {
    const classes = 'h-5 w-5 xl:h-6 xl:w-6';
    switch (type) {
        case 'success':
            return (
                <ToastIconBuilder
                    icon={<CheckIcon className={classes} />}
                    bgBadgeColor={'bg-green-100'}
                />
            );
        case 'warning':
            return (
                <ToastIconBuilder
                    icon={<ExclamationTriangleIcon className={classes} />}
                    bgBadgeColor={'bg-yellow-200'}
                />
            );
        case 'error':
            return (
                <ToastIconBuilder
                    icon={
                        <ExclamationCircleIcon className="h-6 w-6 md:h-9 md:w-9 fill-grey-500" />
                    }
                    bgBadgeColor={'bg-red-400'}
                />
            );
        default:
            return (
                <ToastIconBuilder
                    icon={<QuestionMarkCircleIcon className={classes} />}
                    bgBadgeColor={'bg-sky-100'}
                />
            );
    }
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const toastContexts = React.useContext(toastContext);

    const [alertShow, setAlertShow] = useState<boolean>(false);
    const [alertText, setAlertText] = useState<string>('');
    const [alertType, setAlertType] = useState<string>('');

    const clearAlert = () => {
        setAlertShow(false);
        setAlertText('');
        setAlertType('');
    };

    const submissionErrors = async (error: any) => {
        if (error.status == 400) {
            var errMsg = (await error.json())?.data;
            setAlertText &&
                setAlertText(errMsg instanceof Object ? errMsg?.title : errMsg);
        } else {
            setAlertText('unknown error');
        }
        setAlertType('error');
        setAlertShow(true);
    };

    const setAlert = (text: string, type: string) => {
        setAlertText(text);
        setAlertType(type);
        setAlertShow(true);
    };

    const ToastAlert = ({}) => {
        const [navOpen, setNavOpen] = useState<boolean>(true);

        useEffect(() => {
            setNavOpen(alertShow);
            setTimeout(() => {
                clearAlert();
            }, 5000);
        }, [alertShow, setAlertShow, setAlertType, setAlertText]);

        return (
            <div
                className={`toast z-[10000]  duration-150  ${
                    navOpen ? ' flex ' : ' hidden '
                } `}
            >
                <div
                    className={
                        'p-2 xl:p-5 rounded-[8px] max-w-sm xl:max-w-xl mb-1 mt-10 shadow-md alert bg-white border-[0.5px] border-slate-200/40' +
                        (alertShow ? ' visible' : ' invisible')
                    }
                >
                    <div className="grid grid-cols-7 overflow-hidden ">
                        <div
                            className={
                                (alertShow ? 'visible ' : 'invisible ') +
                                ' col-span-1 m-auto'
                            }
                        >
                            <ToastIcon type={alertType} />
                        </div>
                        <div
                            className={
                                (alertShow ? 'visible' : 'invisible') +
                                ' col-span-5 text-center my-auto mx-5'
                            }
                        >
                            <p className="ml-2 xl:ml-5 text-xs my-auto xl:text-base max-w-sm md:max-w-md text-gray-600 break-words break-normal overflow-hidden whitespace-normal  inline-flex ">
                                {alertText}
                            </p>
                        </div>
                        <div className="flex justify-end ml-5  m-auto col-span-1">
                            <XMarkIcon
                                onClick={() => clearAlert()}
                                className="btn btn-sm btn-ghost h-9 w-9 cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <toastContext.Provider
            value={{
                alertShow,
                alertText,
                alertType,
                setAlertShow,
                setAlertText,
                setAlertType,
                submissionErrors,
                clearAlert,
                setAlert,
            }}
        >
            {children}
            {alertShow && <ToastAlert />}
        </toastContext.Provider>
    );
};

import {
    CheckIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export const ModalHeader = ({ modalLabel }: { modalLabel?: string }) => {
    return (
        <div className="flex items-start justify-between w-full px-10 py-4  rounded-t ">
            <h1 className="px-10 mt-5 font-bold tracking-tight inline-block text-2xl sm:text-3xl  tracking-tight w-full  flex justify-center text-slate-700">
                {modalLabel}
            </h1>
        </div>
    );
};

export const ModalAlertsBase = ({
    icon,
    message,
    bgBadgeColor,
}: {
    icon: JSX.Element;
    message: string;
    bgBadgeColor: string;
}) => {
    return (
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-start justify-between">
                <div className="w-full  flex justify-center">
                    <div
                        className={
                            bgBadgeColor +
                            ' mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10'
                        }
                    >
                        {icon}
                    </div>
                </div>
            </div>
            <div className="mt-5 flex items-start justify-between">
                <div className="w-full  flex justify-center">
                    <h3 className="text-xl font-bold leading-6 text-gray-900">
                        {message}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export const ModalSuccessAlert = ({
    titleMessage,
}: {
    titleMessage?: string;
}) => {
    return (
        <ModalAlertsBase
            icon={<CheckIcon className="h-7 w-7 text-green-600" />}
            message={titleMessage ?? 'Success!'}
            bgBadgeColor={'bg-green-100'}
        />
    );
};

export const ModalWarningAlert = ({
    titleMessage,
}: {
    titleMessage?: string;
}) => {
    return (
        <ModalAlertsBase
            icon={
                <ExclamationTriangleIcon className="h-7 w-7 text-yellow-600" />
            }
            message={titleMessage ?? 'Warning'}
            bgBadgeColor={'bg-yellow-100'}
        />
    );
};

export const ModalDangerAlert = ({
    titleMessage,
}: {
    titleMessage?: string;
}) => {
    return (
        <ModalAlertsBase
            icon={<ExclamationCircleIcon className="h-7 w-7 text-red-600" />}
            message={titleMessage ?? 'Failure!'}
            bgBadgeColor={'bg-red-100'}
        />
    );
};

export const ModalBasicContentBuilder = ({ message }: { message?: string }) => {
    return (
        <div className="mt-2 mb-8 text-center">
            <p className="text-sm text-gray-500">{message}</p>
        </div>
    );
};

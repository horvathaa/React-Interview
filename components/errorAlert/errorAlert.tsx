import { ModalDangerAlert } from '../modal/modal';

export const ErrorAlert = (error: string) => {
    return (
        <div className="mt-20 m-auto border card w-auto bg-base-100 shadow-xl flex min-h-[6rem] min-w-[18rem] max-w-screen-sm flex-wrap items-center justify-center gap-2 overflow-x-hidden">
            <div className="card-body">
                <ModalDangerAlert titleMessage={'Error'} />
                <div className="mt-2 mx-10 mb-8 text-center">
                    <p className="text-md text-gray-500">{error}</p>
                </div>
            </div>
        </div>
    );
};

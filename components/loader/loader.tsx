const BaseLoader = () => {
    let circleCommonClasses =
        'h-2.5 w-2.5 bg-current  text-sky-500 rounded-full ';
    return (
        <div className="flex">
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

const Loader = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="card card-side  shadow-xl  p-10   border">
                <BaseLoader />
            </div>
        </div>
    );
};

export const CornerLoader = () => {
    return (
        <div className="toast toast-end m-auto flex min-h-[6rem] min-w-[20rem] justify-end items-end overflow-x-hidden z-[1000] mr-5 ">
            <div className="bg-sky-100 mt-auto card card-side p-5    ">
                <BaseLoader />
            </div>
        </div>
    );
};

export default Loader;

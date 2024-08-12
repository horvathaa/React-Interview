export const BasicBadge = ({
    label,
    bgColor,
    textColor,
    textSize,
    overrideClass,
}: {
    label: string;
    bgColor?: string;
    textColor?: string;
    textSize?: string;
    overrideClass?: string;
}) => {
    bgColor = bgColor ?? 'bg-sky-400/10';
    textColor = textColor ?? 'text-sky-600';
    return (
        <div
            className={
                bgColor +
                ' ' +
                textColor +
                ' ' +
                (textSize ?? 'text-xs   ') +
                (overrideClass ??
                    ' px-3 py-[.1rem] flex w-fit cursor-default mt-1 font-medium  leading-5   rounded-full  items-center space-x-2 ')
            }
        >
            {label}
        </div>
    );
};

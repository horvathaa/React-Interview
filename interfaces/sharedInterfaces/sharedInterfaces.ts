
export interface AnyObject {
    [name: string]: any;
}

export interface DynamicObject<T> {
    [name: string]: T;
}

export interface NameProps {
    id: number;
    name: string;
}

export interface LabelProps {
    labelContent: string;
    htmlFor?: string;
    labelClassName?: string;
}

export interface SelectOptions {
    value: any;
    label: string;
}

export interface BaseLastDateProps {
    lastUpdated?: string | null;
    lastUpdatedBy?: string | null;
}

export interface BaseDateProps extends BaseLastDateProps {
    createdDate: string | null;
    createdBy: string | null;
}



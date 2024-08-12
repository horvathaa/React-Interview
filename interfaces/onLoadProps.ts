import { NextPageContext } from "next";

interface OnLoadPropsBase extends NextPageContext {
    error: any;
    connectionError?: string | null;
}

export interface LandingOnLoadProps extends OnLoadPropsBase {}


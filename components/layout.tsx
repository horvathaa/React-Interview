import Navbar from './navbar/navbar';
import { LoaderProvider } from './loader/loadContext';
import { ToastProvider } from './toastPopup/toastContext';
import { mmlog } from 'mm-log';

export default function Layout({ children }: { children: any }) {
    mmlog('test');
    return (
        <ToastProvider>
            <LoaderProvider>
                <Navbar />
                <main>{children}</main>
            </LoaderProvider>
        </ToastProvider>
    );
}

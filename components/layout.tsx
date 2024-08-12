import Navbar from './navbar/navbar';
import { LoaderProvider } from './loader/loadContext';
import { ToastProvider } from './toastPopup/toastContext';

export default function Layout({ children }: { children: any }) {
    return (
        <ToastProvider>
            <LoaderProvider>
                <Navbar />
                <main>{children}</main>
            </LoaderProvider>
        </ToastProvider>
    );
}

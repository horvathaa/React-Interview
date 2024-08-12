import { AuthErrorComponent } from '../pages/authError';

/**
 * Checks if the user is valid
 * @param childrens children under this component (inheirited)
 * @returns view passed in otherwise a sign in prompt
 */
function ErrorsWrapper({
    children,
    error,
}: {
    children: any;
    error?: string | null;
}) {
    return error != undefined ? <AuthErrorComponent error={error} /> : children;
}

export default ErrorsWrapper;

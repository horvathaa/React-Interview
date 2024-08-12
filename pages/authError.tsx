import { NextPage } from 'next';
import { useRouter } from 'next/router';

export const AuthErrorComponent = ({ error }: { error?: string | null }) => {
    return (
        <div className="mt-20 m-auto border card w-auto bg-base-100 shadow-xl flex min-h-[6rem] min-w-[18rem] max-w-screen-sm flex-wrap items-center justify-center gap-2 overflow-x-hidden">
            <div className="card-body">
                <p className="m-auto justify-center text-center p-5">
                    {error ??
                        ' You do not have any roles that match the ones used on this website. Please contact IT to get the proper roles set.'}
                </p>
            </div>
        </div>
    );
};

const AuthError: NextPage = () => {
    const router = useRouter();
    let error = router.query.error ?? null;
    return <AuthErrorComponent error={error?.toString() ?? null} />;
};

export default AuthError;

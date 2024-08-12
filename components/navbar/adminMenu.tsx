import Link from 'next/link';
import { useContext } from 'react';
import { loaderContext } from '../loader/loadContext';

export const AdminMenu = ({}) => {
    const { setLoading } = useContext(loaderContext);
    return (
        <div className="dropdown dropdown-bottom">
            <label
                tabIndex={0}
                className={
                    'cursor-pointer text-lg font-bold leading-6  text-slate-700 hover:text-emerald-500 '
                }
            >
                Admin
            </label>

            <ul
                tabIndex={0}
                className="block h-auto calendar-modal-shadow overflow-x-hidden overflow-y-scroll dropdown-content flex-row menu p-2  bg-base-100 rounded-box  w-11/12 xl:w-56 mt-2 "
            >
                <li className="font-medium text-sm shrink text-left">
                    <Link
                        href={{
                            pathname: '/admin/subStudies',
                        }}
                        onClick={() => setLoading && setLoading(true)}
                    >
                        <label className="cursor-pointer">
                            Sub-Study Management
                        </label>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

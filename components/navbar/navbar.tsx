import React from 'react';
import { useRouter } from 'next/router';
import { Version } from './version';

export default function Navbar({}) {
    return (
        <div className=" nav relative h-fit md:h-[60px] md:z-[500]  top-0 z-40 shadow-sm w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10  bg-white/95 supports-backdrop-blur:bg-white/60 ">
            <div className=" border-b border-slate-900/10 md:pr-8 md:border-0 h-full">
                <div className="relative flex items-center  my-auto h-full">
                    <div
                        className={
                            ' grid-container grid grid-cols-5 md:flex h-full'
                        }
                    >
                        <div className="flex col-span-4 ml-5  my-auto">
                            <span className="text-[32px] mr-5">
                                {'React Interview'}
                            </span>
                            <Version />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

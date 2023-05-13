'use client';
import { ReactNode } from 'react';
import Loading from '$/components/Loading';
import useCustomRouter from '$/hooks/useCustomRouter';

export default function Template({ children }: { children: ReactNode }) {
    const { isLoading } = useCustomRouter();

    return (
        <div className="relative">
            {children}
            {isLoading && <Loading />}
        </div>
    );
}

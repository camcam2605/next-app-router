'use client';

import useCustomRouter from '$/hooks/useCustomRouter';

export default function Home() {
    const { push } = useCustomRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold text-center mb-4">Cam ơi Cam à</h1>

            <button
                onClick={() => push('/user')}
                className="px-4 py-2 bg-amber-500 rounded-xl text-white cursor-pointer font-semibold text-base transition-colors duration-300 hover:bg-amber-600 active:scale-95"
            >
                Nhớ Cam
            </button>
        </main>
    );
}

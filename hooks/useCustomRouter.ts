import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { NavigateOptions } from 'next/dist/shared/lib/app-router-context';
import { useCustomRouterContext } from '$/contexts/CustomRouterContext';

const useCustomRouter = () => {
    const [isLoading, setIsLoading] = useCustomRouterContext();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setIsLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, searchParams]);

    const push = (href: string, options?: NavigateOptions) => {
        setIsLoading(true);
        router.push(href, options);
    };

    return { isLoading, push };
};

export default useCustomRouter;

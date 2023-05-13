'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type CustomRouterState = boolean;
type CustomRouterContext = [CustomRouterState, Dispatch<SetStateAction<CustomRouterState>>];

const CustomRouterContext = createContext<CustomRouterContext | null>(null);

const CustomRouterProvider = ({ children }: { children: ReactNode }) => {
    const loadingState = useState<CustomRouterState>(false);

    return <CustomRouterContext.Provider value={loadingState}>{children}</CustomRouterContext.Provider>;
};

const useCustomRouterContext = () => {
    const navContext = useContext(CustomRouterContext);

    if (!navContext) {
        throw new Error('`CustomRouterProvider` must be provided');
    }

    return navContext;
};

export { CustomRouterProvider, useCustomRouterContext };

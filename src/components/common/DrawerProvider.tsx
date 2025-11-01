import {createContext, useContext} from 'react';

import {
    useDisclosure
} from '@heroui/react';

import { DrawerContextType } from '../../types/home/context';

const drawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider = ({children}: DrawerContextType) => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <drawerContext.Provider value={{isOpen, onOpen, onClose}}>
            {children}
        </drawerContext.Provider>
    )
}

export const useDrawer = () => {
    const context = useContext(drawerContext);
    if(!context) {
        throw new Error("useDrawer must be used within a DrawerProvider");
    }
    return context;
}
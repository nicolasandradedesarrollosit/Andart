export interface DrawerContextType {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    children?: React.ReactNode;
}
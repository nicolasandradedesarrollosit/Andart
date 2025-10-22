export interface NavbarProps {
    page: string;
}

export type ButtonDomainProps = {
    domain: string;
    contentButton: string;
    variant?: "ghost" | "solid" | "bordered" | "light" | "flat" | "faded" | "shadow";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}
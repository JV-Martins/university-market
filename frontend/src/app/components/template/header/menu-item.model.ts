export class MenuItem {
    label: string;
    icon: string | null;
    href: string | null;
    submenu: MenuItem[];
    disabled: boolean;

    constructor(
        label: string, 
        icon: string | null, 
        href: string | null, 
        submenu: MenuItem[], 
        disabled: boolean
        ) {
            this.label = label;
            this.icon = icon;
            this.href = href;
            this.submenu = submenu;
            this.disabled = disabled;
    }
}
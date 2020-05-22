export declare class WcButton {
    disabled: boolean;
    href: string;
    target: '_blank' | '_self';
    type: 'button' | 'reset' | 'submit';
    color: 'accent' | 'light' | '';
    variante: 'solid' | 'outline' | 'clear' | '';
    shape: 'rounded' | '';
    size: 'small' | 'default' | 'large' | '';
    font: 'small' | 'default' | 'large' | '';
    btnEl: HTMLButtonElement;
    private getCssClassMap;
    render(): any[];
}

import { Component, Prop, h, Element } from '@stencil/core';
// CssClassMap Interface
export class WcButton {
    constructor() {
        this.target = '_self';
        this.type = 'button';
        this.color = '';
        this.variante = '';
        this.shape = '';
        this.size = '';
        this.font = '';
    }
    //carte de classe
    getCssClassMap() {
        return {
            ['button-native']: true,
            [this.color]: true,
            [this.shape]: true,
            [this.size]: true,
            [this.variante]: true
        };
    }
    render() {
        const classMap = this.getCssClassMap();
        return [
            this.href ? h("a", { class: classMap, href: this.href, target: this.target },
                h("slot", null))
                :
                    h("button", { disabled: this.disabled, class: classMap },
                        h("slot", null))
        ];
    }
    static get is() { return "wc-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["wc-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["wc-button.css"]
    }; }
    static get properties() { return {
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": true
        },
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "href",
            "reflect": true
        },
        "target": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'_blank' | '_self'",
                "resolved": "\"_blank\" | \"_self\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "target",
            "reflect": true,
            "defaultValue": "'_self'"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'button' | 'reset' | 'submit'",
                "resolved": "\"button\" | \"reset\" | \"submit\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'button'"
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'accent' | 'light' | ''",
                "resolved": "\"\" | \"accent\" | \"light\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "''"
        },
        "variante": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'solid' | 'outline'|'clear' |''",
                "resolved": "\"\" | \"clear\" | \"outline\" | \"solid\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "variante",
            "reflect": false,
            "defaultValue": "''"
        },
        "shape": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'rounded'|''",
                "resolved": "\"\" | \"rounded\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shape",
            "reflect": false,
            "defaultValue": "''"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'small' | 'default' | 'large' | ''",
                "resolved": "\"\" | \"default\" | \"large\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "''"
        },
        "font": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'small' | 'default' | 'large' | ''",
                "resolved": "\"\" | \"default\" | \"large\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "font",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get elementRef() { return "btnEl"; }
}

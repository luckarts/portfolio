import { Component, Prop, h, Element } from '@stencil/core';
export class WcLazyload {
    constructor() {
        this.option = {
            threshold: [0.5, 0]
        };
        this.onIntersection = async (listImg) => {
            listImg.forEach(entry => {
                let img = entry.target;
                if (entry.isIntersecting && this.src) {
                    if (this.dataSrc) {
                        img.setAttribute('src', this.dataSrc);
                        img.src = this.src;
                        this.observer.unobserve(img);
                    }
                    else
                        img.src = this.src;
                }
            });
        };
    }
    componentDidLoad() {
        const img = this.el.shadowRoot.querySelector('img');
        this.observer = new IntersectionObserver(this.onIntersection, this.option);
        this.observer.observe(img);
    }
    render() {
        return h("img", null);
    }
    static get is() { return "wc-lazyload"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["wc-lazyload.css"]
    }; }
    static get styleUrls() { return {
        "$": ["wc-lazyload.css"]
    }; }
    static get properties() { return {
        "src": {
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
            "attribute": "src",
            "reflect": false
        },
        "dataSrc": {
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
            "attribute": "data-src",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dd2c5092.js');

const wcLazyloadCss = ":host{display:block}img{background-color:red;width:auto;height:100vh}";

const WcLazyload = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return index.h("img", null);
    }
    get el() { return index.getElement(this); }
};
WcLazyload.style = wcLazyloadCss;

exports.wc_lazyload = WcLazyload;

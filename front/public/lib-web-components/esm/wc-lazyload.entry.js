import { r as registerInstance, h, g as getElement } from './index-af692873.js';

const wcLazyloadCss = ":host{display:block}img{background-color:red;width:auto;height:100vh}";

const WcLazyload = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};
WcLazyload.style = wcLazyloadCss;

export { WcLazyload as wc_lazyload };

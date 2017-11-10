import GrainLitElement, { html } from './node_modules/grain-lit-element/GrainLitElement.js';

export default class FiberDot extends GrainLitElement(HTMLElement) {
  static get useShadowDom() { return false; }
  static get properties() {
    return {
      size: {
        type: Number,
      },
      x: {
        type: Number,
      },
      y: {
        type: Number,
      },
      text: {
        type: String,
      },
      hover: {
        type: Boolean,
        value: false,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.enter = this.enter.bind(this);
    this.leave = this.leave.bind(this);
    this.addEventListener('mouseenter', this.enter);
    this.addEventListener('mouseleave', this.leave);

    const s = this.size * 1.3;
    this.style.width = `${s}px`;
    this.style.height = `${s}px`;
    this.style.left = `${this.x}px`;
    this.style.top = `${this.y}px`;
    this.style.borderRadius = `${s / 2}px`;
    this.style.lineHeight = `${s}px`;

    this.style.position = 'absolute';
    this.style.font = 'normal 15px sans-serif';
    this.style.textAlign = 'center';
    this.style.cursor = 'pointer';
    this.style.background = 'rgb(97, 218, 251)';

    this.innerText = this.text;
  }

  enter() {
    this.hover = true;
  }

  leave() {
    this.hover = false;
  }

  // don't use lit-html
  render() {}
  _render(what, where) {
    this.innerText = this.text;
  }

}

customElements.define('fiber-dot', FiberDot);

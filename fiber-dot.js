import GrainLitElement, { html } from '../grain-lit-element/GrainLitElement.js';

export default class FiberDot extends GrainLitElement(HTMLElement) {
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
  }

  enter() {
    this.hover = true;
  }

  leave() {
    this.hover = false;
  }

  render() {
    return html`
      <style>
        :host {
          position: absolute;
          font: normal 15px sans-serif;
          text-align: center;
          cursor: pointer;
          background: rgb(97, 218, 251);
        }
      </style>
      <span>${this.hover ? html`*${this.text}*` : html`${this.text}`}</span>
    `;
  }
}

customElements.define('fiber-dot', FiberDot);

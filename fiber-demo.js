import GrainLitElement, { html } from '../grain-lit-element/GrainLitElement.js';

export default class FiberDemo extends GrainLitElement(HTMLElement) {
  static get properties() {
    return {
      seconds: {
        type: Number,
        value: 0,
      },
    };
  }

  constructor() {
    super();
    this._elapsed = 0;
    Object.defineProperty(this, 'elapsed', {
      get() { return this._elapsed; },
      set(v) {
        this._elapsed = v;
        const t = (this.elapsed / 1000) % 10;
        const scale = 1 + (t > 5 ? 10 - t : t) / 10;
        this.style.transform = `scaleX(${scale / 2.1}) scaleY(0.7) translateZ(0.1px)`;
      },
    });
  }

  connectedCallback() {
    super.connectedCallback();
    const tick = this.tick.bind(this);
    this.intervalID = setInterval(tick, 1000);
  }

  tick() {
    this.seconds = (this.seconds % 10) + 1;
  }

  render() {
    return html`
      <div>
        <fiber-triangle x="${0}" y="${0}" s="${1000}" seconds="${this.seconds}"></fiber-triangle>
      </div>
    `;
  }
}
customElements.define('fiber-demo', FiberDemo);

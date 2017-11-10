import GrainLitElement, { html } from '../grain-lit-element/GrainLitElement.js';

const targetSize = 25;

export default class FiberTriangle extends GrainLitElement(HTMLElement) {
  static get properties() {
    return {
      s: {
        type: Number,
      },
      x: {
        type: Number,
      },
      y: {
        type: Number,
      },
      seconds: {
        type: Number,
      },
    };
  }

  render() {
    let { s } = this;
    if (s <= targetSize) {
      return html`
        <fiber-dot
            x="${this.x - (targetSize / 2)}"
            y="${this.y - (targetSize / 2)}"
            size="${targetSize}"
            text="${this.seconds}"
        ></fiber-dot>
      `;
    }
    s /= 2;

    const slowDown = true;
    if (slowDown) {
      const e = performance.now() + 0.8;
      while (performance.now() < e) {
        // Artificially long execution time.
      }
    }
    return html`
      <fiber-triangle x="${this.x}" y="${this.y - (s / 2)}" s="${s}" seconds="${this.seconds}"></fiber-triangle>
      <fiber-triangle x="${this.x - s}" y="${this.y + (s / 2)}" s="${s}" seconds="${this.seconds}"></fiber-triangle>
      <fiber-triangle x="${this.x + s}" y="${this.y + (s / 2)}" s="${s}" seconds="${this.seconds}"></fiber-triangle>
    `;
  }
}

customElements.define('fiber-triangle', FiberTriangle);

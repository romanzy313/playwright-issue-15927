import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("div-component")
export class DivComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<div>Hello world from div</div>`;
  }
}

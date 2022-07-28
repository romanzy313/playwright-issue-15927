import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("plain-component")
export class PlainComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`Hello world`;
  }
}

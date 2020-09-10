import { h, render } from "preact";
import { MDEditor } from "./MDEditor";

export class MDEditorElement extends HTMLElement {
  renderRoot!: ShadowRoot;
  styleSheet!: HTMLStyleElement;
  container!: HTMLDivElement;

  constructor() {
    super();
    this.renderRoot = this.attachShadow({ mode: "open" });
    this.styleSheet = document.createElement("style");
    this.container = document.createElement("div");
    this.renderRoot.appendChild(this.styleSheet);
    this.renderRoot.appendChild(this.container);
  }

  connectedCallback() {
    this.styled();
    render(<MDEditor />, this.container);
  }

  styled() {
    const styled = /*css*/ ``;
    this.styleSheet.textContent = styled;
  }
}

customElements.define("md-editor", MDEditorElement);

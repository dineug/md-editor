import { h, render } from "preact";
import { fromEvent, Subscription } from "rxjs";
import { EditorData, EditorContext } from "@type/index";
import { MDEditorElement as MDEditorElementInternal } from "@src/internal-types";
import { createEditorContext } from "@src/core/editorContext";
import { Logger } from "@src/core/logger";
import { use } from "@src/core/plugin";
import { builtin } from "./plugins/builtin";
import { builtinCSS } from "./css/builtin";
import { MDEditor } from "./MDEditor";

const DEFAULT_WIDTH = 708;
const DEFAULT_HEIGHT = 800;

class MDEditorElement extends HTMLElement implements MDEditorElementInternal {
  _editorContext: EditorContext;
  #renderRoot: ShadowRoot;
  #styleSheet: HTMLStyleElement;
  #container: HTMLDivElement;
  #textWidth: HTMLSpanElement;
  #subscriptions: Array<Subscription> = [];
  #width = DEFAULT_WIDTH;
  #height = DEFAULT_HEIGHT;
  #isMounted = false;
  #isUpdate = false;

  static get observedAttributes() {
    return ["width", "height"];
  }

  get width(): number {
    return this.#width;
  }
  set width(value: number) {
    this.#width = value;
    this.reflectAttributes();
    this.requestUpdate();
  }

  get height(): number {
    return this.#height;
  }
  set height(value: number) {
    this.#height = value;
    this.reflectAttributes();
    this.requestUpdate();
  }

  constructor() {
    super();
    this.#renderRoot = this.attachShadow({ mode: "closed" });
    this.#styleSheet = document.createElement("style");
    this.#container = document.createElement("div");
    this.#textWidth = document.createElement("span");
    this.#textWidth.classList.add("mde-text-width");
    this.#renderRoot.appendChild(this.#styleSheet);
    this.#renderRoot.appendChild(this.#container);
    this.#renderRoot.appendChild(this.#textWidth);
    this._editorContext = createEditorContext();
  }

  connectedCallback() {
    this.#isMounted = true;
    this.#subscriptions.push(
      fromEvent<KeyboardEvent>(this.#container, "keydown").subscribe(
        (event) => {
          Logger.debug(`
          metaKey: ${event.metaKey}
          ctrlKey: ${event.ctrlKey}
          altKey: ${event.altKey}
          shiftKey: ${event.shiftKey}
          code: ${event.code}
          key: ${event.key}
          `);
        }
      )
    );

    this.reflectAttributes();
    this.styled();
    this.render();
  }

  attributeChangedCallback(name: string, _: any, value: any) {
    switch (name) {
      case "width":
        const width = Number(value);
        if (width !== NaN && this.width !== width) {
          this.width = width;
        }
        break;
      case "height":
        const height = Number(value);
        if (height !== NaN && this.height !== height) {
          this.height = height;
        }
        break;
    }
  }

  disconnectedCallback() {
    this.#isMounted = false;
    this.#subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private reflectAttributes() {
    if (this.#isMounted) {
      const width = this.getAttribute("width");
      const height = this.getAttribute("height");
      if (width !== this.width.toString()) {
        this.setAttribute("width", this.width.toString());
      }
      if (height !== this.height.toString()) {
        this.setAttribute("height", this.height.toString());
      }
    }
  }

  private requestUpdate() {
    if (!this.#isUpdate) {
      this.#isUpdate = true;
      Promise.resolve()
        .then(() => this.render())
        .finally(() => (this.#isUpdate = false));
    }
  }

  private styled() {
    const styled = /*css*/ `${builtinCSS}`;
    this.#styleSheet.textContent = styled;
  }

  private render() {
    render(
      <MDEditor width={this.width} height={this.height} />,
      this.#container
    );
  }

  loadJson(json: EditorData | string) {
    // TODO: loadJson
    Logger.debug("loadJson", json);
  }
  saveJson(): EditorData {
    // TODO: saveJson
    Logger.debug("saveJson");
    return {
      containers: [],
    };
  }

  loadMarkdown(markdown: string) {
    // TODO: loadMarkdown
    Logger.debug("loadMarkdown", markdown);
  }
  saveMarkdown(): string {
    // TODO: saveMarkdown
    Logger.debug("saveMarkdown");
    return "";
  }
}

use(...builtin());
customElements.define("md-editor", MDEditorElement);

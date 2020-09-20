import { h, render } from "preact";
import { fromEvent, Subscription } from "rxjs";
import { MDEditorElement, EditorData } from "@type/index";
import { Logger } from "@src/core/logger";
import { use } from "@src/core/plugin";
import { builtin } from "./plugins/builtin";
import { MDEditor } from "./MDEditor";

class MDEditorCustomElement extends HTMLElement implements MDEditorElement {
  #renderRoot: ShadowRoot;
  #styleSheet: HTMLStyleElement;
  #container: HTMLDivElement;
  #subscriptionList: Subscription[] = [];

  constructor() {
    super();
    this.#renderRoot = this.attachShadow({ mode: "closed" });
    this.#styleSheet = document.createElement("style");
    this.#container = document.createElement("div");
    this.#renderRoot.appendChild(this.#styleSheet);
    this.#renderRoot.appendChild(this.#container);
  }

  connectedCallback() {
    this.styled();
    render(<MDEditor />, this.#container);

    this.#subscriptionList.push(
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
  }

  disconnectedCallback() {
    this.#subscriptionList.forEach((subscription) =>
      subscription.unsubscribe()
    );
    this.#subscriptionList = [];
  }

  styled() {
    const styled = /*css*/ ``;
    this.#styleSheet.textContent = styled;
  }

  loadJson(json: EditorData) {
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
customElements.define("md-editor", MDEditorCustomElement);

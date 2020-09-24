import { h, render } from "preact";
import { fromEvent, Subscription } from "rxjs";
import {
  MDEditorElement as IMDEditorElement,
  EditorData,
  EditorContext,
} from "@type/index";
import { createEditorContext } from "@src/core/editorContext";
import { Logger } from "@src/core/logger";
import { use } from "@src/core/plugin";
import { builtin } from "./plugins/builtin";
import { MDEditor } from "./MDEditor";

export interface MDEditorElementInternal extends IMDEditorElement {
  _editorContext: EditorContext;
}

class MDEditorElement extends HTMLElement implements MDEditorElementInternal {
  #renderRoot: ShadowRoot;
  #styleSheet: HTMLStyleElement;
  #container: HTMLDivElement;
  #subscriptions: Array<Subscription> = [];
  _editorContext: EditorContext;

  constructor() {
    super();
    this.#renderRoot = this.attachShadow({ mode: "closed" });
    this.#styleSheet = document.createElement("style");
    this.#container = document.createElement("div");
    this.#renderRoot.appendChild(this.#styleSheet);
    this.#renderRoot.appendChild(this.#container);
    this._editorContext = createEditorContext();
  }

  connectedCallback() {
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

    this.styled();
    render(<MDEditor />, this.#container);
  }

  disconnectedCallback() {
    this.#subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  styled() {
    const styled = /*css*/ `
      .mde-container {
        position: relative;
      }
      .mde-command {
        list-style: none;
        padding: 0;
        margin: 0;
        position: fixed;
      }
    `;
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
customElements.define("md-editor", MDEditorElement);

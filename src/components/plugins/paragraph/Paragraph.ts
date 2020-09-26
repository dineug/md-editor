import { ContainerEditor, EditorContext } from "@type/index";
import { getCaretRect } from "@src/core/helper";
import { moveCommand, showCommand } from "@src/core/command/command";

export class Paragraph implements ContainerEditor<string> {
  #api: EditorContext;
  #viewerElement: HTMLParagraphElement;
  #editorElement: HTMLDivElement;
  #edit = false;

  constructor(value: string, api: EditorContext) {
    this.#api = api;
    this.#viewerElement = document.createElement("p");
    this.#editorElement = document.createElement("div");
    this.#editorElement.contentEditable = "true";
    this.#editorElement.textContent = value;
    paragraphStyle(this.#editorElement);
    this.initEvent();
  }

  viewer() {
    this.#edit = false;
    this.#viewerElement.textContent = this.#editorElement.textContent;
    return this.#viewerElement;
  }
  editor() {
    this.#edit = true;
    return this.#editorElement;
  }
  save() {
    return this.#editorElement.textContent as string;
  }
  mounted() {
    if (this.#edit) {
      this.#editorElement.focus();
    }
  }

  private initEvent() {
    this.#editorElement.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
      }
    });
    this.#editorElement.addEventListener("keyup", (event) => {
      if (event.code === "Slash") {
        const { eventBus } = this.#api;
        const rect = getCaretRect(this.#editorElement);
        eventBus.dispatch(
          moveCommand({
            x: rect.x,
            y: rect.bottom,
          }),
          showCommand()
        );
      }
    });
  }
}

function paragraphStyle(el: HTMLElement) {
  const { style } = el;
  el.spellcheck = false;
  style.outline = "none";
  style.border = "none";
  style.width = "100%";
  style.font = "unset";
  style.padding = "unset";

  style.display = "block";
  style.marginBlockStart = "1em";
  style.marginBlockEnd = "1em";
  style.marginInlineStart = "0px";
  style.marginInlineEnd = "0px";
}

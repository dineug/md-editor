import { ContainerEditor, EditorContext } from "@type/index";

export class Paragraph implements ContainerEditor<string> {
  #api: EditorContext;
  #viewerElement: HTMLParagraphElement;
  #editorElement: HTMLInputElement;
  #edit = false;

  constructor(value: string, api: EditorContext) {
    this.#api = api;
    this.#viewerElement = document.createElement("p");
    this.#editorElement = document.createElement("input");
    this.#editorElement.value = value;
    paragraphStyle(this.#editorElement);
  }

  viewer() {
    this.#edit = false;
    this.#viewerElement.textContent = this.#editorElement.value;
    return this.#viewerElement;
  }
  editor() {
    this.#edit = true;
    return this.#editorElement;
  }
  save() {
    return this.#editorElement.value;
  }
  mounted() {
    if (this.#edit) {
      this.#editorElement.focus();
    }
  }
}

function paragraphStyle(el: HTMLInputElement) {
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

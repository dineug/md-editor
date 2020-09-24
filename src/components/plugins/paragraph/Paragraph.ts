import { ContainerEditor } from "@type/index";

export class Paragraph implements ContainerEditor<string> {
  #viewerElement: HTMLParagraphElement;
  #editorElement: HTMLInputElement;
  #value: string;
  #edit = false;

  constructor(value: string) {
    this.#value = value;
    this.#viewerElement = document.createElement("p");
    this.#editorElement = document.createElement("input");
    paragraphStyle(this.#editorElement);
  }

  viewer() {
    this.#edit = false;
    this.#viewerElement.textContent = this.#value;
    return this.#viewerElement;
  }
  editor() {
    this.#edit = true;
    this.#editorElement.value = this.#value;
    return this.#editorElement;
  }
  save() {
    return this.#value;
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

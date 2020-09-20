import { ContainerEditor } from "@type/index";

export class Paragraph implements ContainerEditor<string> {
  #viewerElement: HTMLParagraphElement;
  #editorElement: HTMLInputElement;
  #value: string;

  constructor(value: string) {
    this.#value = value;
    this.#viewerElement = document.createElement("p");
    this.#editorElement = document.createElement("input");
    paragraphStyle(this.#editorElement);
  }

  viewer() {
    this.#viewerElement.textContent = this.#value;
    return this.#viewerElement;
  }
  editor() {
    this.#editorElement.value = this.#value;
    setTimeout(() => {
      this.#editorElement.focus();
    }, 0);
    return this.#editorElement;
  }
  save() {
    return this.#value;
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

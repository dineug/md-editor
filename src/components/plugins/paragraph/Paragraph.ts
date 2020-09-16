import { ContainerEditor } from "@type/index";

export class Paragraph implements ContainerEditor<string> {
  #viewerElement: HTMLParagraphElement;
  #editorElement: HTMLInputElement;
  #value: string;

  constructor(value: string) {
    this.#value = value;
    this.#viewerElement = document.createElement("p");
    this.#editorElement = document.createElement("input");
  }

  viewer() {
    this.#viewerElement.textContent = this.#value;
    return this.#viewerElement;
  }
  editor() {
    this.#editorElement.value = this.#value;
    return this.#editorElement;
  }
  save() {
    return this.#value;
  }
}

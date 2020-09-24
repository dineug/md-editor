import { ContainerEditor } from "@type/index";

export interface HeadingProps {
  level: number;
  text: string;
}

export class Heading implements ContainerEditor<HeadingProps> {
  #viewerElement: HTMLHeadingElement;
  #editorElement: HTMLInputElement;
  #level: number;
  #text: string;
  #edit = false;

  constructor(props: HeadingProps) {
    this.#level = props.level;
    this.#text = props.text;
    this.#viewerElement = document.createElement(
      `h${props.level}`
    ) as HTMLHeadingElement;
    this.#editorElement = document.createElement("input");
    headingStyle(this.#editorElement, props.level);
  }

  viewer() {
    this.#edit = false;
    this.#viewerElement.textContent = this.#text;
    return this.#viewerElement;
  }
  editor() {
    this.#edit = true;
    this.#editorElement.value = this.#text;
    return this.#editorElement;
  }
  save() {
    return {
      level: this.#level,
      text: this.#text,
    };
  }
  mounted() {
    if (this.#edit) {
      this.#editorElement.focus();
    }
  }
}

function headingStyle(el: HTMLInputElement, level: number) {
  const { style } = el;
  el.spellcheck = false;
  style.outline = "none";
  style.border = "none";
  style.width = "100%";
  style.font = "unset";
  style.padding = "unset";

  style.display = "block";
  style.marginInlineStart = "0px";
  style.marginInlineEnd = "0px";
  style.fontWeight = "bold";

  switch (level) {
    case 1:
      style.fontSize = "2em";
      style.marginBlockStart = "0.67em";
      style.marginBlockEnd = "0.67em";
      break;
    case 2:
      style.fontSize = "1.5em";
      style.marginBlockStart = "0.83em";
      style.marginBlockEnd = "0.83em";
      break;
    case 3:
      style.fontSize = "1.17em";
      style.marginBlockStart = "1em";
      style.marginBlockEnd = "1em";
      break;
    case 4:
      style.marginBlockStart = "1.33em";
      style.marginBlockEnd = "1.33em";
      break;
    case 5:
      style.fontSize = "0.83em";
      style.marginBlockStart = "1.67em";
      style.marginBlockEnd = "1.67em";
      break;
    case 6:
      style.fontSize = "0.67em";
      style.marginBlockStart = "2.33em";
      style.marginBlockEnd = "2.33em";
      break;
  }
}

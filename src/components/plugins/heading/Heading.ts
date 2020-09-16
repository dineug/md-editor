import { ContainerEditor } from "@type/index";

export interface HeadingProps {
  level: number;
  text: string;
}

export class Heading implements ContainerEditor<HeadingProps> {
  viewerElement: HTMLElement;
  editorElement: HTMLInputElement;
  level: number;
  text: string;

  constructor(props: HeadingProps) {
    this.level = props.level;
    this.text = props.text;
    this.viewerElement = document.createElement(`h${props.level}`);
    this.editorElement = document.createElement("input");
  }

  viewer() {
    this.viewerElement.textContent = this.text;
    return this.viewerElement;
  }
  editor() {
    this.editorElement.value = this.text;
    return this.editorElement;
  }
  save() {
    return {
      level: this.level,
      text: this.text,
    };
  }
}

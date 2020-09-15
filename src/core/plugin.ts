import { ContainerEditorOptions } from "@type/index";

const editors: Array<ContainerEditorOptions<any>> = [];

export function use<T>(...options: Array<ContainerEditorOptions<T>>) {
  editors.push(...options);
}

export function getEditor(type: string): ContainerEditorOptions | undefined {
  return editors.find((editor) => editor.type === type);
}

export function getEditors(): Array<ContainerEditorOptions> {
  return editors;
}

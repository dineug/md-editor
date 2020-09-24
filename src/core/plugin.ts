import { ContainerEditorOptions } from "@type/index";
import { uuid } from "./helper";

interface ContainerEditorOptionsInternal extends ContainerEditorOptions {
  id: string;
}

const editors: Array<ContainerEditorOptionsInternal> = [];

export function use<T>(...options: Array<ContainerEditorOptions<T>>) {
  editors.push(
    ...options.map((option) => Object.assign(option, { id: uuid() }))
  );
}

export function getEditor(
  name: string
): ContainerEditorOptionsInternal | undefined {
  return editors.find((editor) => editor.name === name);
}

export function getEditors(): Array<ContainerEditorOptionsInternal> {
  return editors;
}

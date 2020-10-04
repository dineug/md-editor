import { ContainerEditorOptions as ContainerEditorOptionsExternal } from "@type/index";
import { ContainerEditorOptions } from "@src/internal-types";
import { uuid } from "./helper";

const editors: Array<ContainerEditorOptions> = [];

export function use<T>(...options: Array<ContainerEditorOptionsExternal<T>>) {
  editors.push(
    ...options.map((option) => Object.assign(option, { id: uuid() }))
  );
}

export function getEditor(name: string): ContainerEditorOptions | undefined {
  return editors.find((editor) => editor.name === name);
}

export function getEditors(): Array<ContainerEditorOptions> {
  return [...editors];
}

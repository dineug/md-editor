export interface MDEditorElement extends HTMLElement {
  loadJson(json: EditorData): void;
  saveJson(): EditorData;
  loadMarkdown(markdown: string): void;
  saveMarkdown(): string;
}

declare global {
  interface HTMLElementTagNameMap {
    "md-editor": MDEditorElement;
  }
}

export interface ContainerEditor<T = any> {
  viewer(): HTMLElement;
  editor(): HTMLElement;
  save(): T;
}

export interface ContainerEditorClass<T = any> {
  new (props: T): ContainerEditor<T>;
}

export interface ContainerEditorOptions<T = any> {
  type: string;
  name: string;
  editor: ContainerEditorClass<T>;
  defaultProps(): T;
}

export interface ContainerEditorInstance {
  id: string;
  container: ContainerEditor;
  edit: boolean;
}

export type ContainerData<T = any> = T;

export interface ContainerEditorData {
  type: string;
  data: ContainerData;
}

export interface EditorData {
  containers: Array<ContainerEditorData>;
}

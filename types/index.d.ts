export interface ContainerEditor<T = {}> {
  viewer(): HTMLElement;
  editor(): HTMLElement;
  save(): T;
}

export interface ContainerEditorClass<T = {}> {
  new (props: T): ContainerEditor<T>;
}

export interface ContainerEditorOptions<T = {}> {
  type: string;
  name: string;
  editor: ContainerEditorClass<T>;
  defaultProps(): T;
}

export interface ContainerEditorInstance {
  id: string;
  editor: ContainerEditor;
}

export type ContainerData<T = {}> = T;

export interface ContainerEditorData {
  type: string;
  data: ContainerData;
}

export interface EditorData {
  containers: ContainerEditorData[];
}

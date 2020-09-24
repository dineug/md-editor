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
  mounted?(): void;
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

declare function use<T>(...options: Array<ContainerEditorOptions<T>>): void;

export interface EventBus {
  on<T = any>(
    eventName: string,
    handler: (event: CustomEvent<T>) => void
  ): () => void;
  emit<T = any>(eventName: string, detail?: T): void;
}

export interface EditorContext {
  eventBus: EventBus;
}

import { CommandMap } from "./command";

export interface MDEditorElement extends HTMLElement {
  width: number;
  height: number;
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
  destroy?(): void;
}

export interface ContainerEditorClass<T = any> {
  new (props: T, api: EditorContext): ContainerEditor<T>;
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

export function use<T>(...options: Array<ContainerEditorOptions<T>>): void;

export interface EventBus {
  on<K extends keyof CommandMap>(
    name: K,
    listener: (data: CommandMap[K]) => void
  ): () => void;
  on<T = any>(name: string, listener: (data: T) => void): () => void;
  emit<K extends keyof CommandMap>(name: K, data: CommandMap[K]): void;
  emit<T = any>(name: string, data?: T): void;
}

export interface EditorContext {
  eventBus: EventBus;
}

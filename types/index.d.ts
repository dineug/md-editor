import { EventBus } from "./event";

export interface MDEditorElement extends HTMLElement {
  width: number;
  height: number;
  loadJson(json: EditorData | string): void;
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

export interface EditorContext {
  eventBus: EventBus;
}

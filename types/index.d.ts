export interface ContainerEditor<P = {}> {
  viewer(value: P): HTMLElement;
  editor(value: P): HTMLElement;
  save(): P;
}

export interface ContainerEditorClass<P = {}> {
  new (): ContainerEditor<P>;
}

export type ContainerData<P = {}> = P;

export interface OutputContainerData {
  type: string;
  data: ContainerData;
}

export interface OutputData {
  containers: OutputContainerData[];
}

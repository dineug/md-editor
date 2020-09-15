import { ContainerManager, createContainerManager } from "./containerManager";

export interface EditorContext {
  containerManager: ContainerManager;
}

export function createEditorContext(): EditorContext {
  return {
    containerManager: createContainerManager(),
  };
}

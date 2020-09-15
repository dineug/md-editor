import { EditorManager, createEditorManager } from "./editorManager";

export interface EditorContext {
  editorManager: EditorManager;
}

export function createEditorContext(): EditorContext {
  return {
    editorManager: createEditorManager(),
  };
}

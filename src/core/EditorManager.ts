import { v4 as uuidv4 } from "uuid";
import { ContainerEditorInstance, ContainerEditor } from "@type/index";

export interface EditorManager {
  add(editor: ContainerEditor): void;
}

export function createEditorManager() {
  const containers: ContainerEditorInstance[] = [];

  return {
    add(editor: ContainerEditor) {
      containers.push({
        id: uuidv4(),
        editor,
      });
    },
  };
}

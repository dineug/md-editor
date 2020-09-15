import { v4 as uuidv4 } from "uuid";
import { ContainerEditorInstance, ContainerEditor } from "@type/index";

export interface ContainerManager {
  add(container: ContainerEditor): void;
}

export function createContainerManager() {
  const containers: Array<ContainerEditorInstance> = [];

  return {
    add(container: ContainerEditor) {
      containers.push({
        id: uuidv4(),
        container,
      });
    },
  };
}

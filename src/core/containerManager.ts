import { ContainerEditorInstance, ContainerEditor } from "@type/index";
import { uuid } from "./helper";

export interface ContainerManager {
  add(container: ContainerEditor): void;
}

export function createContainerManager() {
  const containers: Array<ContainerEditorInstance> = [];

  return {
    add(container: ContainerEditor) {
      containers.push({
        id: uuid(),
        container,
      });
    },
  };
}

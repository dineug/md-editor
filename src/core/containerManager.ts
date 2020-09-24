import { useState, useEffect } from "preact/hooks";
import { ContainerEditorInstance, ContainerEditor } from "@type/index";
import { Logger } from "./logger";
import { uuid } from "./helper";
import { getEditor } from "./plugin";

export function useContainerManager() {
  Logger.debug("useContainerManager");
  const [containers, setContainers] = useState<Array<ContainerEditorInstance>>(
    []
  );

  const pushContainer = (...containers: Array<ContainerEditor>) => {
    setContainers((prevContainers) => {
      prevContainers.forEach((prevContainer) => (prevContainer.edit = false));
      return [
        ...prevContainers,
        ...containers.map((container, index) => ({
          id: uuid(),
          container,
          edit: containers.length === index + 1,
        })),
      ];
    });
  };

  const pushOnlyContainer = (...containers: Array<ContainerEditor>) => {
    setContainers((prevContainers) => [
      ...prevContainers,
      ...containers.map((container) => ({
        id: uuid(),
        container,
        edit: false,
      })),
    ]);
  };

  useEffect(() => {
    Logger.debug("useContainerManager useEffect");
    const options = getEditor("Paragraph");
    if (options) {
      pushContainer(new options.editor(options.defaultProps()));
    }
  }, []);

  return {
    containers,
    pushContainer,
    pushOnlyContainer,
  };
}

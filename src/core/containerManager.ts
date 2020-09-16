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

  const pushContainer = (container: ContainerEditor) => {
    setContainers((prevContainers) => [
      ...prevContainers,
      {
        id: uuid(),
        container,
      },
    ]);
  };

  useEffect(() => {
    Logger.debug("useContainerManager useEffect");
    const container = getEditor("Paragraph");
    if (container) {
      pushContainer(new container.editor(container.defaultProps()));
    }
  }, []);

  return {
    containers,
    pushContainer,
  };
}

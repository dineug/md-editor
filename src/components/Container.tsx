import { h, FunctionalComponent } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { ContainerEditorInstance } from "@type/index";
import { Logger } from "@src/core/logger";

export const Container: FunctionalComponent<ContainerEditorInstance> = ({
  edit,
  container,
}) => {
  Logger.debug("Container");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Logger.debug("Container useEffect");
    const { current } = rootRef;
    current.innerHTML = "";
    if (edit) {
      current.appendChild(container.editor());
    } else {
      current.appendChild(container.viewer());
    }
    if (container.mounted) {
      container.mounted();
    }
  }, [edit]);

  return <div class="mde-container" ref={rootRef} />;
};

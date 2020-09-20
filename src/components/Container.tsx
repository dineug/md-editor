import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { ContainerEditorInstance } from "@type/index";
import { Logger } from "@src/core/logger";

export function Container(props: ContainerEditorInstance) {
  Logger.debug("Container");
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Logger.debug("Container useEffect");
    root.current.innerHTML = "";
    if (props.edit) {
      root.current.appendChild(props.container.editor());
    } else {
      root.current.appendChild(props.container.viewer());
    }
  }, [props.edit]);

  return <div ref={root} />;
}

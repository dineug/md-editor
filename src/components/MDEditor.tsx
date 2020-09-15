import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { Logger } from "@src/core/logger";
import { getEditor } from "@src/core/plugin";
import { createEditorContext } from "@src/core/editorContext";

export function MDEditor() {
  const root = useRef<HTMLDivElement>(null);
  Logger.debug("MDEditor");

  useEffect(() => {
    Logger.debug("MDEditor useEffect");
    const editorContext = createEditorContext();
    const container = getEditor("Heading");
    if (container) {
      editorContext.editorManager.add(
        new container.editor(container.defaultProps())
      );
    }
  }, []);

  return <div ref={root} />;
}

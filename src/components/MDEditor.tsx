import { h, FunctionalComponent } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { Unsubscribe } from "@type/event";
import { Logger } from "@src/core/logger";
import { useContainerManager } from "@src/core/containerManager";
import { getEditor } from "@src/core/plugin";
import { getEditorContext } from "@src/core/editorContext";
import { Container } from "./Container";
import { useCommand } from "./Command";
import { EditorName } from "./plugins/builtin";

interface MDEditorProps {
  width: number;
  height: number;
}

export const MDEditor: FunctionalComponent<MDEditorProps> = ({
  width,
  height,
}) => {
  Logger.debug("MDEditor");
  const rootRef = useRef<HTMLDivElement>(null);
  const { containers, pushContainer } = useContainerManager();
  const { Command, moveCommand, showCommand, hideCommand } = useCommand();

  useEffect(() => {
    Logger.debug("MDEditor useEffect");
    const unsubscribes: Array<Unsubscribe> = [];
    const editorContext = getEditorContext(rootRef.current);
    const { eventBus } = editorContext;

    const options = getEditor(EditorName.Paragraph);
    if (options) {
      pushContainer(new options.editor(options.defaultProps(), editorContext));
    }

    unsubscribes.push(
      eventBus.on("mde.command.move", (data) => {
        moveCommand(data);
      }),
      eventBus.on("mde.command.show", () => {
        showCommand();
      }),
      eventBus.on("mde.command.hide", () => {
        hideCommand();
      })
    );

    return () => unsubscribes.forEach((unsubscribe) => unsubscribe());
  }, []);

  return (
    <div ref={rootRef} style={{ width, height }}>
      {containers.map((container) => (
        <Container key={container.id} {...container}></Container>
      ))}
      <Command />
    </div>
  );
};

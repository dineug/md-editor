import { h, FunctionalComponent } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { Logger } from "@src/core/logger";
import { useContainerManager } from "@src/core/containerManager";
import { Container } from "./Container";
import { Command } from "./Command";

export const MDEditor: FunctionalComponent = () => {
  Logger.debug("MDEditor");
  const rootRef = useRef<HTMLDivElement>(null);
  const { containers } = useContainerManager();

  useEffect(() => {
    Logger.debug("MDEditor useEffect");
  }, []);

  return (
    <div ref={rootRef}>
      {containers.map((container) => (
        <Container key={container.id} {...container}></Container>
      ))}
      <Command x={100} y={100} />
    </div>
  );
};

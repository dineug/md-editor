import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { Logger } from "@src/core/logger";
import { useContainerManager } from "@src/core/containerManager";
import { Container } from "./Container";

export function MDEditor() {
  Logger.debug("MDEditor");
  const root = useRef<HTMLDivElement>(null);
  const { containers } = useContainerManager();

  useEffect(() => {
    Logger.debug("MDEditor useEffect");
  }, []);

  return (
    <div ref={root}>
      {containers.map((container) => (
        <Container key={container.id} {...container}></Container>
      ))}
    </div>
  );
}

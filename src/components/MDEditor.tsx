import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { Logger } from "@src/core/Logger";

export function MDEditor() {
  const root = useRef<HTMLDivElement>(null);
  Logger.debug("MDEditor");

  useEffect(() => {
    Logger.debug("MDEditor useEffect");
  }, []);

  return <div ref={root} />;
}

import { h, FunctionalComponent } from "preact";
import { Logger } from "@src/core/logger";
import { getEditors } from "@src/core/plugin";

interface CommandProps {
  x: number;
  y: number;
}

export const Command: FunctionalComponent<CommandProps> = ({ x, y }) => {
  Logger.debug("Command");
  return (
    <ul style={{ position: "fixed", left: x, top: y }}>
      {getEditors().map((container) => (
        <li key={container.name}>{container.name}</li>
      ))}
    </ul>
  );
};

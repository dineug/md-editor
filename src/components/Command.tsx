import { h, Fragment, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Logger } from "@src/core/logger";
import { getEditors } from "@src/core/plugin";

interface CommandProps {
  x: number;
  y: number;
}

const Command: FunctionalComponent<CommandProps> = ({ x, y }) => {
  Logger.debug("Command");
  return (
    <ul class="mde-command" style={{ left: x, top: y }}>
      {getEditors().map((container) => (
        <li key={container.id}>{container.name}</li>
      ))}
    </ul>
  );
};

interface CommandState {
  x: number;
  y: number;
  show: boolean;
}

export function useCommand() {
  const [state, setState] = useState<CommandState>({
    x: 0,
    y: 0,
    show: false,
  });

  return {
    Command: () => (state.show ? <Command x={state.x} y={state.y} /> : <></>),
    moveCommand: (data: CommandProps) => {
      setState({
        ...state,
        ...data,
      });
    },
    showCommand: () => {
      setState({
        ...state,
        show: true,
      });
    },
    hideCommand: () => {
      setState({
        ...state,
        show: false,
      });
    },
  };
}

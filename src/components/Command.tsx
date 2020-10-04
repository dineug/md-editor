import { h, Fragment, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { ContainerEditorOptions } from "@src/internal-types";
import { Logger } from "@src/core/logger";
import { getEditors } from "@src/core/plugin";

interface CommandProps {
  x: number;
  y: number;
  editors: Array<ContainerEditorOptions>;
}

const Command: FunctionalComponent<CommandProps> = ({ x, y, editors }) => {
  Logger.debug("Command");
  return (
    <ul class="mde-command" style={{ left: x, top: y }}>
      {editors.map((container) => (
        <li key={container.id}>{container.name}</li>
      ))}
    </ul>
  );
};

interface CommandState {
  x: number;
  y: number;
  visible: boolean;
}

export function useCommand() {
  const [state, setState] = useState<CommandState>({
    x: 0,
    y: 0,
    visible: false,
  });
  const [editors, setEditors] = useState<Array<ContainerEditorOptions>>(
    getEditors()
  );

  return {
    Command: () =>
      state.visible ? (
        <Command x={state.x} y={state.y} editors={editors} />
      ) : (
        <></>
      ),
    moveCommand(data: CommandProps) {
      setState((prevState) => {
        return {
          ...prevState,
          ...data,
        };
      });
    },
    showCommand() {
      setState((prevState) => {
        return {
          ...prevState,
          visible: true,
        };
      });
    },
    hideCommand() {
      setState((prevState) => {
        return {
          ...prevState,
          visible: false,
        };
      });
    },
    filterCommand(keyword: string) {
      console.log(keyword);
    },
  };
}

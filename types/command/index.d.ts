import { MoveCommand } from "./command";

export interface CommandMap {
  "mde.command.move": MoveCommand;
  "mde.command.show": null;
  "mde.command.hide": null;
}

export type CommandKey = keyof CommandMap;

export interface CommandType<K extends CommandKey> {
  name: K;
  data?: CommandMap[K];
}

export interface CommandTypeAny {
  name: string;
  data?: any;
}

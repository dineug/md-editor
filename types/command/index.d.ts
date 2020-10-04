import { MoveCommand, FilterCommand } from "./command";

export interface CommandMap {
  "mde.command.move": MoveCommand;
  "mde.command.show": null;
  "mde.command.hide": null;
  "mde.command.filter": FilterCommand;
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

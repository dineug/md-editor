import { CommandType } from "@type/command";
import { MoveCommand, FilterCommand } from "@type/command/command";

export function moveCommand(
  data: MoveCommand
): CommandType<"mde.command.move"> {
  return {
    name: "mde.command.move",
    data,
  };
}

export function showCommand(): CommandType<"mde.command.show"> {
  return {
    name: "mde.command.show",
  };
}

export function hideCommand(): CommandType<"mde.command.hide"> {
  return {
    name: "mde.command.hide",
  };
}

export function filterCommand(
  keyword: string
): CommandType<"mde.command.filter"> {
  return {
    name: "mde.command.filter",
    data: {
      keyword,
    },
  };
}

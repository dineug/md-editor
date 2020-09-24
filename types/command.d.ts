export interface CommandMap {
  "mde.command.move": CommandMove;
  "mde.command.show": null;
  "mde.command.hide": null;
}

interface CommandMove {
  x: number;
  y: number;
}

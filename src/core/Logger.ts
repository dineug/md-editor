export const Logger = {
  debug(...args: Array<any>) {
    args.forEach((arg) => console.dir(arg));
  },
  log(...args: Array<any>) {
    console.log(...args);
  },
  warn(...args: Array<any>) {
    console.warn(...args);
  },
  error(...args: Array<any>) {
    console.error(...args);
  },
};

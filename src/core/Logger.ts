export const Logger = {
  debug(...args: any[]) {
    console.dir(...args);
  },
  log(...args: any[]) {
    console.log(...args);
  },
  warn(...args: any[]) {
    console.warn(...args);
  },
  error(...args: any[]) {
    console.error(...args);
  },
};

export function range(start: number, end?: number): Array<number> {
  if (end !== undefined) {
    const size = 1 + end - start;
    return [...Array(size)].map((_, index) => index + start);
  } else {
    return [...Array(start)].map((_, index) => index);
  }
}

export function uuid(): string {
  const s4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return [
    s4(),
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    s4(),
    s4(),
  ].join("");
}

export function getCaretRect(el: HTMLElement): DOMRect {
  const renderRoot = el.getRootNode() as ShadowRoot;
  const sel = renderRoot.getSelection();
  if (sel?.rangeCount) {
    const range = sel.getRangeAt(0).cloneRange();
    return range.getBoundingClientRect();
  }
  return el.getBoundingClientRect();
}

export function getSlashKeyword(text: string): string | null {
  const keywords = text.match(/(\/.\w+|\/)/gi);
  if (keywords && keywords.length) {
    const keyword = keywords[keywords.length - 1];
    return keyword.substring(1).trim();
  }
  return null;
}

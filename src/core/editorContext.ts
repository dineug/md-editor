import { EditorContext } from "@type/index";
import { MDEditorElement } from "@src/internal-types";
import { createEventBus } from "./event";

export function createEditorContext(): EditorContext {
  return {
    eventBus: createEventBus(),
  };
}

export function getEditorContext(el: HTMLElement): EditorContext {
  const rootNode = el.getRootNode() as ShadowRoot;
  const host = rootNode.host as MDEditorElement;
  return host._editorContext;
}

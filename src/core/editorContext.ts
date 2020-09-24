import { EditorContext } from "@type/index";
import { MDEditorElementInternal as MDEditorElement } from "@src/components/MDEditorElement";
import { EventBus } from "./eventHelper";

export function createEditorContext(): EditorContext {
  return {
    eventBus: new EventBus(),
  };
}

export function getEditorContext(el: HTMLElement): EditorContext {
  const rootNode = el.getRootNode() as ShadowRoot;
  const host = rootNode.host as MDEditorElement;
  return host._editorContext;
}

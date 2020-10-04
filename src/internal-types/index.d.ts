import {
  ContainerEditorOptions as ContainerEditorOptionsExternal,
  MDEditorElement as MDEditorElementExternal,
  EditorContext,
} from "@type/index";

export interface ContainerEditorOptions extends ContainerEditorOptionsExternal {
  id: string;
}

export interface MDEditorElement extends MDEditorElementExternal {
  _editorContext: EditorContext;
}

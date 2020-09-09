import "preact/debug";
import "preact/devtools";
export * from "./index";

function setupEditor() {
  const editor = document.createElement("md-editor");
  document.body.appendChild(editor);
}

setupEditor();

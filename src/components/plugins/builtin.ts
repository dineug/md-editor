import { ContainerEditorOptions } from "@type/index";
import { range } from "@src/core/helper";
import { Paragraph } from "./paragraph/Paragraph";
import { Heading, HeadingProps } from "./heading/Heading";

export function builtin(): Array<ContainerEditorOptions> {
  const editors: Array<ContainerEditorOptions> = [];

  range(1, 6).forEach((level) => {
    editors.push({
      type: Heading.name,
      name: `${Heading.name} ${level}`,
      editor: Heading,
      defaultProps: () => ({
        level,
        text: "",
      }),
    } as ContainerEditorOptions<HeadingProps>);
  });

  editors.push({
    type: Paragraph.name,
    name: Paragraph.name,
    editor: Paragraph,
    defaultProps: () => "",
  } as ContainerEditorOptions<string>);

  return editors;
}

export const enum EditorName {
  Paragraph = "Paragraph",
  Heading1 = "Heading 1",
  Heading2 = "Heading 2",
  Heading3 = "Heading 3",
  Heading4 = "Heading 4",
  Heading5 = "Heading 5",
  Heading6 = "Heading 6",
}

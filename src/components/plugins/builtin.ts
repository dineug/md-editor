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

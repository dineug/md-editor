import { range } from "rxjs";
import { ContainerEditorOptions } from "@type/index";
import { Heading, HeadingProps } from "./plugins/Heading";

export function builtin(): Array<ContainerEditorOptions<any>> {
  const editors: Array<ContainerEditorOptions<any>> = [];

  range(1, 6).subscribe((i) => {
    editors.push({
      type: "Heading",
      name: `Heading ${i}`,
      editor: Heading,
      defaultProps: () => ({
        level: i,
        text: "",
      }),
    } as ContainerEditorOptions<HeadingProps>);
  });

  return editors;
}

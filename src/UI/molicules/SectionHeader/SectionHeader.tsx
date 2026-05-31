import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import type { SectionHeaderProps } from "./sectionheader.types";

export default function SectionHeader({
  title,
  sub_title = "",
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <Heading className="mb-4" title={title} />
      {sub_title && <Text className="w-full">{sub_title}</Text>}
    </div>
  );
}

import type { HeadingPropes } from "./heading.types";

export default function Heading({ title, className = "" }: HeadingPropes) {
  return (
    <h2
      className={`text-sm font-bold tracking-tight flex flex-col  ${className}`}
    >
      {title}
    </h2>
  );
}

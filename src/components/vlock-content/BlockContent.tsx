import type { BlockContent } from "../../lib/types/home";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";

type Props = {
  value: BlockContent[] | undefined;
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={value.asset?.url}
        alt={value.alt || ""}
        className="my-4 rounded-xl"
      />
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold my-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="my-2 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
};

export const BlockContentComponent = ({ value }: Props) => {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
};

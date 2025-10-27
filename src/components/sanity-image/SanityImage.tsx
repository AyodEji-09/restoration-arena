import type { SanityImage } from "../../lib/types/home";
import { urlFor } from "../../sanity/image";

interface SanityImageProps {
  image: SanityImage;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
}

export const SanityImageComp = ({
  image,
  alt = "",
  className,
  width = 800,
//   height,
  quality = 80,
}: SanityImageProps) => {
  if (!image?.asset?._ref) return null;

  const imageUrl = urlFor(image)
    .width(width)
    // .height(height ?? 800)
    .quality(quality)
    .auto("format")
    .url();

  return (
    <img
      src={imageUrl}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
};

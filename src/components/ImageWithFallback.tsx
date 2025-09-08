import React from "react";

interface ImageWithFallbackProps {
  avif?: string;
  webp?: string;
  fallback: string;
  alt: string;
  fetchpriority?: "high" | "low" | "auto"; // typed
  decoding?: "sync" | "async" | "auto";
  loading?: "lazy" | "eager"; // optional
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  avif,
  webp,
  fallback,
  alt,
  fetchpriority = "auto",
  decoding = "async",
  loading = "lazy",
  className,
}) => (
  <picture>
    {avif && <source srcSet={avif} type="image/avif" />}
    {webp && <source srcSet={webp} type="image/webp" />}
    <img src={fallback} alt={alt} className={className} decoding={decoding} fetchPriority={fetchpriority} loading={loading} />
  </picture>
);

export default ImageWithFallback;

import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function Image({
  src,
  alt,
  className,
  width,
  height,
  caption,

  ...props
}: ImageProps) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        {...props}
      />
      {caption}
    </div>
  );
}

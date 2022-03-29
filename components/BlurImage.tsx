import Image, { ImageProps } from "next/image";
import { useState } from "react";

const BlurImage = (props: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={`${props.className} rounded duration-700 ease-in-out ${
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default BlurImage;

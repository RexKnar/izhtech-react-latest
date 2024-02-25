interface CustomObjectProps {
  variants: "line-purple-left" | "hero-left-full" | "hero-left-full-gif" | "purple-dots" | "green-disk" | "orange-disk" | "blue-dots" | "line-orange-left" | "long-line-orange-left" ; // Define a union type with valid keys
  className: string;
}

function CustomObject({ variants, className }: CustomObjectProps) {
  const objectVariants = {
    "line-purple-left": "/images/objects/purple-line-left.svg",
    "hero-left-full": "/images/objects/hero-full.svg",
    "hero-left-full-gif": "/images/objects/hero-full.gif",
    "purple-dots": "/images/objects/purple-dots.svg",
    "blue-dots" :   "/images/objects/blue-dots.svg",
    "line-orange-left" : "/images/objects/orange-line-left.svg",
    "long-line-orange-left":"/images/objects/orange-line-long-left.svg",
    "green-disk": "/images/objects/green-disk.svg",
    "orange-disk": "/images/objects/orange-right.svg"

  };

  console.log(variants);

  // Handle potential errors and missing variants:
  const imageSrc = objectVariants[variants] || "/images/objects/purple-line-left.svg"; // Provide a default image

  return (
    <img
      className={` ${className}`}
      src={imageSrc}
      alt={`Custom object variant: ${variants}`}
    />
  );
}

export default CustomObject;

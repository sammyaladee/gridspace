import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  button: string;
  href: string;
  color: "blue" | "orange";
  image: StaticImageData;
}

export default function Card({
  title,
  description,
  button,
  href,
  color,
  image,
}: CardProps) {
  const btnClasses =
    color === "orange"
      ? "bg-orange-500 hover:bg-orange-600"
      : "bg-blue-900 hover:bg-blue-800";

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow p-6 flex flex-col items-center text-center w-full sm:max-w-[300px] md:max-w-[345px] h-auto gap-7 mx-auto">
      {/* Image */}
      <div className="w-16 h-16 mb-4 relative">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      {/* Content */}
      <h3 className="font-bold text-lg">{title}</h3>
      {description && (
        <p className="text-gray-500 font-bold font-inter text-sm mb-4">
          {description}
        </p>
      )}

      <Link
        href={href}
        className={`px-20 sm:px-24 py-2 rounded-md text-white font-medium whitespace-nowrap ${btnClasses}`}
      >
        {button}
      </Link>
    </div>
  );
}

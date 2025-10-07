'use client'
import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-start overflow-hidden relative h-full">
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>

      <div className="mt-4 relative w-full h-32">
        <Image src={image} alt={alt} fill className="object-contain" />
      </div>

      <Link
        href="#"
        className="absolute bottom-6 right-6 p-2 rounded-full bg-white shadow-lg transition hover:bg-gray-100 flex items-center justify-center"
        aria-label={`Learn more about ${title}`}
      />
    </div>
  );
}

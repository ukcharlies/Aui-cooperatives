import React from "react";

interface NewsProps {
  thumbnail: string;
  title: string;
  desc: string;
  href: string;
}
export default function News({ thumbnail, title, desc, href }: NewsProps) {
  return (
    <a
      target="_blank"
      href={href}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={thumbnail}
        alt={`${title} icon`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </a>
  );
}

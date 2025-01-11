"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [languages] = useState([
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "fr", label: "FR" },
    { code: "cat", label: "CAT" },
  ]);

  const handleLanguageChange = (language: string) => {
    // Adjust path for the new locale
    const segments = pathname?.split("/") || [];
    segments[1] = language; // Assuming locale is the first path segment
    router.push(segments.join("/"));
  };

  return (
    <div className="flex space-x-1 md:space-x-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleLanguageChange(code)}
          className="px-2 md:px-4 border-r-2 border-black"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

import React, { useState } from "react";
import { useRouter } from "next/navigation"

const LanguageSelector = () => {
    const router = useRouter();
    const { locale } = router;
    
    const languages = [
      { code: "en", name: "English", flag: "🌐" },

      { code: "nl", name: "Dutch", flag: "🇳🇱" },


      { code: "fr", name: "Français", flag: "🇫🇷" },

      { code: "de", name: "German", flag: "🇩🇪" },
    ];
    
    // Check URL to determine the locale
    let selectedLocale = "en"; // Default language
    
  if (typeof window !== "undefined") {
    const domain = window.location.hostname;
  
    if (domain.includes(".de")) {
      selectedLocale = "de";
    } else if (domain.includes(".fr")) {
      selectedLocale = "fr";
    } else if (domain.includes(".nl")) {
      selectedLocale = "nl";
    }
  }
  
  const changeLanguage = (e) => {
    const newLocale = e.target.value;
  
    const selectedLanguage =
      newLocale === "en"
        ? "https://sharplogicians.com"
        : `https://sharplogicians.${newLocale}`;
  
    window.open(selectedLanguage, newLocale === "en" ? "_self" : "_blank");
  };
  return (
    <div className="select-container">
        <select
          id="language-select"
          value={locale}
          onChange={changeLanguage}
          // className="text-white  "
        >
          {languages.map((loc) => (
            <option key={loc.code} value={loc.code}>
              {loc.flag} {loc.name}
            </option>
          ))}
        </select>
      </div>
  );
};

export default LanguageSelector;
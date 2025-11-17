'use client'

import React, { useEffect, useState } from "react"

const LanguageSelectorss = () => {
  const [currentLang, setCurrentLang] = useState("en")
  const [fullPath, setFullPath] = useState("/")

  const languages = [
        { code: "en", name: "English", flag: "🌐" },

    { code: "fr", name: "Français", flag: "🇫🇷" },

    { code: "nl", name: "Dutch", flag: "🇳🇱" },
    { code: "de", name: "German", flag: "🇩🇪" },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      const domain = window.location.hostname
      const path = window.location.pathname + window.location.search
      setFullPath(path)

      if (domain.includes(".fr")) setCurrentLang("fr")
      else if (domain.includes(".de")) setCurrentLang("de")
      else if (domain.includes(".nl")) setCurrentLang("nl")
      else setCurrentLang("en")
    }
  }, [])

  const changeLanguage = (e) => {
    const newLocale = e.target.value
    const newDomain = newLocale === "en"
      ? "sharplogicians.com"
      : `sharplogicians.${newLocale}`

    window.open(`https://${newDomain}${fullPath}`, "_self")
  }

  return (
    <div className="select-container">
      <select
        id="language-select"
        value={currentLang}
        onChange={changeLanguage}
      >
        {languages.map((loc) => (
          <option key={loc.code} value={loc.code}>
            {loc.flag} {loc.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelectorss
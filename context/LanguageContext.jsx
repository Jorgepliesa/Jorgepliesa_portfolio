"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

const LanguageContext = createContext();

const translations = {
  en,
  es,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      setLanguage(browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (!value || value[k] === undefined) {
        // Fallback to english
        let enValue = translations["en"];
        for(const ek of keys) {
            if(!enValue || enValue[ek] === undefined) return key;
            enValue = enValue[ek];
        }
        return enValue;
      }
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

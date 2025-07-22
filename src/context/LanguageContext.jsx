import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
    english: { heading: "Hi, How are you?"},
    hindi : { heading: "नमस्ते, आप कैसे हैं?"},
};

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("english");

    const changeLanguage = (lang) => setLanguage(lang);

    const value = {
        language,
        setLanguage: changeLanguage,
        translation: translations[language] || translations["en"],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}

        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
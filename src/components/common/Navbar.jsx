import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
    const {language, setLanguage} = useLanguage();

    return (
        <nav style = {{padding: "1rem", background: "#f0f0f0"}}>
            <label htmlFor="language-select">Language:</label>
            <select 
                id="language-select"
                value={language}
                onChange= {(e) => setLanguage(e.target.value)}>

                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
        </nav>
    );
};

export default Navbar;
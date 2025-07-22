import { useLanguage } from "../context/LanguageContext";

const Home = () => {
    const {translation} = useLanguage();

    return (
        <div>
            <h2>{translation.heading}</h2>
        </div>
    );
};

export default Home;
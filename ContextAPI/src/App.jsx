import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <Home/>
    </LanguageProvider>
  );
};

export default App;
// import logo from "./logo.svg";
// import "./App.css";
import Provider from "./Context/provider";
import Routing from "./Routing/Routing";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    // <div className='App'>
    <Provider
    // value={{ devDetails, project, themeMode, setThemeMode }}
    >
      {/* <Navbar /> */}
      <Routing />
      {/* <Footer /> */}
    </Provider>
    // </div>
  );
}

export default App;

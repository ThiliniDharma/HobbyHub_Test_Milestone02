import "./App.css"
//import Login from "./pages/Login/Login";
//import Home from "./pages/Home/Home";
//import Profile from "./pages/Profile/Profile";
//import Blogs from "./pages/Blogs/Blogs";
//import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home/>  */}
        {/* <Profile/> */}
        {/* <Login/> */}
        <About/>
    </div>
  );
}

export default App;
import { lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/User/Login";
import Forgot from "./pages/User/Forgot";
import Signup from "./pages/User/Signup";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Agents = lazy(() => import("./pages/Agents/Agents"));
const ListPage = lazy(() => import("./pages/ListPage/ListPage"));
const SingleItem = lazy(() => import("./components/List/SingleItem"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {

    const timeout = setTimeout(()=>{
      setIsLoading(false);
    },2000)

    return () => clearTimeout(timeout)

  },[location]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/list/:id" element={<SingleItem />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot" element={<Forgot/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;

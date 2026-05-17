import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import NotFound from "./components/NotFound";
import Blog from "./components/Blog";
import ChildBlog from "./components/ChildBlog";

function App() {
  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
            <ul>
              <li>
                <NavLink to="/blog/1">Blog-1</NavLink>
              </li>
              <li>
                <NavLink to="/blog/2">Blog-2</NavLink>
              </li>
              <li>
                <NavLink to="/blog/3">Blog-3</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} >
            <Route path=":id" element={<ChildBlog/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}
export default App

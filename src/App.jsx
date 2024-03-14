import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <Header></Header>
      <div className="md:grid grid-cols-12 w-5/6 md:w-4/5 mx-auto">
        <div className="col-span-9">
          <Blogs></Blogs>
        </div>
        <div className="col-span-3">
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="App">
      <header>
        {/* POSTS CONTANER */}
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        ></div>
        {/* POST CONTAINER */}
        <div style={{ width: "70%" }}>
          <Post postName="tarmeez Academy" postBody="otmane anna "></Post>
          <Post postName="sidi taibi" postBody="bus 30 "></Post>
          <Post postName="kenitra" postBody="bus 4444 "></Post>
          <Post postName="rabat" postBody="bus50000 "></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div style={{ width: "30%", marginTop: "25px" }}>
          <SideMenu></SideMenu>
        </div>
      </header>
    </div>
  );
}

export default App;

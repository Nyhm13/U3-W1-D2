import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyAlert from "./Components/MyAlert";
import AllTheBooks from "./Components/AllTheBooks";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNav />
        <MyAlert />
      </header>
      <main className=" flex-grow-1">
        
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;

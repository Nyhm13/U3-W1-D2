import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyAlert from "./Components/MyAlert";
import AllTheBooks from "./Components/AllTheBooks";
import AllTheBook from "./Components/AllTheBook";
import SingleBook from "./Components/SingleBook";

function App() {
 const libroProva= {
  "asin": "0316438960",
  "title": "The Last Wish: Introducing the Witcher",
  "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
  "price": 9.59,
  "category": "fantasy"
}

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNav />
        <MyAlert />
      </header>
      <main className=" flex-grow-1">
        <SingleBook libro={libroProva}/>
        {/* <AllTheBooks /> */}
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;

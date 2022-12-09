import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <main className='container'>
      <Header />
      <AddItemForm />
      <ItemsList />
    </main>
  );
}

export default App;

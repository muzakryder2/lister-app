import { useSelector } from "react-redux";

function Header() {
  const { items } = useSelector((state) => state.items);
  return (
    <nav className='navbar'>
      <h1 className='logo'>Lister</h1>
      <div className='item-counter'>
        <p>
          {items.length} {items.length === 1 ? "item" : "items"}
        </p>
      </div>
    </nav>
  );
}

export default Header;

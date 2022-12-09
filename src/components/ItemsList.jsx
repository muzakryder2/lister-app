import { useSelector } from "react-redux";

function ItemsList() {
  const { items } = useSelector((state) => state.items);
  return (
    <div>
      {items.map((item) => (
        <h3 key={item.id}>{item.text}</h3>
      ))}
    </div>
  );
}

export default ItemsList;

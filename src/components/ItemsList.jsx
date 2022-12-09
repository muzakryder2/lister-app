import { useSelector } from "react-redux";
import SingleItem from "./SingleItem";

function ItemsList() {
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  if (isLoading) {
    return (
      <div className='spinner'>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    <div className='spinner'>
      <h1>Error: {message}</h1>
    </div>;
  }

  if (items.length > 0) {
    return (
      <div className='items-list-section'>
        <ul className='items-list'>
          {items.map((item) => (
            <SingleItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className='spinner'>
        <h1>Your list is empty...</h1>
      </div>
    );
  }
}

export default ItemsList;

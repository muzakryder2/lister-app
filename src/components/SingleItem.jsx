import { BsCheckSquare, BsSquare, BsXSquareFill } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { deleteItem, checkItem } from "../features/items/itemsSlice";

function SingleItem({ item }) {
  const dispatch = useDispatch();

  const onClick = (id) => {
    dispatch(deleteItem(id));
  };

  const handleCheckItem = (id) => {
    dispatch(checkItem(id));
  };

  return (
    <li
      className='single-item'
      style={{
        backgroundColor: item.isChecked ? "#78d878" : "#face9c",
      }}
    >
      {item.isChecked ? (
        <BsCheckSquare onClick={() => handleCheckItem(item.id)} />
      ) : (
        <BsSquare onClick={() => handleCheckItem(item.id)} />
      )}

      <p className='item-text'>{item.text}</p>
      <BsXSquareFill
        color='#f34949'
        size={20}
        onClick={() => onClick(item.id)}
      />
    </li>
  );
}

export default SingleItem;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/items/itemsSlice";
import { MdOutlineAddBox } from "react-icons/md";

function AddItemForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addItem(text));
    setText("");
  };

  return (
    <section className='form-section'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <input
            type='text'
            name='text'
            value={text}
            placeholder='Add item...'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <button type='submit'>
            <MdOutlineAddBox />
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddItemForm;

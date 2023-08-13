import { useState } from "react";

//Props:
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup2({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const arr = useState(-1); --> deconstructed to
  // arr[0] = vairable (selectedIndex)
  // arr[1] = updater function

  //let logic1message = items.length === 0 ? <p>NO item found</p> : null;

  /* Create variable for logic 
  or 
  create a variable and store a function 
  */

  const logic2message = () => {
    return items.length === 0 ? <p>NO item found</p> : null;
  };

  /*inside return /* logic1message #in curly brace # */
  return (
    <>
      <h1>{heading}</h1>

      {logic2message()}

      {items.length === 0 && <p>NO item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup2;

import { MouseEvent } from "react";

function ListGroup1() {
  let items = ["Newyork", "sanfrancisco", "Tokyo", "London", "Paris"];

  let selectedIndex = 2;
  //HAndles EVent : on click
  let handleCLick = (event: MouseEvent) => console.log(event);

  let logic1message = items.length === 0 ? <p>NO item found</p> : null;
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
      <h1>list1</h1>

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
            onClick={handleCLick} // not called just named.
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup1;

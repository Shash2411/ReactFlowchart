import { useState, useEffect } from "react";
import Button2 from "./components/Button2";

const App = () => {
  let [tempi, settempi] = useState(1);
  let [fix, setfix] = useState(0);

  const [counterClick, setcounterClick] = useState(1);
  let Mat: any = [];
  let arr: any = [];
  let arr2: any = [];
  Mat.push([2, 1]);

  let k = 1;
  let tempk = 1;

  useEffect(() => {
    console.log("render");
  }, [fix]);

  function handleButtonClick(numm: number) {
    console.log("counterCLick=" + counterClick);

    let end = tempi + numm;
    const newElement = document.createElement("div");
    newElement.className = `divid${k}`;

    for (let i = tempi + fix; i <= end + fix - 1; i++) {
      const button = document.createElement("button");

      arr.push([k, i]);
      let arrflat = arr.flat();
      arr2.push(arrflat);

      console.log("belowt");
      console.log(arrflat);
      console.log("above");

      button.id = `id${k}.${i}`;
      button.className = `common classid${i} btn btn-primary`;
      button.innerText = `Branch${arr}`;
      let al = arrflat.length;

      console.log("al=" + al);

      arrflat.pop();
      arrflat.pop();

      arr = arrflat;

      console.log("top");
      console.log("arr=");
      console.log(arr);
      console.log("bottom");

      i == 1 &&
        (button.onclick = () => {
          handleButtonClick(2);
        });

      i == 2 &&
        (button.onclick = () => {
          handleButtonClick(1);
        });

      newElement.appendChild(button);

      tempi = i + 1;
    }
    k = k + 1;
    document.body.appendChild(newElement);

    // Label names Here//

    document.getElementById(
      "id1.1"
    ).innerText = `Local Global Buckling interaction`;
    document.getElementById("id1.2").innerText = `Distortional buckling`;

    document.getElementById("id2.3").innerText = `Pcrl`;
    document.getElementById("id2.4").innerText = `Pcre`;

    document.getElementById("id3.5").innerText = `XYZ `;
  }

  return (
    <div>
      <Button2
        onClick1={() => {
          handleButtonClick(2);
        }}
        colour="primary"
      >
        How do I design a Cold Formed steel column?
      </Button2>
    </div>
  );
};

export default App;

/*
const App = () => {
  let tempi = 1;
  let m = 0;

  let mat: any = [];
  mat.push([4, 3, 2, 1]);

  function handleButtonClick(numm: number) {
    let end = tempi + numm;
    const newElement = document.createElement("div");

    let tempArray = [];
    for (let i = tempi; i <= end - 1; i++) {
      tempArray.push(i);
    }

    for (let i = tempi; i <= end - 1; i++) {
      const button = document.createElement("button");
      button.id = `id${i}`;
      button.className = `common classid${i} btn btn-primary`;
      button.innerText = `Branch${i}`;

      console.log("below");
      console.log(tempArray);
      console.log("above");

      if (i == 1) {
        button.addEventListener("click", () => {
          handleButtonClick(mat[mat.length - 1][0]);
          mat.push([1, 3, 2, 4]);
        });
        newElement.appendChild(button);
      } else if (i == 2) {
        button.addEventListener("click", () => {
          handleButtonClick(mat[mat.length - 1][1]);
          mat.push([3, 2, 1]);
        });
        newElement.appendChild(button);
      } else if (i == 3) {
        button.addEventListener("click", () => {
          handleButtonClick(mat[mat.length - 1][2]);
          mat.push([1, 2]);
        });
        newElement.appendChild(button);
      } else if (i == 4) {
        button.addEventListener("click", () => {
          handleButtonClick(mat[mat.length - 1][3]);
          mat.push([6]);
        });
        newElement.appendChild(button);
      } else newElement.appendChild(button);

      tempi = i + 1;
    }
  }

  return (
    <div>
      <Button2 onClick1={() => handleButtonClick(4)} colour="primary">
        Main Button
      </Button2>

      {console.log(document.getElementById("id2"))}
    </div>
  );
};


export default App;
*/

/*
import Button2 from "./components/Button2";

const App = () => {
  function handleMainClick(numm: number) {
    const newElement = document.createElement("div");
    for (let i = 1; i <= numm; i++) {
      newElement.innerHTML += `<button id=id${i} className='common' class='classid${i} btn btn-primary' onClick={handleMainClick(3)}>Branch${i}</button>`;
      document.body.appendChild(newElement);
    }
  }

  return (
    <div>
      <Button2 onClick1={() => handleMainClick(4)} colour="primary">
        Main Button
      </Button2>

      {console.log(document.getElementById("id2"))}
    </div>
  );
};

export default App;
*/

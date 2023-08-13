import { useState, useEffect } from "react";
import Button2 from "./components/Button2";

const App = () => {
  let [tempi, settempi] = useState(1);
  let [fixk, setfixk] = useState(0);
  let [fixi, setfixi] = useState(0);
  let [state1, setstate1] = useState(true);
  let [state2, setstate2] = useState(true);

  const [counterClick, setcounterClick] = useState(1);
  let Mat: any = [];
  let arr: any = [];

  Mat.push([2, 1]);

  let k = 1;

  useEffect;

  function onstate1() {
    setstate1(true);
    setstate2(false);
  }

  function onstate2() {
    setstate1(false);
    setstate2(true);
  }

  function handleButtonClick(numm: number) {
    console.log("counterCLick=" + counterClick);

    let end = tempi + numm;
    const newElement = document.createElement("div");
    newElement.className = `classid${k}`;
    newElement.id = `divid${k}`;

    for (let i = tempi + fixi; i <= end + fixi - 1; i++) {
      const button = document.createElement("button");

      console.log("below");

      console.log(arr);

      console.log("above");

      button.id = `id${k + fixk}.${i + fixi}`;
      button.className = `common classid${i} btn btn-primary`;
      button.innerText = `Branch${k + fixk}.${i + fixi}`;

      if (i == 1) {
        button.onclick = () => {
          handleButtonClick(2);
          fixk = -1;
          state1 = !state1;
          console.log(state1);
        };
      } else if (i == 2) {
        button.onclick = () => {
          state1 && (fixi = 1);
          handleButtonClick(1);
          state1 = !state1;
          fixi = 0;
        };
      } else if (i == 3) {
        button.onclick = () => {
          fixk = 0;
          state1 && (fixi = 0);
          handleButtonClick(1);
          fixi = 0;
        };
      }

      newElement.appendChild(button);

      tempi = i + 1;

      console.log("iterations ends");
    }
    k = k + 1;
    document.body.appendChild(newElement);

    // Label names Here//
    /*
    document.getElementById(
      "id1.1"
    ).innerText = `Local Global Buckling interaction`;
    document.getElementById("id1.2").innerText = `Distortional buckling`;

    document.getElementById("id2.3").innerText = `Pcrl`;
    document.getElementById("id2.4").innerText = `Pcre`;

    document.getElementById("id3.5").innerText = `XYZ `;
    */
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

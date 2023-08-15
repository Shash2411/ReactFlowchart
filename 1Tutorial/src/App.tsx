import { useState, useEffect } from "react";
import Button2 from "./components/Button2";

const App = () => {
  let [tempi, settempi] = useState(1);
  let [fixk, setfixk] = useState(0);
  let [fixi, setfixi] = useState(0);

  let [buttonState, setButtonState] = useState(false);

  let [state1, setstate1] = useState(true);
  let [state2, setstate2] = useState(true);

  const [counterClick, setcounterClick] = useState(1);
  let Mat: any = [];
  let arr: any = [];

  Mat.push([2, 1]);

  let k = 1;

  function specialCase() {
    const newElement = document.createElement("div");
    newElement.className = `classid3`;
    newElement.id = `divid3`;

    const button = document.createElement("button");

    button.id = `id3.6`;
    button.className = `common classid6 btn btn-primary`;
    button.innerText = `Branch3.6`;
    button.onclick = handleButtonClick(1);

    newElement.appendChild(button);
  }

  function handleButtonClick(numm: number) {
    console.log("counterCLick=" + counterClick);

    let end = tempi + numm;
    const newElement = document.createElement("div");
    newElement.className = `classid${k}`;
    newElement.id = `divid${k}`;

    for (let i = tempi + fixi; i <= end + fixi - 1; i++) {
      const button = document.createElement("button");

      button.id = `id${k + fixk}.${i + fixi}`;
      button.className = `common classid${i} btn btn-primary`;
      button.innerText = `Branch${k + fixk}.${i + fixi}`;
      button.disabled = buttonState;

      if (i == 1) {
        button.onclick = () => {
          handleButtonClick(2);
          fixk = -1;
          state1 = !state1;
          console.log(state1);
          button.disabled = true;
        };
      } else if (i == 2) {
        button.onclick = () => {
          state1 && (fixi = 1);
          handleButtonClick(1);
          state1 = !state1;
          fixi = 0;
          button.disabled = true;
        };
      } else if (i == 3) {
        button.onclick = () => {
          fixk = 0;
          state1 && (fixi = 0);
          specialCase();
          fixi = 0;
          button.disabled = true;
        };
      } else if (i == 4) {
        button.onclick = () => {
          fixk = 0;
          state1 && (fixi = 0);
          specialCase();
          fixi = 0;
          button.disabled = true;
        };
      } else {
      }

      newElement.appendChild(button);

      tempi = i + 1;

      console.log("iterations ends");
      console.log("a");

      console.log("b");
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
  }

  return (
    <>
      <div>
        <Button2
          onClick1={() => {
            handleButtonClick(2);
            button.disabled = true;
          }}
          colour="primary"
          Bool={buttonState}
        >
          How do I design a Cold Formed steel column?
        </Button2>
      </div>
    </>
  );
};

export default App;

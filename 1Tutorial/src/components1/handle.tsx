
const handleMainClick = (numm: number) => {

  const newElement = document.createElement("div");
  {for (let i = 1; i <= numm; i++){
    newElement.innerHTML += `<button id=id${i} className='common' class='classid${i} btn btn-primary'>Branch${i}</button>`;
    document.body.appendChild(newElement);
  }
 
  return (
    {
      let temp = document.getElementById("id2");
      temp?.setAttribute("onclick", "handleMainClick(3)");

      let html = "console.log(2+3);";
      document.querySelector("script")?.insertAdjacentHTML("beforeend", html);
      /*
      document.body.insertAdjacentHTML("beforeend", html);
      */
    }
    
  )
}

export default handleMainClick(numm)
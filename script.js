const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const startColorChange = () => {
  id = setInterval(changeColor, 300);
  function changeColor(){
    document.body.style.backgroundColor = randomColor();
  };
};
const stopColorChange = () => {
  clearInterval(id);
};

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);

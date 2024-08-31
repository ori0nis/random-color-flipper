import './style.css'

const colors = [
  { name: 'Space Cadet',
    color: '#1F2041'
  },
  {
    name: 'English Violet',
    color: '#4B3F72'
  },
  {
    name: 'Cadet Gray',
    color: '#93A8AC'
  },
  {
    name: 'Jasper',
    color: '#C84630'
  },
  {
    name: 'Orchid Pink',
    color: '#E2B4BD'
  },
  {
    name: 'Dark Purple',
    color: '#270722'
  },
  {
    name: 'Apple Green',
    color: '#A5BE00'
  }  
]

const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

const colorName = document.createElement("h3");
colorName.innerText = "Your color is: ";
h1.insertAdjacentElement("afterend", colorName);

  btn.addEventListener("click", () => {

  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor].color;
  colorName.innerText = "Your color is: " + colors[randomColor].name;

});
  
  

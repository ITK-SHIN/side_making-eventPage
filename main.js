import { countUp } from "./utils/countUp.js";

const data = {
  participate: 124114223,
};

const participateDOM = document.getElementById("participate-number");
participateDOM.innerHTML = data.participate;
countUp(participateDOM, data.participate, 3);

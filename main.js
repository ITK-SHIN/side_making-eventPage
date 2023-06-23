import { countUp } from "./utils/countUp.js";
import { setTabMenu } from "./module/tabMenu.js";

const data = {
  participate: 124114223,
};

const participateDOM = document.getElementById("participate-number");
countUp(participateDOM, data.participate, 3);

setTabMenu();

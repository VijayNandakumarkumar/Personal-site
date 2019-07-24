import { button, para } from './dom';
import { style } from "../css/main.scss";

function change_paracontent() {
    // console.log("para", para.textContent);
    para.textContent = "An example of html template generation";
}

// button.addEventListner('click', change_paracontent);
button.onclick = function() {
    change_paracontent();
};
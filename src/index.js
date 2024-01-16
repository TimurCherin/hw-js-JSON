import students from "./students.json";
import templateFunction from './template.hbs';
const wrap = document.querySelector(".wrap")
wrap.innerHTML = templateFunction({students});   

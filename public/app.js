import { Spending } from "./classes/spending.js";
import { Revenue } from "./classes/revenue.js";
import { NewUL } from "./classes/newul.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const comment = document.querySelector("#comment");
const sum = document.querySelector("#sum");
const ul = document.querySelector(".item-list");
const list = new NewUL(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, comment.value, sum.valueAsNumber);
    let document;
    if (type.value === "Kiadás") {
        document = new Spending(comment.value, sum.valueAsNumber);
    }
    else {
        document = new Revenue(comment.value, sum.valueAsNumber);
    }
    list.render(document, type.value, "start");
});

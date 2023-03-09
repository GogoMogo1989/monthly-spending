import {Spending} from "./classes/spending.js"
import {Revenue} from"./classes/revenue.js"
import { Interface } from "./interfaces/interface.js";
import { NewUL } from "./classes/newul.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const comment = document.querySelector("#comment") as HTMLInputElement;
const sum = document.querySelector("#sum") as HTMLInputElement;
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new NewUL(ul);



form.addEventListener("submit", (e:Event)=> {

    e.preventDefault();

    console.log(
        type.value,
        comment.value,
        sum.valueAsNumber
    )

    let document: Interface;
    if(type.value === "Kiadás"){
        document = new Spending(comment.value, sum.valueAsNumber)
    }else{
        document = new Revenue(comment.value, sum.valueAsNumber)
    }

    list.render(document, type.value, "start")


}


)
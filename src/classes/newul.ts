import { Spending } from "./spending.js";

export class NewUL{

    container: HTMLUListElement;

    constructor(container: HTMLUListElement){
        this.container = container
    }

    render(item: Spending, heading: string, position: 'start'  | "end"){
        const li = document.createElement('li');
        const p =document.createElement("p");
        const p2 = document.createElement("p2");

        p.innerText = heading;
        li.append(p)

        p2.innerText = item.format();
        li.append(p2)

        if(position === "start"){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }
    }

}
import {Interface} from "../interfaces/interface.js"


export class Revenue implements Interface {
    comment: string;
    sum: number;

    constructor(comment: string, sum: number){
        this.comment = comment;
        this.sum = sum
    }


    format(){
        return`Megjegyzés:${this.comment} Összeg: ${this.sum} Ft`
    }

}
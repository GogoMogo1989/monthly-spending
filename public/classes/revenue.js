export class Revenue {
    constructor(comment, sum) {
        this.comment = comment;
        this.sum = sum;
    }
    format() {
        return ` Megjegyzés:${this.comment} Összeg: ${this.sum} Ft`;
    }
}

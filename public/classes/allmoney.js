export class AllMoney {
    constructor(container) {
        this.container = document.querySelector('#allmoney');
        this.container = container;
    }
    render(sum, main) {
        const input = document.createElement("input");
        const p = document.createElement("p");
        this.container.prepend(p);
        p.innerText = sum;
    }
}

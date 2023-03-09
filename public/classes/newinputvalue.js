export class NewInputValue {
    constructor(container) {
        this.container = container;
    }
    render(item) {
        const input = document.createElement('input');
        input.innerHTML = item;
    }
}

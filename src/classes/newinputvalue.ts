export class NewInputValue{

    container: HTMLInputElement;

    constructor(container: HTMLInputElement){
        this.container = container
    }

    render(item: number){
        const input = document.createElement('input')

        input.innerHTML = item;
    }

}
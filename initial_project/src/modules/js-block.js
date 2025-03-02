import JS_image from '../../assets/js.png'

export class JSBlock {
#container

    constructor() {
        this.#container = document.createElement('div');
        this.#container.className = 'js-block';
    }

    render() {
        const mainTitle = document.createElement('h1');
        mainTitle.className = 'main-title' ;
        mainTitle.textContent = 'Java Script'

        const JSImageHTML = document.createElement('img');
        JSImageHTML.className = 'js-image';
        JSImageHTML.src = JS_image

        const founderText = document.createElement('p');
        founderText.textContent = 'С момента создания Java Script прошло';
        founderText.className = 'founded-text'

        this.#container.append(mainTitle, JSImageHTML, founderText)

        return this.#container

    }
}
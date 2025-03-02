import { JSBlock } from './js-block';
import { TimerBlock } from './timer-block';
import  { JSCreationDate } from '../core/constans/settings'


export default class App {
#jsBlock
#timerBlock

    constructor () {
        this.#jsBlock = new JSBlock();
        this.#timerBlock = new TimerBlock(new Date(JSCreationDate));

    }
    run () {
        const JSBlockHtml = this.#jsBlock.render();
        const TimerBlockHtml = this.#timerBlock.render();

        document.body.append(JSBlockHtml, TimerBlockHtml )

    }

}


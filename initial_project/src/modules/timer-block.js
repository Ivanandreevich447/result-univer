//можно делать импорт короче импорт.алл
// import {getTodayDateFormat,
//      getPreciseDateDifference
//     } from '../core/utils/date';

//получаем импорт всех функ с пометкой экспорт по данному пути
import* as DateUtils from '../core/utils/date';


DateUtils.getTodayDateFormat();
DateUtils.getPreciseDateDifference();

export class TimerBlock {
#date
#timerContainer
#timerTextHtml


constructor(date){
this.#date = date;
this.#timerContainer = document.createElement('div');
this.#timerTextHtml = document.createElement('h2')


}
#getTimerContent() {
return DateUtils.getPreciseDateDifference(new Date(), this.#date);
}

#enableDateUpdate() {
    setInterval(() => {
        this.#timerTextHtml.textContent = this.#getTimerContent()
    }, 1000);
}

render() {
this.#timerContainer.id = 'timer'
this.#timerTextHtml.className = 'timer-text'
this.#timerTextHtml.textContent = this.#getTimerContent()

const todayDateHtml = document.createElement('div')
todayDateHtml.className = 'today-date'
const todayDateFormat = DateUtils.getTodayDateFormat(new Date())

todayDateHtml.textContent = `(Сегодня ${todayDateFormat})`

this.#timerContainer.append(this.#timerTextHtml, todayDateHtml)

this.#enableDateUpdate()
return this.#timerContainer

}
}
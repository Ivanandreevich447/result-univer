import moment from 'moment';
import 'moment-precise-range-plugin';

export const getTodayDateFormat = (date) => {
   return moment(date).format("MMM Do YY"); 
}

export const getPreciseDateDifference = (date1, date2) => { //узнаем разницу между 2 дат
const date1Format = moment(date1);
const date2Format = moment(date2);

   return moment.preciseDiff(date1Format, date2Format);

}
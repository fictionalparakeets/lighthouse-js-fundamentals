// convert date strings like "2017/12/02" into more english friendly strings like "December 2nd, 2017"
// given date as a string, not as a date object. will always be formatted YYYY/MM/DD.

const talkingCalendar = function(date) {
  let dateArray = date.split('/');
  //let dateObject = new Date(dateArray[0], dateArray[1], dateArray[2]);
  //return dateObject.toString();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let endings = ['st', 'nd', 'rd', 'th'];
  let month = months[dateArray[1] - 1];
  let day = dateArray[2];
  let year = dateArray[0];
  let ending = '';
  switch (day[1]) {
    case '1':
      if (day >= 11 && day <= 13) {
        ending = endings[3];
        break;
      };
      ending = endings[0];
      break;
    case '2':
      ending = endings[1];
      break;
    case '3':
      ending = endings[2];
      break;
    default:
      ending = endings[3];
      break;
  };
  if (day[0] === '0') {
    day = day[1];
  }
  // ends in 1, 2, 3, except 11, 12, 13
  let dateMessage = `${month} ${day}${ending}, ${year}`;
  return dateMessage;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/* Expected Output:
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/

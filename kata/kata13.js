// convert date strings like "2017/12/02" into more english friendly strings like "December 2nd, 2017"
// given date as a string, not as a date object. will always be formatted YYYY/MM/DD.

const talkingCalendar = function(date) {
  let dateArray = date.split('/');
  //let dateObject = new Date(dateArray[0], dateArray[1], dateArray[2]);
  //return dateObject.toString();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dayWEnding = dayWithEnding(dateArray[2]);
  return `${months[dateArray[1] - 1]} ${dayWEnding}, ${dateArray[0]}`;
};

const dayWithEnding = function(dateInput) {
  let ending = '';
  switch (dateInput[1]) {
    case '1':
      if (dateInput >= 11 && dateInput <= 13) {
        ending = 'th';
        break;
      };
      ending = 'st';
      break;
    case '2':
      ending = 'nd';
      break;
    case '3':
      ending = 'rd';
      break;
    default:
      ending = 'th';
      break;
  };
  return `${cutFirstDigit(dateInput)}${ending}`;
};

const cutFirstDigit = function(date) {
  if (date[0] === '0') {
    date = date[1];
  }
  return date;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/* Expected Output:
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/

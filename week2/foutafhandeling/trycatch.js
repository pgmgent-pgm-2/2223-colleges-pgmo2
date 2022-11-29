function getMonthNameByNumber(monthNumber) {
  monthNumber = monthNumber - 1;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[monthNumber]) {
    return months[monthNumber];
  } else {
    throw new Error('INVALID_MONTH_NUMBER');
  }
}

let monthName, monthNumber = 14;
try {
  monthName = getMonthNameByNumber(monthNumber);
  console.log(monthName);
}
catch (e) {
  monthName = 'unknown';
  console.error(monthName);
  console.log(e.name, e.message);
}



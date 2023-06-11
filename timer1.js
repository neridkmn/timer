const setAlarm = function() { // declare a function for code organization and modularity.
  let alarm = process.argv.slice(2); // to clear node outcome
  alarm = alarm.map(element => Number(element)); // create a copy of the array and switch elements' type to number

  if (alarm.length === 0) { // edge cases  if there is no element in the array return function
    return;
  }

  alarm = alarm.filter(element => !isNaN(element)); // edge cases- filter elements if they're numbers (to ignore other types of elements)
  alarm = alarm.filter(element => element > 0); // edge cases- filter elements only with >= 0

  alarm.sort((a, b) => a - b); // sort the array incrementally
  for (let i = 0; i < alarm.length; i++) { //loop over the array to get the numbers
    setTimeout(() => { // async function. repeat the given argument after each delay time. 
      process.stdout.write('...'); // '\x07' didn't work & switched to "..."
    }, alarm[i] * 1000); // to calculate the delay time for each iteration
  }

  setTimeout(() => { // to get rid off the extra prompt at the end
    process.stdout.write("\n");
  }, alarm[alarm.length - 1] * 1000);
};

setAlarm(); // calling the function
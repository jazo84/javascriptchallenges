/* Create a script with two variables, each assigned to a number. Add them together and
output the result to the console. Now do the same with two strings.*/

var num1 = 35
var num2 = 26
console.log (num1 + num2)

var string1 = "cats"
var string2 = "dogs"
console.log (string1 + " & " + string2)

/* Create a multidimensional array related to a subject that interests you.
Output two of the items in sub-arrays to the console.*/

var favoriteRappers = ["J.Cole", "Nas", "Kendrick", "Drake", "Biggie", "Tupac"]
console.log(favoriteRappers[0] + " , " + favoriteRappers[4])

/* Write a script that checks if a variable is less than 100. If it is, alert the user that their
variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.*/

var yournumber = 84
if (yournumber < 100) {
  alert ("This Variable is less than 100")
}
else {
  alert ("Your Value was" + yournumber + "and it is greater than 100")
}

/* Declare a function that takes a name as an argument and tells the user what name
they've entered. Try running it after it has been declared.*/

function myName(text) {
  console.log (text);
}
myName("Jasmaine")

/* Declare a function that depending upon which virtual 'door' was entered tells the user they've received a
different 'prize' in an alert. After declaring the function, try running it with different options.
There must be at least 3 doors.*/

function mysteryDoor(doorNumber) {
  if (doorNumber === 1) {
    alert ("Mercedes S Class")
  }
else if (doorNumber === 2) {
  alert ("One Million Dollars")
}
else if (doorNumber === 3) {
  alert("Warmed up PopTart")
}
else {
  alert ("Enter number 1,2 or 3")
}
}
mysteryDoor (56)

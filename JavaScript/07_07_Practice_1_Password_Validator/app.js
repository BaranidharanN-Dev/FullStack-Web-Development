// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false


// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false


function isValidPassword (password,user) {

  let hasspace = password.includes(" ") === true
  let lowchar = password.length < 8
  let similar = password.includes(user) === true 

  if ( hasspace || lowchar || similar) return false
  return true

}

console.log(isValidPassword("haran", "a@22"))
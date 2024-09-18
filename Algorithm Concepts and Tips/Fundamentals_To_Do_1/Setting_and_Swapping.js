// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
function setting_and_swapping() {
  var myNumber = 42
  var myName = 'Reem Joudeh'
  var tem = ''

  tem = myNumber
  myNumber = myName
  myName = tem

  console.log('My Number' ,myNumber)
  console.log('My Name', myName)

}
setting_and_swapping()
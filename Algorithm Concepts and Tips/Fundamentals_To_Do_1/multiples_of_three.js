// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiples_of_Three() {
  for (var i = -300; i <= 0; i++){
    if (i % 3 == 0 && i != -3  && i !=-6)
    {
      console.log(i)
    }
  }
}

multiples_of_Three()

function calculateLoan(){
   loanAmount = document.getElementById("loan-amount").value


   interestEl = document.getElementById("interest").value



   monthEl = document.getElementById("months-to-pay").value

   inter = (loanAmount * (interestEl*0.01))/monthEl

   payementEl = (loanAmount / monthEl+inter).toFixed(3)

   document.querySelector(".payment").innerHTML = `A payé : ${payementEl}`

   

}
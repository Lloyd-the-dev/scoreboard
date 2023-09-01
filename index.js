// Functions for each of the sums
// "+1"
let scoreEl = document.getElementById('score-el')
let scoreZord = document.getElementById("score-zord")
let count = 0
function addOne() {
    count += 1
    scoreEl.textContent = count
}
// "+2"
function addTwo() {
  count += 2
  scoreEl.textContent = count
}
//"+3"
function addThree() {
  count += 3
  scoreEl.textContent = count
}

//Second score
let count2 = 0
//"+1"
function sumOne() {
   count2 += 1
   scoreZord.textContent = count2
}
//"+2"
function sumTwo() {
   count2 += 2
   scoreZord.textContent = count2
}
//"+3"
function sumThree() {
   count2 += 3
   scoreZord.textContent = count2
}
const resetBtn = document.getElementById("reset")

resetBtn.addEventListener("click", ()=>{
   scoreEl.textContent = 0
   scoreZord.textContent = 0
})
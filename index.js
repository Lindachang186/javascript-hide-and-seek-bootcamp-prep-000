function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
 const increase = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 for(let i = 0; i < increase.length; i++) {
   increase[i].innerHTML = parseInt(increase[i].innerHTML) + n
 }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

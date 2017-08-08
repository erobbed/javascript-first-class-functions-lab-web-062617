function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplier){

  return (n)=>{
    return n * multiplier
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplierValue(){

}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)


function multiplier(multiplierValue, value){
 
}

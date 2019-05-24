var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
 katzDeliLine.push(name)  
   console.log("Welcome, "+name+". You are number "+katzDeliLine.length+" in line.")
   return("Welcome, "+name+". You are number "+katzDeliLine.length+" in line.")
}

function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
}
console.log("There is nobody waiting to be served!")
return("There is nobody waiting to be served!")
} else {
  return "currently serving "+ katzDeliLine.shift
}
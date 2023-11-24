const playButton=document.getElementById("play-button")
const pauseButton=document.getElementById("pause-button")
const stopButton=document.getElementById("stop-button")
const textInput=document.getElementById("text")
const speedInput=document.getElementById("speed")


playButton.addEventListener("click",()=>{
playText(textInput.value)
})

pauseButton.addEventListener("click",pause);
stopButton.addEventListener("click",stopText)


function playText(text){
if(speechSynthesis.paused && speechSynthesis.speaking){
  return speechSynthesis.resume()
}
  const Utterance= new SpeechSynthesisUtterance(text)
  Utterance.rate=speedInput.value||1
  Utterance.addEventListener("end",()=>{
    textInput.disabled=false
  })
  textInput.disabled=true

  speechSynthesis.speak(Utterance)


  
}

function pause(){

  if(speechSynthesis.speaking)speechSynthesis.pause()
}

function stopText(){
  speechSynthesis.resume()
  speechSynthesis.cancel()
  
}


console.log(speechSynthesis);

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelector('div').classList.add("hidden");

const clickheart = document.querySelectorAll(".like-glyph");
const changecolor = document.querySelectorAll('span');



function changeheart(e){
  const statusheart = e.target;
//alert("you clicked shit");
  mimicServerCall()
    .then(function(response){
      //alert(response); 
     // document.querySelectorAll('span').classList.remove(".like.glyph");
     statusheart.className = "activated-heart";
      statusheart.innerText = FULL_HEART;
     
      //click  activated
      document.querySelector('div').classList.remove("hidden");
      document.querySelector("h2").innerHTML = "Success!";
      //alert(response);
      setTimeout(revert, 3000);
    
   
       
    })
    .catch(function(error) {
      //document.querySelector('div').classList.remove("hidden");
      alert("Something went wrong!");
    });

function revert(){
  document.querySelector('div').classList.add("hidden");
  statusheart.className = "like-glyph";
 statusheart.innerText = EMPTY_HEART;

};

}


for (const heart of clickheart) {
  heart.addEventListener("click", changeheart);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

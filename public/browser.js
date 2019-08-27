document.addEventListener("click", function(e){
    //Delete feature
if(e.target.classList.contains("delete-me")){
    if(confirm("Do you sure &#129318;&#127996;")){
        axios.post

    }
}

    //update feature

    if(e.target.classList.contains("edit-me")){
    let userInput = prompt("enter your best favfood", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
   if(userInput){
    axios.post('/update-item',{text: userInput, id: e.target.getAttribute("data-id")}).then(function(){
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
 
    }).catch(function(){
        console.log ("you almost got it")
    })
   }
    }

})
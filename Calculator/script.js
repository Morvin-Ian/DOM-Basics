document.addEventListener("DOMContedLoaded", (event)=>{
    document.querySelector("form").onsubmit = ()=>{
        event.preventDefault()

    }
   

})
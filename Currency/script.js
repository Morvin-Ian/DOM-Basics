const us = document.getElementById("us")
const output = document.getElementById("output")
const submit = document.getElementById("submit")



document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("form").onsubmit = () =>{

        fetch("http://api.exchangeratesapi.io/v1/latest?access_key=8165818041b30c951755f4aba8c8f72f")
        .then(response => response.json())
        .then(data => {
            const rate = data.rates.KES
            output.innerText = `$ ${us.value} = KES ${(rate*us.value).toFixed(2)}.`
            us.value = ''
    });

    return false;

    }

})




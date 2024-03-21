let p  = document.getElementById("id")  // id of paragraph tag

var len = 0

document.getElementById("generate").addEventListener("click", () => {
    len = parseInt(document.querySelector("#input_number").value)
    let otp="";
    for(let i=1;i<=len;i++)
    {
        otp += Math.floor(Math.random()*10).toString();
    }
    p.textContent += otp

    window.addEventListener("load",true)
})


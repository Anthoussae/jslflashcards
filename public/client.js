console.log("Hello World");
document.addEventListener("DOMContentLoaded",()=>{
    const btn = document.querySelector("button");
    const inpt = document.querySelector("input");
    btn.addEventListener("click", ()=>{
        fetch("/records",{
            method: "post",
            body: inpt.value,
            headers: {
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            res.json().then((data)=>{
                console.log(data);
            })
        })
    })
})
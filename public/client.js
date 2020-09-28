console.log("Hello World");
document.addEventListener("DOMContentLoaded",()=>{
    const btn = document.querySelector("button");
    btn.addEventListener("click", ()=>{
        fetch("/records",{
            method: "post",
            body: JSON.stringify({}),
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
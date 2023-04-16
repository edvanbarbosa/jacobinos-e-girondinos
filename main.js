const barra = document.querySelector("nav ul")
const itens = document.querySelectorAll(".link-local")
const sandwich = document.querySelector(".barras")

let click = -1
sandwich.addEventListener("click",()=>{

    click += 1
    if(click%2 == 1){
        barra.style.opacity = 0
        barra.style.display = "none"
        sandwich.style.background = "#f2f2f2"
        document.querySelector("g").style.fill = "#0e0d0d"
        
    }
    else{
        barra.style.opacity = 1
        barra.style.display = "flex"
        sandwich.style.background = "#0e0d0d"
        document.querySelector("g").style.fill = "#f2f2f2"
        
    }
    
   
})

itens.forEach(e=>{
    e.addEventListener("click",(o)=>{

        o.preventDefault()

        const element = o.target
        const id = element.getAttribute("href")
        const section = document.querySelector(id).offsetTop
        console.log(section)
        window.scroll({
            top:section,
            behavior:"smooth"
        })
        
        
    })
})




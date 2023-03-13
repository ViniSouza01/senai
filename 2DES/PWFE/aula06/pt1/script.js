const data = [
    {
        "titulo": "titulo 3",
        "texto": "texto123"
    },
    {
        "titulo": "titulo 4",
        "texto": "texto 1234"
    },
    {
        "titulo": "titulo 5",
        "texto": "texto12345"
    }
]


const body = document.querySelector('body') // 
const card = document.querySelector('.card') // get the element "div" and name "card"

for(let i = 0; i < data.length; i++) {
    var clone = card.cloneNode(true) // it will clone the element "div"

    clone.classList.remove("model") // will remove the clas "model", so the div's will appear


    clone.querySelector('button').addEventListener("click", (event) => {
       // console.log(event.target.parentNode)
        // .target return the own element
        // .remove remove the element
        // .parentNode shows the parent element
        let info = document.createElement("p")
        info.innerHTML = "Algum texto"
        clone.appendChild(info)
    })


    clone.querySelector("h3").innerHTML = data[i].titulo // add the title from JSON
    clone.querySelector("p").innerHTML = data[i].texto // add the paragraph from JSON
    body.appendChild(clone) // add the div "clone" on JSON
}

card.remove() // remove the element from HTML
console.log("peticiones")

const obtener = () => {
    console.log("obtener")
}
obtener()

const buttonobtener = document.getElementById("button-obtener")

//buttonobtener.addEventListener("click",obtener)
buttonobtener.addEventListener("click",async() =>{
    console.log("obtener")
    const pokemondata = await obterPokemon()
    const h3 = document.createElement("h3")
    h3.innerText= pokemondata.name

    pokemonarticle.appendChild(h3)

    const img =document.createElement("img")
    img.src = pokemondata.sprites.front_defaultpokemonarticle.appendChild(img)

    const pokemonarticle = document.getElementById("pokemon")
})


const obterPokemon = async () => {
    const respuesta =await fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = await respuesta.json ()
    console.log(data)
}

    obterpokemon ()
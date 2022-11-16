// STAMPARE 100 BLOCCHI
const myContainer = document.getElementById("container");

// button

const btn = document.querySelector(".btn")

for (let i = 1; i < 101; i++){

    btn.addEventListener("click",
    
        function(){

            let nuovoElemento = createBox();

            nuovoElemento.addEventListener("click",

            function (){
                nuovoElemento.classList.toggle("clicked-box");
                console.log(i);
            })


        container.appendChild(nuovoElemento)


        function createBox(){

            const mioElement = document.createElement("div");
            mioElement.innerHTML = `${[i]}`

            mioElement.classList.add("box");

            return mioElement;
        };
    })
};

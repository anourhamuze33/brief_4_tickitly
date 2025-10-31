const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

one.onclick = function(){
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");

}
two.onclick = function(){
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");

}
three.onclick = function(){
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");

}
four.onclick = function(){
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");

}
// .steps1]
// next(0)
// remove active
// steps[index].add()

let suivant = document.getElementsByClassName("next_btn");
const main = document.querySelector(".main_display");
const section_nbr = document.getElementsByClassName("nbr_section");

Array.from(suivant).forEach(element => {
    element.addEventListener("click", function display(e) {
    const j = e.currentTarget.getAttribute("id");
    console.log(j);
    switch(j){
        case "0":
            main.classList.remove("main_display");
            main.classList.add("reservation_confirmation");
            section_nbr[j].classList.add("display");
            // section_nbr[j].style.display="block";
        break;
        case "1":
            section_nbr[j-1].classList.remove("display");
            section_nbr[j-1].classList.add("reservation_confirmation");
            section_nbr[j].classList.add("display");
        break;
        case "2":
            section_nbr[j-1].classList.remove("display");
            section_nbr[j-1].classList.add("reservation_confirmation");
            section_nbr[j].classList.add("display");
        break;
        case "3":
            section_nbr[j-3].classList.remove("display");
            section_nbr[j-3].classList.add("reservation_confirmation");
            main.classList.add("main_display");
        break;
        case "4":
            section_nbr[j-3].classList.remove("display");
            section_nbr[j-3].classList.add("reservation_confirmation");
            section_nbr[j-4].classList.add("display");
        break;
        case "5":
            section_nbr[j-3].classList.remove("display");
            section_nbr[j-3].classList.add("reservation_confirmation");
            section_nbr[j-4].classList.add("display");
        break;
    }
        });
});





let events_choisit;

const eventCards = document.querySelectorAll(".container_inter_article");

eventCards.forEach(card => {
    card.addEventListener("click", function (){
        card.parentElement.style.border = "5px solid #00c3ff";

        events_choisit = {
            name: card.querySelector(".event_title").innerText,
            price: card.querySelector(".pay").innerText,
            date: card.querySelectorAll(".event_info_text p")[0].innerText,
            place: card.querySelectorAll(".event_info_text p")[1].innerText,
            seats: card.querySelector(".nbr_places").innerText
        };
    });
});


 
const operation = document.getElementsByClassName("ajouter_et_supprimer");
const nbr_tickets = document.querySelector(".conteur_nbr");
let nbr_places = document.querySelector(".nbr_places").innerHTML;
let incriment = 0;
operation[0].addEventListener("click", incrimentation);//plus
operation[1].addEventListener("click", decrimentation);//minus

function incrimentation (){
    if(incriment>=0 && incriment<events_choisit.seats){
incriment++;
    }
    else{
        return
    }
nbr_tickets.innerHTML= incriment;
}
function decrimentation (e){
        if(incriment>0){
incriment--;
    }
    else{
        return
    }
nbr_tickets.innerHTML= incriment;
}


const btn_enregistre = document.querySelector(".btn_enregi");


const formulaire = document.querySelector(".form_input");
btn_enregistre.addEventListener("click", (event)=>{
    event.preventDefault();
    let prenom_input = document.querySelector("#Prenome");
    let nom_input = document.getElementById("Nom");
    let emai_input = document.getElementById("Email");
    let tel_input = document.getElementById("Telephone");
    const errore = document.getElementsByClassName("errore");
    
    if (prenom_input.value.trim() ===  "") {
        errore[0].innerHTML="entrer le prenom du participant"
        return;
    }
    if (nom_input.value.trim() ===  "") {
        errore[1].innerHTML="entrer le nom du participant"
        return;
    }
    if (emai_input.value.trim() ===  "") {
        errore[2].innerHTML="entrer le email du participant"
        return;
    }
    if (tel_input.value.trim() === "") {
        errore[3].innerHTML="entrer le telephone du participant"
        return;
    }
});






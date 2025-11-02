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
        eventCards.forEach(item => item !== card && item.parentElement.classList.remove("activate"));
        card.parentElement.classList.toggle("activate");

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
const nbr_part = document.querySelector("#nbr_part");
operation[0].addEventListener("click", incrimentation);//plus
operation[1].addEventListener("click", decrimentation);//minus
const nb_total = document.querySelector(".nbr_total");
const prix_total = document.querySelector(".prix_total");
function incrimentation (){
    if(incriment>=0 && incriment<events_choisit.seats){
incriment++;
    }
    else{
        return
    }
nbr_tickets.innerHTML= incriment;
nb_total.innerText=incriment;
nbr_part.innerHTML=incriment;
prix_total.innerHTML=incriment*Number(events_choisit.price)+ " MAD";

}
function decrimentation (e){
        if(incriment>0){
incriment--;
    }
    else{
        return
    }
nbr_tickets.innerHTML= incriment;
nb_total.innerText=incriment;
nbr_part.innerHTML=incriment;
prix_total.innerHTML=incriment*(events_choisit.price);
console.log(prix_total);
}










const formulaire = document.querySelector(".form_input");
const incri = document.querySelector("#incri");

formulaire.addEventListener("submit", (event)=>{
    event.preventDefault();
    let prenom_input = document.querySelector("#Prenome");
    let nom_input = document.getElementById("Nom");
    let emai_input = document.getElementById("Email");
    let tel_input = document.getElementById("Telephone");
    const errore = document.getElementsByClassName("errore");
    const tele_regex = /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    let valide = true;
    let conteur = 0;
    
    if (prenom_input.value.trim() ===  "") {
        errore[0].innerHTML="entrer le prenom du participant"
        prenom_input.classList.remove("input-error");
        prenom_input.classList.add("input-error");
        valide=false;
    }

    if(nom_input.value.trim() ===  "") {
        errore[1].innerHTML="entrer le nom du participant"
        nom_input.classList.remove("input-error");
        nom_input.classList.add("input-error");
        
        valide=false;
    }
    if (emai_input.value.trim() ===  "") {
        errore[2].innerHTML="entrer le email du participant"
        emai_input.classList.remove("input-error");
        emai_input.classList.add("input-error");
        valide=false;
    }
    
    if (!email_regex.test(emai_input.value)){
    emai_input.setAttribute("placeholder", "invalid email");
    emai_input.classList.remove("input-error");
        emai_input.classList.add("input-error");
    valide=false;
    emai_input.value = "";
    }

    if (tel_input.value.trim() === "") {
        errore[3].innerHTML="entrer le telephone du participant"
        
tel_input.classList.remove("input-error");
        tel_input.classList.add("input-error");

        valide=false;
    }

    if (!tele_regex.test(tel_input.value)){
    tel_input.setAttribute("placeholder", "invalid telephone");
    
tel_input.classList.remove("input-error");
    tel_input.classList.add("input-error");
    valide=false;
    tel_input.value = "";
    }



    if(valide){
    conteur++;                                
    const afficher = document.querySelector(".paricipant_info_container");
    afficher.innerHTML +=`
    <div class="reservation_info">
    <div class="reservation_info_align">
            <p class="reservation_participent_info">Prenom Nom: ${prenom_input.value} ${nom_input.value}</p>
            <p class="reservation_participent_info">Email: ${emai_input.value}</p>
            <p class="reservation_participent_info">Telephone: ${tel_input.value}</p>
                </div>
            </div>
        </div>
        `;
    const afficher2 = document.querySelector(".reservation_align");
      afficher2.innerHTML +=`
         <div class="reservation_info">
                <div class="reservation_info_align">
            <p class="reservation_participent_info">Prenom Nom: ${prenom_input.value} ${nom_input.value}</p>
            <p class="reservation_participent_info">Email:${emai_input.value}</p>
            <p class="reservation_participent_info">Telephone: ${tel_input.value}</p>
                </div>
            </div>
        `;
        formulaire.reset();

        emai_input.setAttribute("placeholder", "");
        tel_input.setAttribute("placeholder", "");
        nom_input.classList.remove("input-error");
        prenom_input.classList.remove("input-error");
        tel_input.classList.remove("input-error");
        emai_input.classList.remove("input-error");
        for(let i=0; i<=3; i++){
            errore[i].innerHTML=" "
        }
       
        incri.innerText=conteur;
        if(conteur==incriment){
            form_input.style.disabled;
        }
        
        
    }
});




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

const suivant = document.querySelector(".next_btn");
function display(){
    suivant.addEventListener("click", function display(e) {
        main_display.classList.add("display_none");
        section_nbr_tickets.classList.add("display_flex"); 
    });

}

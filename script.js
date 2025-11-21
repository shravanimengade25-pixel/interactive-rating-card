const ratingBtns=document.querySelectorAll(".r");
const submitBtn=document.querySelector(".submit");
let selectedRating=0;

ratingBtns.forEach(btn=>{
btn.addEventListener("click",()=>{

ratingBtns.forEach(b=>b.classList.remove("selected"));

btn.classList.add("selected");

selectedRating=btn.textcontent;});
});



submitBtn.addEventListener("click", ()=>{
    if(selectedRating==0){
        alert("please click");

    }
    else{
        alert(`you selected ${selectedRating} out of 5`);
    }
}





);









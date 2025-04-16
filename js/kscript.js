
document.addEventListener("DOMContentLoaded", () => {
    const foodselect = document.getElementById("foodselect");
    const submitButton = document.getElementById("submitBtn");
    const foodDetails = document.getElementById("FoodDetails");

    

     const foodInfo = {
        Momo: {
            title: "Momo",
            
            description: "Momo are delicious dumplings, filled with meat or vegetables, steamed or fried.Served with tangy chutney for extra flavour."

        },
        Selroti:{
            title:"selroti",
            
            description:"Selroti is a ring-shaped nepali sweet with a crispy outside and soft inside, made from rice flour,sugar and ghee. it pairs with tea."

        },
         Samaybaji:{
            title:"Samaybaji",
            
            description:"Samaybaji is a traditional newari dish, featuring beaten rice, fried meat, pickles, and more, served with local drinks and desserts."
        },

        Chatpate:{
            title:"Chatpate",
            
            description:"Chatpate is a chrunchy,spicy street food,made from puffed rice, potatoes, veggies and nepali spices.It served in paper cone for added fun."
        }
     };

     


   submitButton.addEventListener("click", () => {
    const selectedFood = foodselect.value;
    const info = foodInfo[selectedFood];

        
     if (info) {
        
        foodDetails.innerHTML = `
          <div class="food-card">
             <h2>${info.title}</h2>
             <img src="${info.image}" alt="${info.title}">
             <p>${info.description}</p>
        </div>
     `;       
     foodDetails.style.display="block";   
   }
     else {
        foodDetails.style.display = "none";
      }

    });
});




$(document).ready(function() {
    
  $("body").css("background-color", "white");
});


 


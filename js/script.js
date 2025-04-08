
document.addEventListener("DOMContentLoaded", function () {
    // Show food list on button click
    document.getElementById("showFood").addEventListener("click", function () {
        document.querySelector(".food-list").innerHTML = `
            <ul>
                <li>Dal Bhat</li>
                <li>Momo</li>
                <li>Sel Roti</li>
                <li>Gundruk</li>
            </ul>
        `;
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const foodList = document.getElementById("food-list");

    foodList.addEventListener("change", function () {
        const selectedFood = foodList.value;

        let message = "";
        switch (selectedFood) {
            case "Momo":
                message = "Momo is a popular Nepali dumpling, filled with delicious meat or vegetables!";
                break;
            case "Dal Bhat":
                message = "Dal Bhat is the staple food in Nepal consisting of steamed rice and lentil soup.";
                break;
            case "Thukpa":
                message = "Thukpa is a noodle soup with vegetables, often with a spicy broth.";
                break;
            case "Sel Roti":
                message = "Sel Roti is a traditional Nepali rice donut, crispy and sweet!";
                break;
            case "Dhido":
                message = "Dhido is a traditional Nepali food made from buckwheat flour.";
                break;
            default:
                message = "Select a food to know more about it!";
                break;
        }

        // Display the selected food description
        document.querySelector(".rupesh").innerHTML = message;
    });
});





$(document).ready(function() {
    // Change the background color of the body
    $("body").css("background-color", "white");
});

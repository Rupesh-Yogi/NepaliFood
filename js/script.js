


$(document).ready(function() {
    
    $("body").css("background-color", "grey");
});




$(document).ready(function() {
    $('.dish').click(function() {
        var img = $(this).find('img');
        
        if (img.width() === 150) {
            img.animate({
                width: '300px', 
                height: '200px', 
                left: '0', 
                top: '0', 
                opacity: 1
            }, 1000); 
        } else {
            img.animate({
                width: '150px', 
                height: '100px', 
                left: '+=100px', 
                top: '+=100px', 
                opacity: 0.5 
            }, 1000); 
        }
    });
});


// const toggleThemeBtn = document.getElementById("toggleTheme");
// toggleThemeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });


// // Get the toggle button
// const toggleButton = document.getElementById('toggleButton');

// // Add click event to toggle dark mode
// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });


// document.getElementById('toggleButton').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');

//     if (document.body.classList.contains('dark-mode')) {
//         document.body.style.backgroundColor = '#121212';
//     } else {
//         document.body.style.backgroundColor = 'white';
//     }
// });


$('#toggleButton').click(function() {
    $('body').toggleClass('dark-mode');
    
    if ($('body').hasClass('dark-mode')) {
        $('body').css('background-color', '#121212');
    } else {
        $('body').css('background-color', 'white');
    }
});

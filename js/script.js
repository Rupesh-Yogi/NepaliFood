


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
                left: '0',
                top: '0',
                opacity: 1
            }, 1000);
            
        }
    });
});


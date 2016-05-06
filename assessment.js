$(document).ready(function() {

    var counter = 0;
    $('#generate').data('counter', counter);
    //event listeners
    $('#generate').on('click', appendContainer);
    // three parameters
    $('#container').on('click', '.delete', removeDelete);
    $('#container').on('click', '.change-color', changeBG);

    //changes the background of the container it's in
    function changeBG() {
        $(this).parent().toggleClass('red');

    }

    //removes the container the delete button is in
    function removeDelete () {
        $(this).parent().remove();
    }

    //adds a container to DOM and counts how many times you have added it
    function appendContainer() {

        counter = $('#generate').data('counter');
        counter++;
        $('#generate').data('counter', counter);


      $('#container').append('<div class="new-container"><button class="delete">Delete</button><button class="change-color">Change Color</button> Times clicked ' + counter + '</div>' );

    }

});

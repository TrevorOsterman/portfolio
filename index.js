function hambMenu() {
  $('body').on('click', '#hamburg', function(event) {
    event.preventDefault;
    $('#ham-links').slideToggle('slow');
  })
}

function handlePage(){
  hambMenu();
};

$(handlePage);

function hambMenu() {
  console.log('hambMenu running');
  $('body').on('click', '#hamburg', function(event) {
    event.preventDefault;
    console.log('click');
    $('#ham-links').slideToggle('slow');
  })
}

function handlePage(){
  console.log('page running');
  hambMenu();
};

$(handlePage);

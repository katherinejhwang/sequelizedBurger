$(document).ready(function() {
    
  $("#text-enter-button").click(() => {
    var burger_id = $(".burger_id");
    console.log(burger_id);
    console.log('wtf');
    let data = {
      burger_name: burger_id,
      devoured: false
    }
    $.ajax({
      method: "POST",
      url: "/burgers",
      data: data
    }).then(function() {
      // reload page to display devoured burger in proper column
//      location.reload();
    }).catch(err => {
      if (err) throw err;
  })

  });

  $("#devoursubmit").click(function(event) {
    event.preventDefault();
    console.log('devour');
    $.ajax({
      method: "POST",
      url: "/burgers"
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

});
});

$(document).ready(function () {

  $("#submit").on("click", function (event) {

    event.preventDefault();

    if ($("#burger_name").val() === "") {
      $(".invalid-feedback").show();
      $(".invalid-feedback").text("Please, insert hamburger's name");
      return;
    }

    const burgerObj = {
      burger_name: $('#burger_name').val().trim(),
      devoured: 0
    }

    $.post('/api/burgers', burgerObj)
      .then(() => location.reload());
  });

  $(".eat").on("click", function (event) {

    event.preventDefault();

    const id = $(this).data("update-id");

    const burgerObj = { devoured: 1 };

    $
      .ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: burgerObj
      })
      .then(() => location.reload());
  });

});
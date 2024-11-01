$(document).ready(function () {
  // $.ajax({
  //   type: "GET",
  //   url: "https://catfact.ninja/fact",
  //   success: function (response) {
  //     console.log(response);
  //     let fact = response.fact;
  //     $(".fact").text(fact);
  //   },
  //   error: function (error) {
  //     console.log("network error");
  //   },
  // });

  //   $.post(
  //     "https://catfact.ninja/fact",
  //     { title: "Our cat post" },
  //     function (data) {
  //       console.log(data);
  //       // let fact = data.fact;
  //       // $(".fact").text(fact);
  //     }
  //   );
  // });
  for (i = 0; i < 18; i++) {
    $.ajax({
      type: "get",
      url: "https://dog.ceo/api/breeds/image/random",
      success: function (response) {
        console.log(response);
        let imagelink = response.message;
        let img = $("<img/>");

        img.attr("src", imagelink);
        $(".images").append(img);
      },
    });
  }
});

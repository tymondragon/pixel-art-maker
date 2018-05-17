$(document).ready(function() {
      let $colorChoice = $('.color_choice')
      let color
      for (let i = 0; i < 10000; i++) {
        let pixel = $("<div>", {
          "class": "pixel",
        })
        $("#canvas").append(pixel)
      }
      $(".color").click(function() {
        $colorChoice.attr('id', this.id);
        color = this.id
        // console.log(`color is ${color}`)
      })
      $("div.pixel").mousedown(function() {
        $("div.pixel").mouseenter(function() {
          $(this).attr('id', color);
        })
      })
      $("div.pixel").mouseup(function() {
        console.log("i'm off")
        $("div.pixel").off( "mouseenter" )
      })
      });

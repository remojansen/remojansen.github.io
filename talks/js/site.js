(function(global){

    // LOAD DATA
    global.$.ajax({
        dataType: "json",
        url: "./data/boxes.json",
        data: {},
        success: function(json){
            // LOAD TEMPLATE
            global.$.ajax({
                dataType: "text",
                url: "./data/boxes.hbs",
                data: {},
                success: function(hbs)
                {
                    // RENDER TEMPLATE
                    var template = Handlebars.compile(hbs);
                    var html = template(json);
                    $('#maincontainer').html(html);
                }
            });
        }
    });

    var iam = [
      "web development ninja",
      "javascript &amp; typescript expert",
      "open-source contributor",
      "technical writer",
      "speaker",
      "entrepreneur",
      "technology lover",
      "hardcore gamer",
      "Internet enthusiast"
    ];

    var $iam = $('#iam');
    var i = 0;

    setInterval(function() {

      $iam.fadeOut();
      i = i + 1;
      i = (i < iam.length) ? (i) : 0;
      setTimeout(function() {
        $iam.html(iam[i] + ".").fadeIn();
      },500);

    },2000);


})(window);

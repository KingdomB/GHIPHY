$(document).ready(function () {


    var topics = [
      "junkanoo",
      "lions",
      "calculus",
      "bodacious the bull",
      "s550 mustang",
      "fox body mustang",
      "software development",
      "gymnastics",
      "greco roman wrestling",
      "rottweilers",
      "cute babies",
      "honda cbr 954rr",
      "organic chemistry",
      "demetria obilor",
      "blade",
      "jabari tribe",
      "iron man",
      "incredible hulk",
      "downhill skiing",
      "miniature schnauzer"
    ];
  
    // Wrap this for loop in a function.
    // Run it on start up and whenever a new button is added to the search
    // i.e. function renderButtons() { ... goes here.
    for (var i = 0; i < topics.length; i++) {
      // $("topic-btn1").button();
      // topicselected gets the value from the  based on the index.topics[i]
      var topicselected = topics[i]
     // console.log(topicselected);
  
      //here we are creating an input  of type button with id and value extracted 
      //from our topics selected.
      var buttonValues = $("<input>").attr({
        name: "test",
        type: "button",
        class: "btn btn-primary button topic-btn",
        value: topicselected
      })

      buttonValues.attr("data-topics", topicselected);
  
      $("#topic-btn1").append(buttonValues)
  
      // input.setAttribute(type = "button", id = "test")
  
      // MAYBE .button(topics[i]) OR append(topics[i])
    }
  
    // var topics = $(this).attr(addTopics[i]) => USE THIS LATER
  
    // Adding click event listen listener to all buttons
    $(".topic-btn").on("click", function () {
      // Grabbing and storing the data-topics property value from the button
      var topic = $(this).attr("data-topics");
      //var topics = $(this).attr(addTopics[i]);
      console.log(topic);
  
      // Constructing a queryURL using the topics name
      var queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        topic +
        "&api_key=dc6zaTOxFJmzC&limit=10";
  
      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .then(function (response) {
          //console.log(queryURL);
  
          //console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;
  
          // Looping through each result item
          for (var i = 0; i < results.length; i++) {
            // Creating and storing a div tag
            var topicsDiv = $("<div>");
            topicsDiv.addClass('sticker');
  
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);
  
            // Creating and storing an image tag
            var topicsImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            topicsImage.attr("src", results[i].images.fixed_height.url);
  
            // Appending the paragraph and image tag to the topicsDiv
            topicsDiv.append(p);
            topicsDiv.append(topicsImage);
  
            // Prependng the topicsDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").append(topicsDiv);
          }
          
        });
    });
    // Might need to be $(document).on("click", ".add-Btn2", function () {...})
    $(document).on("click", ".add-btn2", function () {
      

      //Establish a variable that will our input

      var newsearch = $(".add-btn").val().trim();

      console.log(newsearch);

      var newButton = [newsearch];

          

  
      $("#topic-btn1").append(newsearch);
  
      // Don't need anything below here 
      // Use Array.push to add the newsearch variable to your array of buttons 
      // Run renderButtons() function above
      
      });
  
  
  })
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
  "miniature",
  "miniature schnauzer"
];

var addTopics = [];

for (var i = 0; i < topics.length; i++) {
  $(".topic-btn1").button();

  // MAYBE .button(topics[i]) OR append(topics[i])
}

// var topics = $(this).attr(addTopics[i]) => USE THIS LATER

// Adding click event listen listener to all buttons
$("button").on("click", function() {
  // Grabbing and storing the data-topics property value from the button
  var topics = $(this).attr(topics[i]);
  var topics = $(this).attr(addTopics[i]);

  // Constructing a queryURL using the topics name
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    topics[i] +
    "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(queryURL);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {
        // Creating and storing a div tag
        var topicsDiv = $("<div>");

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
        $("#gifs-appear-here").text(topicsDiv);
      }
    });
});

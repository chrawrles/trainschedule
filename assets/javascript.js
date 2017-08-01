
    var config = {
    apiKey: "AIzaSyCUZjeDdEEgKET4n_Oclm0RLW9cGFHC3mw",
    authDomain: "the-project-8cdc7.firebaseapp.com",
    databaseURL: "https://the-project-8cdc7.firebaseio.com",
    projectId: "the-project-8cdc7",
    storageBucket: "the-project-8cdc7.appspot.com",
    messagingSenderId: "12902249618"
  };

  $(document).ready(function(){}  

  firebase.initializeApp(config);

    var Data = firebase.database();

  $("#addTrain").on("click", function() {

    var trainName = $("trainNameInput").val().trim();
    var firstTrain = $("firstTrainInput").val().trim();
    var destination = $("destinationInput").val().trim();
    var frequency = $("frequencyInput").val().trim();

    var secondTrain = {

    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency

  };
    Data.ref().push(newTrain);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");

    return false;

  });

    Data.ref().on("child_added", function(childSnapshot, prevChildKey) {

    var xName = childSnapshot.val().name;
    var xDestination = childSnapshot.val().destination;
    var xFrequency = childSnapshot.val().frequency;
    var xTrain = childSnapshot.val().firstTrain;

    var difference = moment().diff(moment.unix(xTrain), "minutes");
    var xRemainder = moment().diff(moment.unix(xTrain), "minutes") % tFrequency;
    var xMinutes = xFrequency - xRemainder;
    var xArrival = moment().add(xMinutes, "m").format("hh:mm A");

    $("#train-table > tbody").append("<tr><td>" + xName + "</td><td>" + xDestination + "</td><td>" + xFrequency + "</td><td>" + xArrival + "</td><td>" + xMinutes + "</td></tr>");
  
  });
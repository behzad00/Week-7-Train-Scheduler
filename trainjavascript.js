// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCe2kHzEemntEAf7K2Xq0CIoFoXstrTAx4",
    authDomain: "week-7-train-scheduler-a5c59.firebaseapp.com",
    databaseURL: "https://week-7-train-scheduler-a5c59.firebaseio.com",
    storageBucket: "week-7-train-scheduler-a5c59.appspot.com",
    messagingSenderId: "470034594827"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


$("#add-train-btn").on("click" , function(event){

	event.preventDefault();

	var trainName = $("#train-name-input").val().trim();
	var destination = $("#destination-input").val().trim();
	var firstTrainTime = $("#first-train-time-input").val().trim();
	var frequency = $("#frequency-input").val().trim();

	var newTrain = {

		trainName : trainName ,
		destination : destination ,
		firstTrainTime : firstTrainTime , 
		frequency : frequency 

	};

	database.ref().push(newTrain);

	console.log(newTrain.trainName)
	console.log(newTrain.destination)
	console.log(newTrain.firstTrainTime)
	console.log(newTrain.frequency)

	alert("Train successfully added");
		 
		$("#train-name-input").val("");
  		$("#destination-input").val("");
  		$("#first-train-time-input").val("");
  		$("#frequency-input").val("");

  		return false;

});

database.ref().on("child_added" , function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val)

	var trainName      = childSnapshot.val().trainName      ;
	var destination    = childSnapshot.val().destination    ;
	var firstTrainTime = childSnapshot.val().firstTrainTime ;
	var frequency      = childSnapshot.val().frequency      
	;
////////////////



$("#train-table > tbody").append("<tr><td>" + trainName + "</th><th>" + destination + "</td><td>" +
  firstTrainTime + "</td><td>" + requency + "</td></tr>");
});


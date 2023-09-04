Webcam.set({
  width: 350,
  height: 300,
  image_format: 'png',
  png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
  Webcam.snap(function(data_uri) {
    document.getElementById("view").innerHTML = '<img id="capture" src="' + data_uri + '"/>';
  });
}

console.log('ml5 version', ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I7TyhUkno/model.json', modelLoaded);

function modelLoaded() {
  console.log('Model Loaded');
}

function identifyGesture() {
  var captureImage = document.getElementById("capture");
  classifier.classify(captureImage, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
  var gestureLabel = results[0].label;
  var confidence = results[0].confidence;

  document.getElementById("gesture-name").innerText = "Gesture: " + gestureLabel;
  document.getElementById("gesture-confidence").innerText = "Confidence: " + confidence;

  if (gestureLabel === "thumbs_up") {
    speak("You made a thumbs up gesture.");
   
    document.getElementById("gesture-icon").innerHTML = "&#128077;";
  } else if (gestureLabel === "peace_sign") {
    speak("You made a peace sign gesture.");
    document.getElementById("gesture-icon").innerHTML = "&#9996;";
  } else {
    speak("Gesture not recognized.");
    document.getElementById("gesture-icon").innerHTML = "&#x1F645;";
  }
}

function speak(text) {
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis); }
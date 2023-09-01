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

function speak() {
  var synth = window.speechSynthesis;
  var speak_data_1 = "The first prediction is " + prediction1;
  var speak_data_2 = "The second prediction is " + prediction2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}



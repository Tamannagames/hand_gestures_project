Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  
  Webcam.attach('#camera');
  
  function captureImage() {
    Webcam.snap(function(data_uri) {
      document.getElementById('captured-image').innerHTML = '<img src="' + data_uri + '"/>';
    });
  }
  
  function identifyGesture() {

    Webcam.snap(function(data_uri) {
        document.getElementById("captured-image").innerHTML = '<img id="capture" src="'+data_uri+'"/>';
    });
  }
  
  console.log('ml5.js version:', ml5.version);
  
  const model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Jh_6XtBpC/model.json', function() {
    console.log('Model loaded');
  });
  
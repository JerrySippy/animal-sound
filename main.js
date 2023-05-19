//https://teachablemachine.withgoogle.com/models/_3BGR-cjp/

function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/_3BGR-cjp/model.json",
    modelReady
  );
}
function modelReady(){

    classifier.classify(gotResults);
}
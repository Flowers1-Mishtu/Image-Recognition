

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_pic()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mcyLhLYCL/model.json",modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}

function check(){
img = document.getElementById('captured_image');
classifier.classify(img, gotresult);
}

function gotresult(error, results){
    if (error){
        console.error(error);
} else {
console.log(results);
document.getElementById("result_object_name").innerHTML ="Object : " + results[0].label;
document.getElementById("result_object_accuracy").innerHTML = "Accuracy : " + results[0].confidence.toFixed(3);

}
}
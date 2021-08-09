Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("Camera");
Webcam.attach('#Camera') ;

function take_picture() 
{
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img id="rse" src="'+data_uri+'"/>' ;

    } );
}

console.log("ml5",ml5.version)

clf = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oSi5O10yx/model.json',modelLoaded) ;

function modelLoaded()   
{
    console.log("model Loded")
}

function check() 
{
    img =document.getElementById("rse");
    clf.classify(img, gotResult)
    
}

function gotResult(error, results)
{
    if(error){
        console.log("You have error");
    }
    else{
      console.log(results)
      document.getElementById("output_name").innerHTML =results[0].label;
      document.getElementById("output_accuracy").innerHTML =results[0].confidence.toFixed(5)
    }
}


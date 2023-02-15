//https://teachablemachine.withgoogle.com/models/j7g-YkNbq/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NQKmk92V4/model.json',{ probabilityThreshold: 0.7} ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var cachorro = 0;
var gato = 0;
var resultado ='';
function gotResults(error, results){

    if(error) {
        console.error(error);
    }else{
        console.log(results);
        //random_number_r = Math.floor(Math.random() * 255) + 1;
        //random_number_g = Math.floor(Math.random() * 255) + 1;
        //random_number_b = Math.floor(Math.random() * 255) + 1;

        resultado = results[0].label;
        document.getElementById("result_label").innerHTML = 'Som detectado de - '+results[0].label;
        //document.getElementById("result_count").innerHTML = 'Amor detectado - '+amor+ 'Fofocando detectado -'+fofocando+ ' Palmas detectado - '+palmas;
        //document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","random_number_b")";
        //document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","random_number_b")";

        //img = document.getElementById('animal_image');
        var img = document.getElementById('animal_image');

        console.log(resultado);

        if(resultado == 'Cachorro') {
            img.src = 'dog.gif';
            //img.setAttribute('src', 'https://c.tenor.com/WmefaP0mX8AAAAAC/happy-hearts.gif');
            cachorro = cachorro+1;

        }else if(resultado == 'Gato') {
            img.src= 'cat.gif';
            gato = gato+1;

        }else {
            img.src = 'ouvindo.gif';
            console.log("else");
        }
    }
}
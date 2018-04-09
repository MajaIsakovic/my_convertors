document.getElementById('submit1').addEventListener('click', function(e){
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calcCelsius, 3000);
    e.preventDefault();
})

document.getElementById('submit2').addEventListener('click', function(e){
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calcFahrenheit, 3000);
    e.preventDefault();
})


const inputUI = document.getElementById('input-value');

function calcCelsius(){

    const getValue = inputUI.value;
    const displayUI =  document.getElementById('result');

    const celsius = (parseFloat(getValue) - 32) / 1.8;

    if(isFinite(celsius)){
        displayUI.value = celsius.toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        errorMessage('Please check your numbers');
    }

}

function calcFahrenheit(){

    const getValue = inputUI.value;
    const displayUI =  document.getElementById('result');

    const fahrenheit = getValue * 1.8 + 32;

    if(getValue === ''){
        errorMessage('Please check your numbers');
    } else {
        displayUI.value = fahrenheit.toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }
}

function errorMessage(error){

    document.getElementById('results').style.display = 'none';
    // show loader 
    document.getElementById('loading').style.display = 'none';

    const errDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errDiv.className = 'alert alert-danger';
    errDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errDiv, heading);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2500);
}
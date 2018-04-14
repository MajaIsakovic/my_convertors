const selectTo = document.querySelector('#selectTo');

selectTo.addEventListener('change', function(e){
        let getInput = document.querySelector('#from');
        let getInputValue = getInput.value;
    
        let changeValue = e.target.value;
// Checks if input field is  empty
// If it is not than switch
        if(getInputValue === ''){
            showError('Please enter a value');
        } else {
            switch(changeValue){
                
                case '11':
                // EUR
                        selectValue = document.getElementById('selectFrom').value;
                switch(selectValue){
                    case '1':
                        let racun = getInputValue;
                        document.getElementById('to').value = racun;
                        break;
                    case '2':
                        let racun1 = getInputValue * 0.81096; //change to dinamic
                        document.getElementById('to').value = racun1.toPrecision(7);
                        break;
                    case '3':
                        let racun3 = getInputValue * 0.00846; //change to dinamic
                        document.getElementById('to').value = racun3.toPrecision(7);
                        break;
                    case '4':
                        let racun4 = getInputValue * 0.51129; //change to dinamic
                        document.getElementById('to').value = racun4.toPrecision(7);
                        break;
                    case '5':
                        let racun5 = getInputValue * 0.84203; //change to dinamic
                        document.getElementById('to').value = racun5.toPrecision(7);
                        break;
                    case '6':
                        let racun6 = getInputValue * 1.15407; //change to dinamic
                        document.getElementById('to').value = racun6.toPrecision(7);
                        break;  
                    default:
                        showError('Please select a value to convert');
                }
            break;
    
                case '12':
                //USD
                    selectValue = document.getElementById('selectFrom').value;
                    switch(selectValue){
                        case '1':
                            let racun = getInputValue * 1.2331; //change to dinamic
                            document.getElementById('to').value = racun.toPrecision(7);
                            break;
                        case '2': 
                            let racun2 = getInputValue;
                            document.getElementById('to').value = racun2;
                            break;
                        case '3':
                            let racun3 = getInputValue * 0.01043; //change to dinamic
                            document.getElementById('to').value = racun3.toPrecision(7);
                            break;
                        case '4':
                            let racun4 = getInputValue * 0.63047; //change to dinamic
                            document.getElementById('to').value = racun4.toPrecision(7);
                            break;
                        case '5':
                            let racun5 = getInputValue * 1.03831; //change to dinamic
                            document.getElementById('to').value = racun5.toPrecision(7);
                            break;
                        case '6':
                            let racun6 = getInputValue * 1.42308; //change to dinamic
                            document.getElementById('to').value = racun6.toPrecision(7);
                            break; 
                        default:
                            showError('Please select a value to convert');
                    }       
                    break;
                case '13':
                // RSD
                    selectValue = document.getElementById('selectFrom').value;
                    switch(selectValue){
                        case '1':
                            let racun = getInputValue * 117.5; //change to dinamic
                            document.getElementById('to').value = racun.toPrecision(7);
                            break;
                        case '2':
                            let racun2 = getInputValue * 95.8765; //change to dinamic
                            document.getElementById('to').value = racun2.toPrecision(7);
                            break;
                        case '3':
                            let racun3 = getInputValue;
                            document.getElementById('to').value = racun3;
                            break;
                        case '4':
                            let racun4 = getInputValue * 60.4476; //change to dinamic
                            document.getElementById('to').value = racun4.toPrecision(7);
                            break;
                        case '5':
                            let racun5 = getInputValue * 99.5498; //change to dinamic
                            document.getElementById('to').value = racun5.toPrecision(7);
                            break;
                        case '6':
                            let racun6 = getInputValue * 136.44; //change to dinamic
                            document.getElementById('to').value = racun6.toPrecision(7);
                            break;
                        default:
                            showError('Please select a value to convert');
                    }
                    break;
                case '14':
                // BAM
                    selectValue = document.getElementById('selectFrom').value;
                    switch(selectValue) {
                        case '1':
                            let racun = getInputValue * 1.95583; //change to dinamic
                            document.getElementById('to').value = racun.toPrecision(7);
                            break;
                        case '2':
                            racun2 = getInputValue * 1.58611; //change to dinamic
                            document.getElementById('to').value = racun2.toPrecision(7);
                            break;
                        case '3':
                            racun3 = getInputValue * 0.01654 ; //change to dinamic
                            document.getElementById('to').value = racun3.toPrecision(7);
                            break;
                        case '4':
                            let racun4 = getInputValue; //change to dinamic
                            document.getElementById('to').value = racun4;
                            break;
                        case '5':
                            let racun5 = getInputValue * 1.64688; //change to dinamic
                            document.getElementById('to').value = racun5.toPrecision(7);
                            break;
                        case '6':
                            let racun6 = getInputValue * 2.25716; //change to dinamic
                            document.getElementById('to').value = racun6.toPrecision(7);
                            break;
                        default:
                            showError('Please select a value to convert');
                    }
                    break;
                case '15':
                // CHF
                    selectValue = document.getElementById('selectFrom').value;
                    switch(selectValue){
                        case '1':
                            let racun = getInputValue * 1.1876; //change to dinamic
                            document.getElementById('to').value = racun.toPrecision(7);
                            break;
                        case '2':
                            let racun2 = getInputValue * 0.9631; //change to dinamic
                            document.getElementById('to').value = racun2.toPrecision(7);
                            break;
                        case '3':
                            let racun3 = getInputValue * 0.01005; //change to dinamic
                            document.getElementById('to').value = racun3.toPrecision(7);
                            break;
                        case '4':
                            let racun4 = getInputValue * 0.60721; //change to dinamic
                            document.getElementById('to').value = racun4.toPrecision(7);
                            break;
                        case '5':
                            let racun5 = getInputValue; //change to dinamic
                            document.getElementById('to').value = racun5;
                            break;
                        case '6':
                            let racun6 = getInputValue * 1.37057; //change to dinamic
                            document.getElementById('to').value = racun6.toPrecision(7);
                            break;
                        default:
                            showError('Please select a value to convert');
                    }
                    break;
                case '16':
                // GBP
                    selectValue = document.getElementById('selectFrom').value;
                    switch(selectValue){
                        case '1':
                            let racun = getInputValue * 0.8665; //change to dinamic
                            document.getElementById('to').value = racun.toPrecision(7);
                            break;
                        case '2':
                            let racun2 = getInputValue * 0.7027; //change to dinamic
                            document.getElementById('to').value = racun2.toPrecision(7);
                            break;
                        case '3':
                            let racun3 = getInputValue * 0.00733; //change to dinamic
                            document.getElementById('to').value = racun3.toPrecision(7);
                            break;
                        case '4':
                            let racun4 = getInputValue * 0.44303; //change to dinamic
                            document.getElementById('to').value = racun4.toPrecision(7);
                            break;
                        case '5':
                            let racun5 = getInputValue * 0.72962; //change to dinamic
                            document.getElementById('to').value = racun5.toPrecision(7);
                            break;
                        case '6':
                            let racun6 = getInputValue; //change to dinamic
                            document.getElementById('to').value = racun6;
                            break;
                        default:
                             showError('Please select a value to convert');
                    }
                    
                    break;
                default:
                    console.log('Something went wrong')
            }
        }    
        e.preventDefault();
    })

// Show error function
function showError(error){
    // Create div
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

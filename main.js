const bill=document.querySelector('.bill')
const btns= document.querySelectorAll('.perc')
const custom=document.querySelector('#custom')
const people=document.querySelector('.people')
const money=document.querySelectorAll('.text')
const reset=document.querySelector('.reset')

var tipValue = 0



function codeAddress() {
    btns.forEach(btn => {    
        btn.classList.remove('btn-active');
    })
}
window.onload = codeAddress;

btns.forEach(btn=>{
    btn.addEventListener('click', handleClick);
});

bill.addEventListener("input", setBillValue);
custom.addEventListener("input", setCustom)
people.addEventListener('input', setPeople)
reset.addEventListener('click', resetValues)

billValue = 0.0

function setBillValue(){
    if(bill.value.includes(',')){
        bill.value.replace(',','.')

    }
    billValue= parseFloat(bill.value)
    console.log(bill.value)

    calculateTip();
}

function setCustom(){
    if(custom.value.includes('.')){
        custom.value.replace('.','')

    }
    if(isNaN(custom.value)) custom.value = 0;
    tipValue = parseInt(parseFloat(custom.value))/100
    console.log(custom.value)
    calculateTip();
}

function handleClick(event){
    btns.forEach(btn => {    
        btn.classList.remove('btn-active');
        if(event.target.value == btn.value){
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.value)/100;
        }
    });

    custom.value = '';
    calculateTip();
    console.log(tipValue);
}

function setPeople(){
    people.value= parseInt(parseFloat(people.value))
    console.log(people.value)

    calculateTip();
}


function calculateTip(){
    if(people.value>=1){
        var TipAmount = bill.value * tipValue / people.value
        console.log(TipAmount)
        var Total = bill.value / people.value
        console.log(Total)
        money[0].innerHTML = '$'+ TipAmount.toFixed(2);
        money[1].innerHTML = '$'+ Total.toFixed(2);
    }
}
function resetValues(){
    money[0].innerHTML='$' + 0
    money[1].innerHTML='$' + 0
    bill.value= ' '
    custom.value= ' '
    people.value= ' '
}

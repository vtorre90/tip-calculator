let inputBill = document.querySelector('.input-bill');
let outputBill = document.querySelector('.output-bill');
let fiveTip = document.querySelector('#five-tip');
let fitheen = document.querySelector('#fiftheen-tip')
let tenTip = document.querySelector('#ten-tip');
let twentyfiveTip = document.querySelector('#twentyfive-tip');
let fiftyTip = document.querySelector ('#fifty-tip');
let custom = document.querySelector ('#custom');
let nrPersone = document.querySelector('#nr-persone');
let totAmountOutput = document.querySelector('#totAmountOutput');
let resetBtn = document.querySelector('#reset');
let totTipOutput = document.querySelector('#totTipOutput');

//show tot sum
function showBill(){
    inputBill.addEventListener('input', ()=>{
    outputBill.innerHTML = Number(inputBill.value);   

    //show sum shared     
        nrPersone.addEventListener('input', ()=>{
                outputBill.innerHTML = ''
                outputBill.innerHTML = inputBill.value / Number(nrPersone.value) + "€";
        })

    //show sum tip        
        fiveTip.addEventListener('click', ()=>{
            totTipOutput.innerHTML = ''
            let totBill = Number(inputBill.value)/100*5
            let totPeople = Number(nrPersone.value)
            totTipOutput.innerHTML =(totBill/totPeople).toFixed(2) + "€"
        })

        tenTip.addEventListener('click', ()=>{
            totTipOutput.innerHTML = ''
            let totBill = Number(inputBill.value)/100*10
            let totPeople = Number(nrPersone.value)
            totTipOutput.innerHTML =(totBill/totPeople).toFixed(2) + "€"
        })

        fitheen.addEventListener('click', ()=>{
            totTipOutput.innerHTML = ''
            let totBill = Number(inputBill.value)/100*15
            let totPeople = Number(nrPersone.value)
            totTipOutput.innerHTML =(totBill/totPeople).toFixed(2) + "€"
        })

        twentyfiveTip.addEventListener('click', ()=>{
            totTipOutput.innerHTML = ''
            let totBill = Number(inputBill.value)/100*25
            let totPeople = Number(nrPersone.value)
            totTipOutput.innerHTML =(totBill/totPeople).toFixed(2) + "€"
        })

        fiftyTip.addEventListener('click', ()=>{
            totTipOutput.innerHTML = ''
            let totBill = Number(inputBill.value)/100*50
            let totPeople = Number(nrPersone.value)
            totTipOutput.innerHTML =(totBill/totPeople).toFixed(2) + "€"
        })

        custom.addEventListener('click', ()=>{
            totTipOutput.innerHTML = ''
            let totBill = Number(inputBill.value)/100*50
            let totPeople = Number(nrPersone.value)
            totTipOutput.innerHTML =(totBill/totPeople).toFixed(2) + "€"
        })
    })
}
showBill() 

//reset button
function reset(){
    resetBtn.addEventListener('click', ()=>{
        outputBill.innerHTML = '$ 0.00'
        totTipOutput.innerHTML = '$ 0.00'
        inputBill.value = 0
        nrPersone.value = 0
    })
}
reset ()



const validPin = 1234;

const transectionData = []
// function to get input values
function getInputValueNumber(id) {
    const inputfield = document.getElementById(id)
    const inputfieldValue = inputfield.value
    const inputfieldValueNumber = parseInt(inputfieldValue)
    return inputfieldValueNumber
}

function getInputValue(id) {
    const inputfield = document.getElementById(id)
    const inputfieldValue = inputfield.value
    return inputfieldValue
}
// function to get innerText
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

// function to set innerText
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("availavle-balance")
    availableBalanceElement.innerText = value
}

// function to toggle froms
function handleToggle(id) {
    const forms = document.getElementsByClassName('form')
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

// function to toogle buttons 
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName('form-btn')
    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }

    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
}


// add Maney Feature
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const bank = getInputValue('bank')
    const acountNumber = getInputValue('account-nummber')
    const amount = getInputValueNumber('add-amount')

    const pinNumber = getInputValueNumber('add-pin')
    const availavelBalance = getInnerText('availavle-balance')

    if (acountNumber.length < 11) {
        alert('Please provide valid account number')
        return;
    }
    if (pinNumber != validPin) {
        alert('Please provide valid pin number')
        return;
    }
    if (amount<=0) {
        alert('Please enter a valid amount')
        return;
    }
    const totalNewAvailavleBalance = amount + availavelBalance
    setInnerText(totalNewAvailavleBalance)

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }

    transectionData.push(data)
    console.log(transectionData);

})



// Cashout maney feature
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const validPin = 1234;
    const pin = getInputValueNumber('input-pin')
    const amount = getInputValueNumber('withdraw-amount')
    const availavelBalance = getInnerText('availavle-balance')
    const totalNewAvailavleBalance = availavelBalance - amount

    const agentNumber = getInputValue('agent-number')

    if (agentNumber.length < 11) {
        alert('Please provide valid account number')
        return;
    }
    if (pin != validPin) {
        alert('Please provide valid pin number')
        return;
    }
    if (amount <=0 || amount>availavelBalance) {
        alert('Please enter a valid amount')
        return;
    }

    // console.log(totalNewAvailavleBalance);
    setInnerText(totalNewAvailavleBalance)

    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }

    transectionData.push(data)
    console.log(transectionData);

})




document.getElementById('transection-button').
addEventListener('click', function(){
   const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''
   for(const data of transectionData){
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class=" p-3 rounded-full bg-[#F4F5F7]">
                            <img src="./assets/wallet1.png" class=" mx-auto" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `
          transactionContainer.appendChild(div)
        
    }
    
})



// toggling feature
document.getElementById('add-button').addEventListener('click', function (e) {
    handleToggle("add-maney-parent")
    handleButtonToggle('add-button')

})




document.getElementById('cash-out-button').addEventListener('click', function () {
    handleToggle('cash-out-parent')
    handleButtonToggle('cash-out-button')
})





document.getElementById('transfer-button').addEventListener('click', function () {
    handleToggle('transfer-money-parent')
    handleButtonToggle('transfer-button')
})




document.getElementById('bonus-button').addEventListener('click', function () {
    handleToggle('get-bonus-parent')
    handleButtonToggle('bonus-button')
})



document.getElementById('pay-bil-button').addEventListener('click', function () {
    handleToggle('pay-bil-parent')
    handleButtonToggle('pay-bil-button')
})


document.getElementById('transection-button').addEventListener('click', function () {
    handleToggle('transection-parent')
    handleButtonToggle('transection-button')
})
document.getElementById("show-cashout").addEventListener('click', function(){
    console.log('clicked')
    document.getElementById('cashout-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
})
document.getElementById("show-addmoney").addEventListener('click', function(){
    console.log('clicked')
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cashout-form').classList.add('hidden')
})
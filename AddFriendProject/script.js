let isstatus=document.querySelector('#status');
let addBtn=document.querySelector('#add');
let removeBtn=document.querySelector('#remove');

addBtn.addEventListener('click',function(){
    isstatus.textContent='Friend'

})
removeBtn.addEventListener('click',function(){
    isstatus.textContent='Stranger'
})
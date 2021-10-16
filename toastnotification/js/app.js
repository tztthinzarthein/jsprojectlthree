// UI
const buttton=document.getElementById('button');
const toasts=document.getElementById('toasts');

const messages=[
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
]
// function ထဲကနေ function ပြန်ခေါ်ရင် round bracket လို
// buttton.addEventListener('click',()=>createnotifcation('Can\'t access!'));
buttton.addEventListener('click',()=>createnotifcation('Can\'t access!','danger'));

function createnotifcation(message,type){
    // console.log('hey');

    // const notify=document.createElement('div');
    // notify.classList.add('toast');
    // notify.innerText=getrandommessage();
    // // console.log(notify);

    // toasts.appendChild(notify);

    // setTimeout(()=>{
    //     notify.remove();
    // },3000);

    const notify=document.createElement('div');
    notify.classList.add('toast');
    notify.classList.add(type ? type : 'info');
    notify.innerText= message ? message : getrandommessage();
    // console.log(notify);

    toasts.appendChild(notify);

    setTimeout(()=>{
        notify.remove();
    },3000);
}

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}
//console.log(getrandommessage());
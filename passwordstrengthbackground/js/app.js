// UI
const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');


// Event Listener 
password.addEventListener('input',(e)=>{

    // console.log("hay");
    // console.log(e.target);
    // console.log(e.target.value);

    const input = e.target.value;
    const inlength = input.length;
    // console.log(inlength);
    const blurvalue = 20 - inlength * 2;
   
    background.style.filter = `blur(${blurvalue}px)`;

});

eyeicon.addEventListener('click',()=>{

    if(eyeicon.classList.contains('fa-eye')){
        // console.log('show pasword');

        // Method 1
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa-eye-slash');

        // Method 2
        eyeicon.classList.replace("fa-eye","fa-eye-slash");

        password.setAttribute("type","text");

    }else{
        // console.log('hide password');
        
        // eyeicon.classList.add('fa-eye');
        // eyeicon.classList.remove('fa-eye-slash');
        eyeicon.classList.replace("fa-eye-slash","fa-eye");

        password.setAttribute("type","password");
    }

});
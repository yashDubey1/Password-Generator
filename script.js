let defRadio = document.getElementById("def");
let custRadio = document.getElementById("cust");
let symCheck = document.getElementById("sym");
let numCheck = document.getElementById("num");
let defCheck = document.getElementById("cap");
let sliderValue = document.getElementById("charSlider");
let sliderField = document.getElementById("sliderVal");
let sBtn = document.getElementById("singleBtn");
let mBtn = document.getElementById("multipleBtn");
let num = document.getElementById("numberentry");
let cb = document.getElementById("cb");
let incl = document.getElementById("includefield");
let passDisplay = document.getElementById("displayPass");


// function to generate random password
function randomPass(){
    let sliderField = document.getElementById("sliderVal");
    let passDisplay = document.getElementById("displayPass");
    let defRadio = document.getElementById("def");
    let custRadio = document.getElementById("cust");
    let symCheck = document.getElementById("sym");
    let numCheck = document.getElementById("num");
    let capCheck = document.getElementById("cap");
    
    let password = "";
    let nums = "1234567890";
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*()";
    
    if(defRadio.checked){
        possiblePassword = nums+chars+caps+symbols;
    }
    else{
        if(symCheck.checked && !numCheck.checked && !capCheck.checked){
            possiblePassword = symbols;
        }
        else if(numCheck.checked && !symCheck.checked && !capCheck.checked){
            possiblePassword = nums;
        }
        else if(capCheck.checked && !numCheck.checked && !symCheck.checked){
            possiblePassword = chars+caps;
        }
        else if(capCheck.checked && numCheck.checked && !symCheck.checked){
            possiblePassword = chars+caps+nums;
        }
        else if(capCheck.checked && symCheck.checked && !numCheck.checked){
            possiblePassword = chars+caps+symbols;
        }
        else if(numCheck.checked && symCheck.checked && !capCheck.checked){
            possiblePassword = symbols+nums;
        }
        else if(numCheck.checked && symCheck.checked && capCheck.checked){
            possiblePassword = chars+symbols+nums+caps;
        }
    }
    
    let range = sliderField.value;
    for(i=1;i<=range;i++){
        password += possiblePassword.charAt(Math.floor(Math.random()*possiblePassword.length))
    }
    // passDisplay.value = password+"\n";
    // console.log(password)
    return password;
} 
// function end

// funtion to display the slider value in the text field 
function getCharRange(){
    let sliderValue = document.getElementById("charSlider");
    let sliderField = document.getElementById("sliderVal");
    sliderField.value = sliderValue.value;
}


// function to enable certain checkboxes on clickin custom default radio buttons
function enableRow2(){
    
    let defRadio = document.getElementById("def");
    let custRadio = document.getElementById("cust");
    let symCheck = document.getElementById("sym");
    let numCheck = document.getElementById("num");
    let defCheck = document.getElementById("cap");
    
    if(custRadio.checked){
        symCheck.disabled = false;
        numCheck.disabled = false;
        defCheck.disabled = false;
    }
    else if(defRadio.checked){
        symCheck.disabled = true;
        numCheck.disabled = true;
        defCheck.disabled = true;
    }
}


function openMenu(){
    let opt = document.getElementById("options");
    let ham = document.getElementById("ham");
    let cross = document.getElementById("cross");
    opt.style.left = 0;
    ham.style.display="none";
    cross.style.display = "block";
}

function closeMenu(){
    let opt = document.getElementById("options");
    let ham = document.getElementById("ham");
    let cross = document.getElementById("cross");
    opt.style.left = "-1100";
    cross.style.display="none";
    ham.style.display = "block";
}

//function to enable certain ui widgets when radio buttons are clicked
function enableRow3(){
    
    let sBtn = document.getElementById("singleBtn");
    let mBtn = document.getElementById("multipleBtn");
    let num = document.getElementById("numberentry");
    let cb = document.getElementById("cb");
    let incl = document.getElementById("includefield");
    
    if(mBtn.checked){
        num.disabled=false;
        num.value = 4;
    }
    else if(sBtn.checked){
        num.disabled=true;
    }

    if(cb.checked){
        incl.disabled = false;
    }
    else{
        incl.disabled = true;
    }
}

function generateMultiple(){
    let sBtn = document.getElementById("singleBtn");
    let mBtn = document.getElementById("multipleBtn");
    let num = document.getElementById("numberentry");
    let passDisplay = document.getElementById("displayPass");

    let pass = [];
    range = parseInt(num.value);
    let access = true;
    if(range>100){
        alert("Maximum number of passwords that can be generated at a time are limited to 100!");
        access = false;
    }
    else{
    let i=1;
    if(mBtn.checked && access==true)
        while(i<=range){
            console.log(i);
            pass.push(i+". "+randomPass());
            i++;
        }
    else{
        pass.push(randomPass());
    }
        passDisplay.value = pass.join("\n");
}
    closeMenu();
}


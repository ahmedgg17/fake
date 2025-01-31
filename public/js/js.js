function focus(){
    let numberOrEmail =document.getElementById('numberOrEmail')
    let name_label =  document.querySelector(".name_label")
    
    let password_label = document.querySelector('.password_label')
    numberOrEmail.addEventListener("focus", ()=>{
        name_label.style.top = "20px"
        name_label.style.fontSize = "13px"
        name_label.style.color = "rgb(53, 53, 53)"
        numberOrEmail.style.paddingBottom = "3px"
        numberOrEmail.style.fontSize = "16px"
    })
    password.addEventListener("focus", ()=>{
        password_label.style.bottom = "155px"
        password_label.style.fontSize = "14px"
        password_label.style.color = "rgb(53, 53, 53)"
        password.style.paddingBottom = "3px"
        password.style.fontSize = "16px"
    })
}
function blur(){
    let numberOrEmail =document.getElementById('numberOrEmail')
    let name_label =  document.querySelector(".name_label")
    
    let password_label = document.querySelector('.password_label')
 
    numberOrEmail.addEventListener("blur",()=>{  
         if(numberOrEmail.value === ""){
        name_label.style.top = "33px"
        name_label.style.fontSize = "16px"
        name_label.style.color = "rgb(103, 120, 138)"
        numberOrEmail.style.paddingBottom = "0"
        numberOrEmail.style.fontSize = "16px"
    }
    })

    password.addEventListener("blur",()=>{
        if(password.value == ""){
        password_label.style.bottom = "139px"
        password_label.style.fontSize = "16px"
        password_label.style.color = "rgb(103, 120, 138)"
        password.style.paddingBottom = "0"
        password.style.fontSize = "16px"
    }
    })
}
function delet(){
let deleteButteon = document.getElementById("delete")
let password = document.getElementById("password")
let numberOrEmail =document.getElementById('numberOrEmail')
numberOrEmail.addEventListener("focus",()=>{
        numberOrEmail.addEventListener("input",()=>{
        if(numberOrEmail.value !== ""){
            deleteButteon.classList.remove('display-n')
        }else{
            deleteButteon.classList.add('display-n')
        }
    })
})

deleteButteon.onclick = ()=>{
    numberOrEmail.value = ""
    deleteButteon.classList.add('display-n')
    numberOrEmail.focus()
}
// numberOrEmail.addEventListener("blur",()=>{
//         deleteButteon.classList.add('display-n')
// })


}
function showPassword(){
    let password = document.getElementById("password")
    let showButton = document.getElementById('eyes')
    password.addEventListener('focus',()=>{
        password.addEventListener("input", ()=>{
                 if(password.value !== ""){
        showButton.classList.remove('display-n')
        
     }else{
        showButton.classList.add('display-n')
        showButton.innerHTML = `<i class="fa-regular fa-eye-slash "></i>`
     }
        })

    })
    showButton.onclick = ()=>{
        if(showButton.innerHTML === `<i class="fa-regular fa-eye-slash "></i>`){
            showButton.innerHTML = `<i class="fa-regular fa-eye eyes"></i>`
            showButton.style.right = '19.5px'
            password.removeAttribute('type','password')
        }else if(showButton.innerHTML === `<i class="fa-regular fa-eye eyes"></i>`){
            showButton.innerHTML = `<i class="fa-regular fa-eye-slash "></i>`
            showButton.style.right = '18px'
            password.setAttribute('type','password')
        }
    }
}
function createNowAccount(){
    let createAccount = document.getElementById('createAccount')
    createAccount.addEventListener('click',()=>{
        window.location.href = "https://m.facebook.com/reg/"
    })
}
function Forgotten(){
    const Forgotten = document.getElementById('Forgotten')
    Forgotten.addEventListener('click',()=>{
        window.location.href = "https://m.facebook.com/login/identify/"
    })
}
window.onload = ()=>{
    focus()
    blur()
    delet()
    showPassword()
    createNowAccount()
    Forgotten()
}
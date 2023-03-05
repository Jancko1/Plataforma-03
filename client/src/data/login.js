const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click",() => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
            
            pwFields.forEach(password => {
                if(password.type==="password"){
                    password.type = "text"
                    eyeIcon.classList.replace("ri-eye-off-line","ri-eye-line")
                    return;
                }
                password.type = "password"
                    eyeIcon.classList.replace("ri-eye-line","ri-eye-off-line")
            })
        })
})

links.forEach(link => {
    link.addEventListener("click", e =>{
        e.preventDefault();
        forms.classList.toggle("show-signup")
    })
})
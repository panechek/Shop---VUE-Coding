function renderFalse(){
    alert("Вы ввели неправильный адрес");
    // document.querySelector('.falseEmail').insertAdjacentHTML("beforeend","<p> Неправильный email</p>")
}
function testEmail(a){
    const redEx = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    if (!redEx.test(a)){
        renderFalse();
}
}
const sendMail = document.querySelector(".subscribe_input");
const sendMailBtn = document.querySelector(".subscribe_btn");
sendMailBtn.addEventListener('click',()=>{
        testEmail(sendMail.value)
})
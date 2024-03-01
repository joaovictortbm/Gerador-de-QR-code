
const main= document.querySelector(".main");
const qrcodeBtn= document.querySelector("#qrbtn")
const qrinput= document.querySelector("#qrinput");
const qrimage= document.querySelector(".QRcode img")
 

function generateQrcode(){
    const input = qrinput.value;
    if(!input) return;

    qrcodeBtn.innerText= "Gerando código..."

    qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinput.value}`

    qrimage.addEventListener("load", ()=>{
        main.classList.add("active");
    })

    qrcodeBtn.innerText= "QR code criado"
    

}
qrcodeBtn.addEventListener("click", () =>{
    generateQrcode();

})







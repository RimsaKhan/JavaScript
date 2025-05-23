
const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generate-btn');
const downloadBtn=document.getElementById('download-btn');
const qrContainer=document.querySelector('.qr-body');
let size=sizes.value;
generateBtn.addEventListener('click',(e)=>{
e.preventDefault();
isEmptyInput();
});
sizes.addEventListener("change",(e)=>{
    size=e.target.value;
    isEmptyInput();   
});
function isEmptyInput(){
// if(qrText.value.length>0){
//     generateQRCode();
// }
// else{
//     alert("Enter the text or url to generate your QR");
// }
qrText.value.length>0? generateQRCode(): alert("Enter the text or url to generate your QR");
}
function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
      text:qrText.value,
      height:size,
      width:size,
      colorDark : "#000000",
      colorLight : "#ffffff",
    })
}
downloadBtn.addEventListener("click",()=>{
let img=document.querySelector('.qr-body img');
if(img!==null){
    let imgAtrr=img.getAttribute('src');
    downloadBtn.setAttribute("href",imgAtrr);
}
else{
    downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
}
})

const qrCode = document.querySelector(".qr-code");
const text = document.querySelector(".form-control");
const btnGenerate = document.querySelector(".btn-generate");
const btnCancel = document.querySelector(".btn-cancel");
const root = document.querySelector(".root");

generateQrCode = async (value) => {
    if (value) {
        await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`).then(
            (res) => (qrCode.src = res.url)
        );
        qrCode.style.display = "block";
        root.style.height = "480px";
    }
};

btnGenerate.addEventListener("click", () => {
    let value = text.value;
    generateQrCode(value);
});

btnCancel.addEventListener("click", () => {
    root.style.height = "250px";
    qrCode.style.display = "none";
    text.value = "";
});

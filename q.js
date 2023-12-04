let toastBox = document.getElementById('toastBox')

let sucessMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, Check again'

function toastNot(msg) {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if (msg.includes("error")) {
        toast.classList.add("error")
    }
    else if (msg.includes("Invalid")) {
        toast.classList.add("invalid")
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}



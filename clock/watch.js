
setInterval(() => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

     document.querySelector(".hour").style.transform = `rotate(${(hour * 60 + minute) * .5 - 90}deg)`
     document.querySelector(".min").style.transform = `rotate(${minute * 6 - 90}deg)`
     document.querySelector(".sec").style.transform = `rotate(${second * 6 - 90}deg)`

}, 1000);

// sec in 1 sec = 6 deg
    // min in 1 sec  = 0.1deg
    // hour in  1 min   = 0.1deg
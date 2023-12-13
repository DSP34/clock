setInterval(() => {
    d = new Date(); //object of date()
    let hr = d.getHours();
    let minu = d.getMinutes();
    let secu = d.getSeconds();
    console.log(sec);
    let hr_rotation = 30 * hr + minu / 2; 
    let min_rotation = 6 * minu;
    let sec_rotation = 6 * secu;
    let x=258;
    hours.style.transform = `rotate(${hr_rotation}deg)`;
    min.style.transform = `rotate(${min_rotation}deg)`;
    sec.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

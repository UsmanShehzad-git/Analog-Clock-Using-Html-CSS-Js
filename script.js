setInterval(()=>{
    d = new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrotation = 30*htime + mtime/2;  // Calculate the Hour on Clock Using Formula 
    mrotation = 6*mtime;   // Calculate the Minute on Clock Using Formula
    srotation = 6*stime;   // Calculate the Second on Clock Using Formula

    hour.style.transform  = "rotate("+hrotation+"deg)";
    minute.style.transform = "rotate("+mrotation+"deg)";
    second.style.transform = "rotate("+srotation+"deg)";
}, 1000);
setInterval(()=>
{
  d=new Date();
  htime=d.getHours();
  mtime=d.getMinutes();
  stime=d.getSeconds();
  millitime=d.getMilliseconds();
  hrotation=30*htime+mtime/2+stime/120;
  mrotation=6*mtime+stime/10;
  srotation=6*stime;

  hour.style.transform=`rotate(${hrotation}deg)`
  min.style.transform=`rotate(${mrotation}deg)`
  sec.style.transform=`rotate(${srotation}deg)`
},1000)
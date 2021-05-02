const http=require("http");
const fs=require("fs");
var  requests=require("requests");


const homefile =fs.readFileSync("homedelhi.html","UTF-8");

const replaceVal=(temporg,orgval)=>{
  console.log("functioncall");
  let temperature=temporg.replace("{%temp%}",orgval.main.temp);
  temperature=temperature.replace("{%tempmin%}",orgval.main.temp_min);
  temperature=temperature.replace("{%tempmax%}",orgval.main.temp_max);
  temperature=temperature.replace("{%city%}",orgval.name);
  temperature=temperature.replace("{%country%}",orgval.sys.country);
  temperature=temperature.replace("{%status%}",orgval.weather[0].main);
  
  return temperature;

}
const replaceVa=(temporg,orgval)=>{
  console.log("functioncall");
  let temperature=temporg.replace("{%tem%}",orgval.main.temp);
  temperature=temperature.replace("{%tempmi%}",orgval.main.temp_min);
  temperature=temperature.replace("{%tempma%}",orgval.main.temp_max);
  temperature=temperature.replace("{%cit%}",orgval.name);
  temperature=temperature.replace("{%countr%}",orgval.sys.country);
  temperature=temperature.replace("{%statu%}",orgval.weather[0].main);
  
  return temperature;

}


const server=http.createServer((req,res)=>{
 if(req.url=="/")
 {
    
      requests("http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=349c6aa2476cb16f5ee965d90de82e80",)
    .on('data', (chunk) => {
      const obj=JSON.parse(chunk);
      const aa=[obj];
  //console.log(aa);
      const mapp=aa.map((val)=>replaceVal(homefile,val)).join("");
      res.write(mapp);
      })
      .on('end', (err) => {
      if (err) return console.log('connection closed due to errors', err);
 
        console.log('end');
      });
  
    requests("http://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=349c6aa2476cb16f5ee965d90de82e80",)
    .on('data', (chunk) => {
    const ob=JSON.parse(chunk);
    const a=[ob];
    //console.log(aa);
    const ma=a.map((val)=>replaceVal(homefile,val)).join("");
    res.write(ma);
    })
    .on('end', (err) => {
    if (err) return console.log('connection closed due to errors', err);
   
    console.log('end');
  });
  requests("http://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=349c6aa2476cb16f5ee965d90de82e80",)
  .on('data', (chunk) => {
  const ob=JSON.parse(chunk);
  const a=[ob];
  //console.log(aa);
  const ma=a.map((val)=>replaceVal(homefile,val)).join("");
  res.write(ma);
  })
  .on('end', (err) => {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
requests("http://api.openweathermap.org/data/2.5/weather?q=Kolkata  &units=metric&appid=349c6aa2476cb16f5ee965d90de82e80",)
  .on('data', (chunk) => {
  const ob=JSON.parse(chunk);
  const a=[ob];
  //console.log(aa);
  const ma=a.map((val)=>replaceVal(homefile,val)).join("");
  res.write(ma);
  })
  .on('end', (err) => {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
}
    
});
server.listen(8000,"127.0.0.1");

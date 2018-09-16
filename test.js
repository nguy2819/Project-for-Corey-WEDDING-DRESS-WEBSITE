var exec = require('child_process').exec;
var os = require('os');
//control OS
//then run command depengin on the OS

if (os.type() === 'Linux' || os.type() === 'Darwin')
   exec("CI=true npm test", (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr)
  }); 
else if (os.type() === 'Windows_NT') 
   exec("set CI=true&&npm test", (error, stdout, stderr) => {
     console.log(stdout);
     console.log(stderr)
   });
else
   throw new Error("Unsupported OS found: " + os.type());

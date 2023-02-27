const { exec } = require('child_process');

const exeChildProcee = async () => {
    var yourscript = exec('sh hi.sh',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                }
            });
}

const getProcess = async (filename) => {
    var yourscript = exec('ps aux | grep -i ffmpeg',
            (error, stdout, stderr) => {
                console.log(stdout);
                // console.log(stderr);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                }
            });
}



console.log('Starting Process....');
exeChildProcee();
getProcess('');
console.log('Processing.....');

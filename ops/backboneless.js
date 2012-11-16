var exec = require('child_process').exec,
    fs = require('fs'),
    path = require('path');

if(process.argv.length !== 5) {
    console.log('USAGE: backboneless.js DEPENDENCY_FILE_PATH LESS_BASE_PATH OUTOUT_FILENAME');
    console.log('  DEPENDENCY_FILE_PATH - path to a file containing the output of a r.js build');
    console.log('  LESS_BASE_PATH - path to the root of the less files');
    console.log('  OUTPUT_FILENAME - the name of the file to output the concatenated less file to');
    return;
}

var dependencyFilePath = path.resolve(__dirname, process.argv[2]),
    dependencyContent = fs.readFileSync(dependencyFilePath, 'utf-8'),
    viewFilePaths = [],
    lines = dependencyContent.split('\n'),
    viewMatch = /\/views\/.*.js$/,
    i;

for(i=0; i<lines.length; ++i) {
    if(viewMatch.test(lines[i])) {
        viewFilePaths.push(lines[i]);
    }
}

var lessBasePath = path.resolve(__dirname, process.argv[3]);
    lessFilePaths = [];
for(i=0; i<viewFilePaths.length; ++i) {
    lessFilePaths.push(lessBasePath + '/' + viewFilePaths[i].match(/\/([^/]+).js$/)[1] + '.less');
}

var lessOutPath = path.resolve(__dirname, process.argv[4]);
exec(
    'cat ' + lessFilePaths.join(' ') + ' 2>/dev/null > ' + lessOutPath,
    function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    }
);
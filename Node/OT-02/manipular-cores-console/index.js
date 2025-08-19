var clc = require('cli-color');
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require('cli-color');

var msg = clc.xterm(202).bgXterm(236);

console.log(msg('Orange text on dark gray background'));

console.log(clc.green('Mensagem Verde;'));
console.log(clc.red('Mensagem Vermelho;'));
console.log(clc.blue('Mensagem Azul;'));
console.log(clc.yellow('Mensagem Amarelo;'));
console.log(clc.red('red '+clc.blue('blue')+' red'));
console.log(clc.red('red ')+"plain "+clc.blue('blue'));
console.log(clc.red.bgWhite.underline('Underlined red text on white background'));
console.log(clc.red('Text in red'));

console.log(error('Error!'));
console.log(warn('Warning!'));
console.log(notice('Notice!'));

process.stdout.write(
    clc.columns([
        [clc.bold('First name'), clc.bold('Last name'), clc.bold('Age')],
        ['John', 'Doe', 34],
        ['Jane', 'Smith', 25],
        ['Alice', 'Johnson', 28],
    ])
);

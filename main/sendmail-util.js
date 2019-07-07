#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const yargs = require('yargs');
const sendmail = require('sendmail')();

const argv = yargs
    .scriptName('sendmail')
    .option('from', {
        describe: 'from: address',
        requiresArg: true,
        demandOption: true
    })
    .option('to', {
        describe: 'to: address',
        requiresArg: true,
        demandOption: true,
        array: true
    })
    .option('subject', {
        describe: 'subject: line',
        requiresArg: true,
        demandOption: true
    })
    .option('text', {
        describe: 'text: content',
        requiresArg: true
    })
    .option('html', {
        describe: 'html: content',
        requiresArg: true
    })
    .option('attach', {
        describe: 'attach: file',
        requiresArg: true,
        array: true
    })
    .strict()
    .argv;

var options = {from:argv.from, to: argv.to.join(", "), subject:argv.subject};

if( argv.text ) {
    options.text = argv.text;
}
if( argv.html ) {
    options.html = argv.html;
}
if( argv.attach ) {
    options.attachments = [];
    for(var i=0; i<argv.attach.length; i++) {
        var filename = path.basename(argv.attach[i]);
        var content = fs.readFileSync(argv.attach[i]).toString('base64');
        var encoding = 'base64';
        options.attachments.push({filename, content, encoding});
    }
}

const callback = function(err, reply) {
        if( err ) {
            console.error("error: %o", err);
        }
    else {
        console.log("OK!");
        console.log("%o", reply);
    }
};

sendmail(options, callback);

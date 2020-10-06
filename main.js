const fs = require('fs');
// Create directory called fs-try
fs.mkdir('fs-try', (err) => {
    if (err) return console.log(err);
    console.log('I just made a directory using JS.');
})
// - Using fs module:
1 // - create a directory called content using fs method and it should log 'content folder created'
2 // - create a file using fs method called randomText.txt that lives outside the content directory
3 // - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method
4// - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
5// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
// - Now create a separate setTimeout function that after 7 seconds deletes the content directory

fs.mkdir('content', (err) => {
    if (err) return console.log(err);
    console.log('content folder created.');
})

// fs.writeFileSync('randomText.txt', 'this is how I make a new .txt file.');

fs.writeFile('randomText.txt', 'this is how I make a new .txt file.', (err) => {
    if (err) throw err;
    console.log('randomText.txt was created.');
}); 

fs.writeFile('./content/verbage.txt', 'randomText.txt', (err) => {
    fs.copyFile('randomText.txt', './content/verbage.txt', (err) => {
        if (err) throw err;
        console.log('I know how to copy data.');
    });
}); 

fs.rmdir('content', { recursive: true }, (err) => {
    if (err) return console.log(err);
    setTimeout(() => fs.unlinkSync('content'), 7000)
})

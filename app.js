console.log('Starting app.js ..');

const fs = require('fs');
//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');




// Input with Yargs for passing arguments
// var command = process.argv[2];
// const argv = yargs.argv;


const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
	title: titleOptions,
	body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
	title: titleOptions,
})
.command('remove', 'Remove a note', {
	title: titleOptions
})
.help()
.argv;

var command = argv._[0];


console.log('Command:', command);
// console.log('Process:', process.argv);
console.log('Yargs', argv);

if (command === 'add') {

	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Note title taken');
	}

} else if (command === 'list') {

	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}

} else if (command === 'remove') {
	
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);

} else {
	console.log('Command not recognized');
}


/*if (command === 'add') {
	console.log('Adding new note');
} else if (command === 'list') {
	console.log('Listing all notes');
} else if (command === 'read') {
	console.log('Reading note');
} else if (command === 'remove') {
	console.log('Removing note');
} else {
	console.log('Command not recognized');	
}*/


/*
console.log('******************');
var res = notes.addNote();
console.log(res);

console.log('Result:', notes.add(9, -2));


console.log('******** Lodash package **********');
console.log(_.isString(true));
console.log(_.isString('Andrew'));

var filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4, 5, 6]);
console.log(filteredArray);
*/


// var user = os.userInfo();
// console.log(user);


// fs.appendFile('greetings.txt', 'Hello World!');
// fs.appendFile('greetings.txt', 'Hello '+ user.username +'!');
// fs.appendFile('greetings.txt', `Hello my ${user.username}!`);

// fs.appendFile('greetings.txt', `Hello my ${user.username}!`, (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

/*
fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age} years old!`, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
*/


// 3.1
const greet = () => {
	console.log("Hello there!");
}

const sum = (a, b, c) => {
	return a + b + c;
}

// greet();
// let result = sum(1, 2, 3);
// console.log(result);
// END OF 3.1

// 3.2
const names = ["Lily", "Aurelius", "Peter"];

function longestName(names) {
	let longest = 0;

	for (let i = 0; i < names.length; i++) {
		if (names[i].length > longest) {
			longest = names[i].length;
		}
	}

	return longest;
}

// console.log(longestName(names));
// END OF 3.2

// 3.3
function randomGreeting() {
	let randomInt = Math.round(Math.random());

	console.log(randomInt ? "Good morning" : "Good evening");
}

// randomGreeting();
// END OF 3.3

// 3.4
function randBetween(min, max) {
	let randInt = Math.floor(Math.random() * (max - min + 1)) + min;

	console.log("The number is " + (randInt % 2 === 0 ? "even" : "odd"));
	return randInt;
}

// console.log(randBetween(1, 6));
// END OF 3.4

// 3.5
function randArrayElement(array) {
	let randIndex = Math.floor(Math.random() * array.length);
	console.log(array[randIndex]);
}

// randArrayElement([10, 20, 30, 40, 50, 60]);
// END OF 3.5

// 3.6
const southamericans = ["Pele", "Maradona", "Messi"];
const europeans = ["Baggio", "Zidane", "Litmanen"];

const footballers = [...southamericans, ...europeans];

//console.log(footballers);
// END OF 3.6

// 3.7
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
[x, y] = array;
// console.log(x);
// console.log(y);

[x, dummy, y] = array;
// console.log(x);
// console.log(y);

[dummy, dummy, dummy, dummy, ...rest] = array;
// console.log(rest);
// END OF 3.7

// 3.8
const person1 = {
	name: "Vilja",
	lastName: "Pelto",
};

const person2 = {
	name: "Miina",
	lastName: "Kenttä",
};

const people = [];
people.push(person1, person2);

// people.map(value => console.log(`Good evening, ${value.name}`));
// END OF 3.8

// 3.9
const names2 = ["Vivian", "Jaakko", "Maija"];

const people2 = names2.map(value => ({name: value, lastname: 'Whatever', age: 21}));

// console.log(people2);
// END OF 3.9

// 3.10
const fetchData = async () => {
	console.log("Start fetching...");
	await new Promise((r) => setTimeout(r, 2000));
	console.log("Data received!");
};

console.log("Let's get some data from the internet!");
fetchData().then(value => {
	console.log("Let's use the data we fetched!");
});

// END OF 3.10

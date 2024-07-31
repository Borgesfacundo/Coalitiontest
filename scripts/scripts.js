// The username and password
// DO NOT store credentials in your JS file like this
let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

// Authenticate (dummy API)
fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
	headers: {
		'Authorization': `Basic ${auth}`
	}
}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw response;
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.warn(error);
});
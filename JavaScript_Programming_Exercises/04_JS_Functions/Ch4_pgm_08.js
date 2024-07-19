// Displaying a menu

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(3) Delete item"); // Step 1
	console.log("(4) View settings"); // Step 1
	console.log("(9) Quit");
};

displayMenu();

// Step 2: Create your own displayMyMenu function
var displayMyMenu = function () {
	console.log("Welcome to My Custom Dashboard:");
	console.log("(1) View Profile");
	console.log("(2) Edit Settings");
	console.log("(3) Check Notifications");
	console.log("(4) Manage Subscriptions");
	console.log("(5) Log Out");
};

// Step 3: Call your function and run the program
displayMyMenu();

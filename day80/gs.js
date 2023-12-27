class User {
    constructor(name) {
        this._name = name; // Use a different name for the property to avoid conflicts
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John"); // Corrected the name to "John"
console.log(user.name);

// user.name = "Tom"; // This will set the name since the length is not less than 4
// console.log(user.name);

user.name = ""; // This will trigger the condition and print the error message
user.name = "aryan";
console.log(user.name)
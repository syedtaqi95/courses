import { isValidEmail, isAllLetters } from "./validator.js";

const user = {
	firstName: "John",
	lastName: "Doe",
	username: "johndoe",
	age: 42,
	email: "john@doe.com",
};

const userProxy = new Proxy(user, {
	set(target, prop, value) {
		if (prop === "username" && (!isAllLetters(value) || value.length < 3)) {
			throw new Error(
				`Username '${value}' must be an alphabetical string with a min length of 3`,
			);
		} else if (prop === "email" && !isValidEmail(value)) {
			throw new Error(`Email '${value}' must be a valid email address`);
		} else if (prop === "age" && (typeof value !== "number" || value < 18)) {
			throw new Error(`Age '${value}' must be a number over 18`);
		}
		return Reflect.set(target, prop, value);
	},

	get(target, prop) {
		console.log(
			`${new Date()} | The value of ${prop}} is ${Reflect.get(target, prop)}`,
		);
		return Reflect.get(...arguments);
	},
});

userProxy.username;
userProxy.username = "newusername";
userProxy.username;

userProxy.email;
userProxy.email = "new@emailaddress.com";
userProxy.email;

userProxy.age;
userProxy.age = 19;
userProxy.age;

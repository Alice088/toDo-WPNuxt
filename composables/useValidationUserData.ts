function isValidData(data: string | null, maxLength: number, minLength: number, typeData: "password" | "nickname" | "email") {
	if(!data) {
		return {result: false, message: "input is empty"};
	}
	else if(data.length > maxLength)  {
		return { result: false, message: `Length of ${typeData} too long!` };
	}
	else if (data.length < minLength)  {
		return { result: false, message: `Length of ${typeData} too short!` };
	}

	return { result: true, message: null };
}

function isValidEmail(email: string | null, maxLength: number, minLength: number) {
	if(!email) {
		return {result: false, message: "input is empty"};
	}
	else if(email.includes("@")) {
		return isValidData(email, maxLength, minLength, "email");
	}
	else {
		return { result: false, message: "Email don't includes '@'!" };
	}
}


function useValidationUserData (password: string | null, email: string | null) {
	return {
		password: isValidData(password, 20, 10, "password"),
		email: isValidEmail(email, 50, 5),
	};
}

export { isValidData, isValidEmail, useValidationUserData };
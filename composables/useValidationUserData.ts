function isValidData(data: string | null, maxLength: number, minLength: number, typeData: "password" | "nickname" | "email") {
	if(!data) {
		return { result: false, message: "input is empty" };
	}
	else if(data.length > maxLength)  {
		return { result: false, message: `Length of ${typeData} too long!` };
	}
	else if (data.length < minLength)  {
		return { result: false, message: `Length of ${typeData} too short!` };
	}

	return { result: true, message: "Great!" };
}

function isValidEmail(email: string | null, maxLength: number, minLength: number) {
	if(!email) {
		return { result: false, message: "input is empty" };
	}
	else if(email.includes("@")) {
		return isValidData(email, maxLength, minLength, "email");
	}
	else {
		return { result: false, message: "Email don't includes '@'!" };
	}
}


function useValidationUserData (nickname: string | null, password: string | null, email: string | null) {
	let isValid = true;
	
	const validData = {
		nickname: isValidData(nickname, 20, 10, "nickname"),
		password: isValidData(password, 20, 10, "password"),
		email: isValidEmail(email, 50, 5),
	};

	for(const boolean of Object.values(validData)) {
		if (!boolean.result) isValid = false;
	}
	
	return isValid;
}

export { isValidData, isValidEmail, useValidationUserData };
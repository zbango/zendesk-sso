class Code {
	encrypt_your_message(key, message) {
		let _key = key;
		if (message == null || message == undefined || message == "") return "";
		if (_key == null || _key == undefined || _key == "") _key = "DCJ";

		let vowels = /[aeiouAEIOU]/gi;
		let response = "";
		for (var i = 0; i < message.length; i++) {
			const letter = message.charAt(i);

			if (letter.match(vowels)) {
				response += _key + letter;
			} else {
				response += letter;
			}
		}

		return response;
	}

    track_my_time(key, message) {
		let _key = key;
		if (message == null || message == undefined || message == "") return "";
		if (_key == null || _key == undefined || _key == "") _key = "DCJ";

		let vowels = /[aeiouAEIOU]/gi;
		let response = "";
		for (var i = 0; i < message.length; i++) {
			const letter = message.charAt(i);

			if (letter.match(vowels)) {
				response += _key + letter;
			} else {
				response += letter;
			}
		}

		return response;
	}
}
//65647440
//199644521
const code = new Code();
console.log(code.encrypt_your_message("dcj", "I love prOgrAmming!"));

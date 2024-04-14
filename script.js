function toCase(text) {
  // write your code here
	if (text === "") return "-"; // handle empty string

  const lowerCaseText = text.toLowerCase();
  const upperCaseText = text.toUpperCase();

  return lowerCaseText + "-" + upperCaseText;

}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

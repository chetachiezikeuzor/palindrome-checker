document.getElementById("inputButton").addEventListener("click", function () {
  var text = document.getElementById("textInput").value;
  // this is to replace all spaces and special characters in the input string
  var strChange = text
    .replace(/ /g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  // this is to split the string into single strings.
  var splitTheString = strChange.split("");

  // this is to reverse these single strings
  var reverseTheArray = splitTheString.reverse();

  // this is to join the reversal back together.
  var joinTheArray = reverseTheArray.join("");

  // boolean to see if the changed string is the same as the reversal
  var results = document.getElementById("checker");
  if (strChange === joinTheArray) {
    results.innerHTML = `<text>🥳 <em style="color: #ff85ff">"${text}"</em> is a palindrome</text>`;
  } else if (strChange !== joinTheArray) {
    results.innerHTML = `<text>🥸 <em style="color: #ff85ff">"${text}"</em> is not a palindrome</text?`;
  } else {
    results.innerHTML = `😵‍💫 Something went wrong`;
  }
});

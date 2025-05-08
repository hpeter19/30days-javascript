const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
//inputing escape characters to ensure that the quotes are part of the text
const browserType = "mozilla";
browserType.length;
//FINDING THE LENGTH OF A STRING 
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
//finding a substring  of a sttring
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
//checking wether a strings starts with a substring
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
//REPLACING THE SUBSTRING INSIDE A STRING

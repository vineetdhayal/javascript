var name = "Puneet";

function Engineer() {
	this.name = "Yomesh";
}

console.log(new Engineer().name);
Engineer.prototype.name = "Saloni";
Engineer.prototype.channel = "https://bit.ly/devtools-yt";
console.log(new Engineer().channel);
console.log(new Engineer().name);


// Answer would be Option 3. Final object would look like

// {
//   name: "Yomesh",
//   __proto__: {
//     name: "Saloni",
//     channel: "https://bit.ly/devtools-yt"
//   }
// }
// While searching for property name, first look up would be on the direct enumerable properties of the object and since that exists (this.name = "Yomesh"), it would be printed. If no direct property is present then Prototype chain is traversed and in that case value would be Saloni. In case of channel property, Prototype chain is traversed and value is printed.
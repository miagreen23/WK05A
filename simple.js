
const pathfunctions = require("path");

let myName = "Mia";

let getfile = pathfunctions.basename(__filename);

const pathtostatic = pathfunctions.join(__dirname, "assets");

console.log(pathtostatic);
console.log(getfile);
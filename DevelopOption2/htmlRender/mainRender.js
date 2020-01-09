const managerCard = require("./managerCard")
const internCard = require("./internCard")
const engineerCard = require("./engineerCard")
// create a function that holds the html that will output the main body of the html and will take in the data from the other cards
function mainRender(data){
   return `
// header and body for html



`



// export mainRender
module.exports = mainRender;

${data.join("")}
//Javascripts 02 for Node.js Lessons.
//.by Krishan Naidoo
//Run the node command "node Scripts_03_Node.js", that will import this scripts into const scripts2 of Scripts_03_Node.js.
//lession on how to export functions using node ver 8 higher using modules.
//ES8 allows export and import but node 8 does not support this new feature.

const largeNumber = 356;

//The below will not work
//export default largeNumber;


//use this instead.
module.exports = {
	largeNumber: largeNumber
};
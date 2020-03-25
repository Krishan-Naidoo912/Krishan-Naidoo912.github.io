//Krishan Practice JavaScript exercises

const string = 
'abc,def,ghi jkl,mno,pqr stu,vwx,yz';

const parseCSV = (string) => 
	string.split('\n').map(row => row.split(','))

console.log(parseCSV(string))
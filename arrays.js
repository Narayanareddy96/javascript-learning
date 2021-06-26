// Array can be choosen when we want in ordered data 
//  examples 
let name = ["narayana","reddy","g"];
let values = [true,{},[],99,"Awesome"];
// different actions insert,removel,search,access
// list of well know array functions
name.push("new element at the end");
name.pop("remove element at the end");
name.shift("remove element at the biggenning");
name.unshift("adding element at the biggerrring");
name.concat(values) // concat two arrays 
name.slice("1,3")// ["reddy","g"]
name.splice(2,0,["add","at","secoudindex"])//splice(wheretostart,removenumberofelements,insert elements)
name.sort()// it will soft the numbered array, not good for strings 
name.forEach(element => {
    
});
name.map(()=>{})
name.filter(()=>{})
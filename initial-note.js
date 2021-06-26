// this is running notes to track my leaning on advanced concepts
// summing the n th number from Zero 
function addNumber_old(n){
    var total = 0;
    for(var i=0;i<=n;i++){
        total +=i;
    }
    return total;
}
// same function with Math logic 
function addNumbers_new(n){
    return n * (n + 1)/2;
}
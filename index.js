function add(a,b){
return a+b;
}
function subtract(a,b){
return a-b;
}
function multiply(){
return a*b;
}
function divide(){
return a*b;
}
function add (a, b){
let sum =a;
sum +=b;
return sum;
}
function subtract(a,b){
let sub=a;
sub-=b;
return sub;
}
function multiply(a,b){
let multi=a;
multi*=b;
return multi;
}
function divide(a,b){
let dividen=a;
dividen/=b;
return dividen;
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
  n--;
    return n--;
}
function makeInt(n){
let parsedInt = parseInt(n, 10)

if (parsedInt == NaN) {
    return NaN
}
else {
    return parsedInt
}
}
function preserveDecimal(n){
let parsedFloat = parseFloat(n,2.222)
if (parsedFloat == NaN){
    return Nan
}
else {
    return parsedFloat
}
}
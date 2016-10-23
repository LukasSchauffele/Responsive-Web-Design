
//convert a church number to a javascript number
function convert(church_number) {
	return church_number(n => n + 1)(0);
}

var one = function(f) { return function(x) { return f(x); }; }

var one = f => x => f(x);

var two = f => x => f(f(x));

//return the next church number after n
/*var succ = function(n) {
	return f => x => n(f)(f(x));
}*/

var succ = n => f => x =>  n(f)(f(x));

var three = succ(two);

var four = succ(three); //f(f(f(f(x))))

var four_again = f => x => f(f(f(f(x))));

function compose(f,g) {
	return x => f(g(x));
}

var plus = function(n,m) {
	return f => compose(n(f), m(f));
}

var mult = function(n,m) {
	return compose(n,m);
}

function exp(n,m) {
	return m(n);
}

function factorial(n) {
	
}

var eight = plus(four,four)
var sixtyfour = mult(eight,eight);

var nine = exp(three,two);
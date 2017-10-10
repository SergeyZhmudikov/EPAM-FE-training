var a = "1" + 2 + 0; //"1" - string, and other operands with summ operation transform to string. Result 120.
alert(a);

var b = "1" - 1 + 2;
alert(b); // "1" string transform to number, because subtraction transform string to number. Result 2

var c = true + false;
alert(c); // true is 1, false is 0. 1+0=1

var d = 10 / "5";
alert(d); // "5" string transform to number, and result is 2.

var e = "2" * "3";
alert(e); // Result is 6, Strings transform to numbers.

var f = 4 + 5 + "px";
alert(f); // Result 9px, 4+5=9 and summ of number with string is string with 9px.

var g = "$" + 4 + 5;
alert(g); //result is "$45", summ of  string with number is string. 

var h = "42" - 2;
alert(h); // Result is 40, string transform to numbers.

var i = "4px" - 2;
alert(i); //Result is NaN, "4px" transform to NaN, NaN-2=NaN 

var j = 7 / 0;
alert(j); // Result is Infinity, Devision number to zero is infinity.

var k = "  -9\n" + 5;
alert(k); // Result is "-9" in the first line and "5" in the second line. /n is operator for transfer to the new line.

var l = "  -9\n" - 5;
alert(l); // Result is -14, because operation string convert to number.

var m = 5 && 2;
alert(m); //AND. Result is 2, because last true value is 2.

var n = 2 && 5;
alert(n); //AND.Result is 5, because last true value is 5.

var o = 5 || 0;
alert(o); // OR. Result is 5, because first true value is 5.

var p = 0 || 5;
alert(p); // OR. Result is 5, because first true value is 5.

var q = null + 1;
alert(q); //Result is 1, because null transform to number.

var r = undefined + 1;
alert(r); // Result is NaN, cause undefined transform to NaN when there is a summ with numbers.

var s = null == "\n0\n";
alert(s); // Result is False, because null is not equal with string.

var t = +null == +"\n0\n";
alert(t); // Result True, +null is a number = 0, and +"\n0\n" is 0, 0==0.
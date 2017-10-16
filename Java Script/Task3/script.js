function saveArgs() {
    var argsArray = [];

    return function() {
        if (arguments.length === 0) {
            return argsArray;
        } else {
            for (var i = 0; i < arguments.length; i++)
                argsArray.push(arguments[i]);
        }
    }
}

var saveFnc = saveArgs();
saveFnc(6, "JS");
saveFnc(99, { a: 78 }, 789);
console.log(saveFnc());
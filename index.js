function receivesAFunction(callback) {
    return callback ();
}

function returnsANamedFunction(){
    function namedFunction(){
        return '';
    }
return namedFunction;
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function () {
    console.log('Completed');
}
}

function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const NamedFunction = () => console.log('Named Function');
    
    return NamedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){};
}
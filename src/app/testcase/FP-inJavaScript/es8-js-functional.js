export const once2 = (fn) => {
    let done = false;
    return function () {
        return done ? undefined : ((done = true), fn.apply(this, arguments))
    }
}

export const once = (fn, arg) => {
    let done = false;
    return function () {
        return done ? () => { } : ((done = true), fn.call(this, arg))
    }
}

export const tap = (value) => { (fn) => (typeof (fn) === 'function' && fn(value), console.log(value)) }

export const memoized = (fn) => {
    const lookupTable = {};
    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
}


export const compose = (a, b) => (c) => b(a(c))

export const addCurried = x => y => x + y;


/**
 * 
 * This is a general binary curry function.
 */
export const curry = (binaryFn) => {
    return function (firstArg) {
        return function (secondArg) {
            return binaryFn(firstArg, secondArg);
        };
    };
};


export const reduce = (array, fn, initialValue) => {
    let accumlator;
    if (initialValue != undefined)
        accumlator = initialValue;
    else
        accumlator = array[0];
    if (initialValue === undefined)
        for (let i = 1; i < array.length; i++)
            accumlator = fn(accumlator, array[i])
    else
        for (const value of array)
            accumlator = fn(accumlator, value)
    return [accumlator]
}

export const pipe = (...fns) =>
    (value) => reduce(fns, (acc, fn) => fn(acc), value);
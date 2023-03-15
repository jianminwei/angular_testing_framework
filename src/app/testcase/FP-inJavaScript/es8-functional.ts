import { MessageService } from "src/app/message.service"

/**
 * 
 * With TypeScript files, you don't have to define a class or interface. A file
 * can simply contains constant or functions.
 */
export const forEach = (array: any[], fn: (arg0: any) => void) => {
    for (let i = 0; i < array.length; i++)
        fn(array[i])
}

export const forEachObject = (obj: any, fn: (arg0: string, arg1: any) => void) => {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            fn(property, obj[property])
        }
    }
}

export const unless = (predicate: any, fn: () => void) => {
    if (!predicate)
        fn()
}


export const times = (times: number, fn: (arg0: number) => void) => {
    for (var i = 0; i < times; i++)
        fn(i);
}

export const every = (arr: any[], fn: (arg0: any) => boolean) => {
    let result = true;
    for (const value of arr)
        result = result && fn(value)
    return result
}


export const some = (arr: any[], fn: (arg0: any) => boolean) => {
    for (const value of arr) {
        if (fn(value)) return true
    }
    return false;
}


/**
 * 
 * Note I n JavaScript, (exp1,exp2) means it will execute the two
 * arguments and return the result of the second expression, which is
 * exp2. In our following example, the syntax will call the function fn
 * and also print the value to the console.
 */
export const tap = (value: any) =>
    (fn: (arg0: any) => any) => (typeof (fn) === 'function' && fn(value), console.log(value))

export const unary = (fn: any) => fn.length === 1 ? fn : (arg: any) => fn(arg)


// export const once = (fn:any) => {
//     let done = false;
//     return function () {
//         return done ? undefined : ((done = true), fn.apply(this:any, arguments))
//     }
// }


// const memoized = (fn) => {
//     const lookupTable = {};
//     return (arg) => lookupTable[arg] || (lookupTable[arg] =
//         fn(arg));
// }
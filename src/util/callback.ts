/**
 * @description Basic callback utility.
 * @param {Function} func Conditional function that will be called, the return value will be passed to the returnFunc function.
 * @param {Function} returnFunc Function that will be called with the return value of the conditional function. 
 * @returns {void}
 */
function callback(func: Function, returnFunc: Function): void
{
    const result: any = func();

    // deconstruct our result if it is an array
    if(Array.isArray(result))
    {
        returnFunc(...result);
        return;
    }

    if(returnFunc !== null && result !== undefined)
        returnFunc(result);
}

export default callback;
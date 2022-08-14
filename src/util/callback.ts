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
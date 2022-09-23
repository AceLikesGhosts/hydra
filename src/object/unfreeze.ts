function unfreeze(obj: Record<string, unknown>): Record<string, unknown>
{
    if(Object.isFrozen(obj))
    {
        return Object.assign({}, obj);
    }
    return obj;
}

export default unfreeze;
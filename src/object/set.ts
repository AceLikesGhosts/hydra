import constants from '../util/constants';

function set(key: string, value: any)
{
    let obj: Object | null = constants.OBJECT || null;

    if(!obj)
    {
        constants.OBJECT = {};
        obj = constants.OBJECT;
    }

    const newObj = Object.assign({}, obj, {
        [key]: value
    });

    constants.OBJECT = newObj;
}

export default set;
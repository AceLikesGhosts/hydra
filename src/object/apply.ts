import constants from '../util/constants';

/**
 * @description Changes the base object to the new object, with all {@see set} and {@see value} calls being made to the new object.
 */
function apply(): void
{
    const obj: Object | null = constants.OBJECT || null;

    if(!obj)
        return;

    constants._OBJ = obj;
}

export default apply;
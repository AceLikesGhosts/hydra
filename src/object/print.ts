import constants from '../util/constants';

function print(): void
{
    const obj: Object | null = constants.OBJECT || constants._OBJ;

    if(obj === null)
        throw new Error('Cannot print an object which we don\'t have.');


    let objLines: String | null = '';

    for(const line in obj)
    {
        objLines += line;
    }

    const bracket = constants.leftBracket;

    bracket[6] = bracket[6] + '            ' + objLines;

    for(let i: number = 0; i < bracket.length; i++)
    {
        console.log(bracket[i]);
    }
}

export default print;
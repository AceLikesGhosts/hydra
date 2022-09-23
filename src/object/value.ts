import constants from '../constants';

function value(): Record<string, unknown>
{
    return constants.wrappedObj as Record<string, unknown>;
}

export default value;
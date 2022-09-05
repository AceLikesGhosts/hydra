/**
 * Constants for hydra. 
 * I swear to god if someone
 * tries to change these, I will
 * hunt them down and kill them.
 * 
 * I will personally gut
 * them like a fish.
 * 
 * Then I will
 * t-bag their corpse.
 */
const constants = {
    _OBJ: null as Object | null,
    OBJECT: null as Object | null,

    leftBracket: generateLeft(),
    rightBracket: generateRight()
};

function generateLeft(): String[]
{
    const line1 = '   .-.          ';
    const line2 = '  /  . \\         ';
    const line3 = '  | .(___)       ';
    const line4 = '  | |  ';
    const line5 = '  | |  ';
    const line6 = '  | |  ';
    const line7 = '  | |  ';
    const line8 = '  | |  ';
    const line9 = '  | ` ___     ';
    const line10 = '  ` `(   )    ';
    const line11 = '   `.__.`    ';

    const newTh: String[] = [];

    newTh.push(line1);
    newTh.push(line2);
    newTh.push(line3);
    newTh.push(line4);
    newTh.push(line5);
    newTh.push(line6);
    newTh.push(line7);
    newTh.push(line8);
    newTh.push(line9);
    newTh.push(line10);
    newTh.push(line11);

    return newTh;
}

function generateRight(): string
{
    return `
         
 .-.  
/ .  \\ 
(___). | 
| | 
| | 
| | 
| | 
| | 
___ ' | 
(   )' ' 
'.__.'  
                         
    `;
}

export default constants;
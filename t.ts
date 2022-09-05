import hydra, { IExport } from './src';


const n = (hydra() as IExport).create();
n.set('1', '2');
n.set('3', '4');
n.set('string', 'a very very very very long string oh my god thats crazy')
n.print();
// Export everything.
import hydra from './hydra/hydra';
import { Queue, IQueue, ILinkedList, LinkedList, Node, Stack, IStack } from './structures';
import type { HydraObject, HydraReturn } from './types/hydraReturns';

export default hydra;
export
{
    Queue,
    IQueue,
    LinkedList,
    ILinkedList,
    Node,
    Stack,
    IStack,
};
export type {
    HydraObject,
    HydraReturn
};
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory("@@counter");
export const counterInc = actionCreator<{by: number}>('INC');
export const counterDec = actionCreator<{by: number}>('DEC');
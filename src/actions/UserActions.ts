import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
export const userSetFirstname = actionCreator<{firstname: string}>('@@user/SET_FIRSTNAME');
export const userSetLastname = actionCreator<{lastname: string}>('@@user/SET_LASTNAME');
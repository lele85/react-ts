import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory("@@user");
export const userSetFirstname = actionCreator<{firstname: string}>('SET_FIRSTNAME');
export const userSetLastname = actionCreator<{lastname: string}>('SET_LASTNAME');
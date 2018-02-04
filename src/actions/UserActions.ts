import { OtherAction } from "./OtherActions";

interface UserActionSetName {
	type: UserActionKeys.SET_NAME,
	name: string
};

interface UserActionSetSurname {
	type: UserActionKeys.SET_SURNAME,
	surname: string
};

export enum UserActionKeys {
	SET_NAME = "@@user/SET_NAME",
	SET_SURNAME = "@@user/SET_SURNAME"
};

export type UserActionTypes =
	| UserActionSetName
	| UserActionSetSurname
    | OtherAction;

export const userSetFirstname = (name:string): UserActionTypes => {
    return {type:UserActionKeys.SET_NAME, name: name};
}

export const userSetLastname = (surname:string): UserActionTypes => {
    return {type:UserActionKeys.SET_SURNAME, surname: surname};
}
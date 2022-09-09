import { atom } from "recoil";

import type {UserType} from '../../types/User/types';

export const userState = atom<UserType>({
 key: 'user',
 default:  {
  name: "",
  email: ""
 }
})
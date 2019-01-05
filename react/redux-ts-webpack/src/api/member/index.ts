import { MemberEntity } from '../../model';
import { members } from './mockData';

//typescript 确保数据的安全性
// 使fetchMembers在生命周期之中可以 thenable 的函数
// :Promise是约束函数的类型是Promise,<MemberEntity[]>里面约束数据的类型
const fetchMembers = ():Promise<MemberEntity[]> => {
  return Promise.resolve(members);
}

export const memberAPI = {
  fetchMembers
}
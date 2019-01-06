import { MemberEntity } from '../../model';
import { members } from './mockData';

// 组件划分的力度，可以细一点，如循环：每个都单独做一个组件
// 函数式组件，<Prop>({member})

const baseURL = 'https://api.github.com/orgs/lemoncode';

//typescript 确保数据的安全性
// 使fetchMembers在生命周期之中可以 thenable 的函数
// :Promise是约束函数的类型是Promise,<MemberEntity[]>里面约束数据的类型
const fetchMembers = ():Promise<MemberEntity[]> => {
  return Promise.resolve(members);
}

const fetchMembersAsync = ():Promise<MemberEntity[]> => {
  const membersURL = `${baseURL}/members`;
  return fetch(membersURL)
    .then(response => response.json())
    .then(mapToMembers);
}
// 请求来的数据是any类型的，然后把any类型转化成MemberEntity类型
const mapToMembers = (githubMembers: any[]):MemberEntity[] => {
  return githubMembers.map(mapToMember);
}
const mapToMember = (githubMember):MemberEntity => {
  return {
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url
  }
}

const saveMember = (member: MemberEntity):Promise<boolean> => {
  return Promise.resolve(true);
}

export const memberAPI = {
  fetchMembers,
  fetchMembersAsync,
  saveMember
}
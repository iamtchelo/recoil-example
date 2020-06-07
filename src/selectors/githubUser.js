import {selector} from 'recoil';
import {username} from '../atoms';
import {github} from '../services';

const githubUser = selector({
  key: 'githubUser',
  get: async ({get}) => {
    const githubUsername = get(username);

    if (!githubUsername) return null;

    const user = await github().fetchUser(githubUsername);

    return user;
  },
});

export {githubUser};

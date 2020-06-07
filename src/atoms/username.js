import {atom} from 'recoil';

const username = atom({
  key: 'username',
  default: null,
});

export {username};

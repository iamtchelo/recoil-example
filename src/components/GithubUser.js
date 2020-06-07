import React from 'react';
import {useRecoilValue} from 'recoil';
import {githubUser} from '../selectors';

const GithubUser = () => {
  const user = useRecoilValue(githubUser);

  if (!user) return null;
  if (user.message === 'Not Found') {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h3>{user.name}</h3>
      <img src={user.avatar_url} width={200} height={200} alt={user.name} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export {GithubUser};

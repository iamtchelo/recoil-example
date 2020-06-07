import React, {Suspense} from 'react';
import {SearchUser, GithubUser} from './components';

const App = () => (
  <>
    <SearchUser />
    <Suspense fallback={<div>Fetching user data...</div>}>
      <GithubUser />
    </Suspense>
  </>
);

export {App};

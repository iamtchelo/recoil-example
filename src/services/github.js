const github = () => {
  const GITHUB_URL_API = 'https://api.github.com';

  const fetchUser = async (username) => {
    const response = await fetch(`${GITHUB_URL_API}/users/${username}`);
    const user = response.json();

    return user;
  };

  return {fetchUser};
};

export {github};

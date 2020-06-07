import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {username} from '../atoms';

const SearchUser = () => {
  const [inputValue, setInputValue] = useState('');
  const setUsername = useSetRecoilState(username);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const search = () => {
    setUsername(inputValue);
  };

  const clear = () => {
    setUsername(null);
    setInputValue('');
  };

  return (
    <div>
      <label>Search for Github users</label>
      <br />
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={search}>Search</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export {SearchUser};

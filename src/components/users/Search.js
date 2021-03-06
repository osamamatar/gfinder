import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alertContext.setAlert("please enter some thing", "danger");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form card bg-light  '>
        <input
          type='text'
          placeholder='search for Github users.....'
          name='text'
          value={text}
          onChange={onChange}
        />
        <div className='grid-2'>
          <input
            type='submit'
            value='search'
            className='btn btn-dark  btn-sm '
          />
          {githubContext.users.length > 0 && (
            <input
              type='button'
              className='btn  btn-danger'
              onClick={githubContext.clearUsers}
              value='clear'
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;

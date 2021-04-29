import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p>{repo.description}</p>
      {repo.language && (
        <>
          <storage> language : </storage>
          {repo.language}
        </>
      )}
    </div>
  );
};

export default RepoItem;

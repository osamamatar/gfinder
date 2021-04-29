import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";
const User = (props) => {
  const githubContxt = useContext(GithubContext);
  useEffect(() => {
    githubContxt.getUser(props.match.params.login);
    githubContxt.getUserRepos(props.match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    bio,
    login,
    company,
    followers,
    following,
    blog,
    location,
    html_url,
    public_repos,
    public_gists,
    hireable,
  } = githubContxt.user;
  const { loading } = githubContxt.loading;
  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-danger '>
        back
      </Link>
      <strong> Hireable :{"   "}</strong>
      {hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-times-circle text-danger'></i>
      )}
      <div className='card grid-2 bg-light'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt={name}
            className='roun-img'
            style={{ width: "150px" }}
          />
          <h3>{name}</h3>
          <p>
            <strong>location :</strong> {location}
          </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1 btn-block'>
            visit Github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong> username :</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong> website :</strong>
                  {blog}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong> company :</strong>
                  {company}
                </Fragment>
              )}
            </li>
          </ul>
          <div className='card text-center'>
            <div className='badge badge-primary'>
              <strong>Followers: </strong> {followers}
            </div>
            <div className='badge badge-success'>
              <strong>Following: </strong> {following}
            </div>
            <div className='badge badge-danger'>
              <strong>Public repos: </strong> {public_repos}
            </div>
            <div className='badge badge-dark'>
              <strong>Public gists: </strong> {public_gists}
            </div>
          </div>
        </div>
      </div>

      <Repos />
    </Fragment>
  );
};

export default User;

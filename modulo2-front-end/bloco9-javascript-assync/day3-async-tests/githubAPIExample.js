const fetch = require('node-fetch');

const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

const getGitHubUserInfos  = async (username) => {
  const url = getUserReposUrl(username);
  
  const response = await fetch(url);
  const data = await response.json();
  
  const { name, company, twitter_username: twitter, bio, location } = data;
  
  return {
    name,
    company,
    twitter,
    bio,
    location,
  };
};

console.log(getUserReposUrl('gfpoliva'));

getGitHubUserInfos('gfpoliva')
  .then((data) => console.log(data));

module.exports = {
  getGitHubUserInfos,
  getUserReposUrl,
};
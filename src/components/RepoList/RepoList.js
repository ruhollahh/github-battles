import React from 'react';
import PropTypes from 'prop-types';
import { fetchRepos } from '../../utils/api';
import { RepoCard } from '../RepoCard';
import './RepoList.styles.css';

export const RepoList = ({ selectedLanguage }) => {
  const [repos, setRepos] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!repos.hasOwnProperty(selectedLanguage)) {
      setIsLoading(true);
      fetchRepos(selectedLanguage).then((data) => {
        setRepos(prevRepos => ({...prevRepos, [selectedLanguage]: data}));
        setIsLoading(false);
      });
    }
  }, [selectedLanguage]);

  if (isLoading) {
    return 'Loading Repos...';
  }
  return (
    <ul className="repo-list">
      {
        repos[selectedLanguage]?.map((repo, index) => {
          const { forks, open_issues: openIssues, owner: {login: username, avatar_url: image, html_url: usernameUrl}, stargazers_count: stars, html_url: repoUrl } = repo;
          const repoProps = { forks, openIssues, username, usernameUrl, image, stars, repoUrl, rank: index + 1 };
          return <RepoCard key={repo.id} {...repoProps} />  
        })
      }
    </ul>
  );
};

RepoList.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};

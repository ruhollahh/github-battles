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

          return <RepoCard key={repo.id} repo={repo} rank={index + 1} />
        })
      }
    </ul>
  );
};

RepoList.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};

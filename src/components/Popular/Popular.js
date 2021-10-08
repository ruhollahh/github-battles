import React from 'react';
import { Navbar } from '../Navbar'
import { RepoList } from '../RepoList';


export const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('All');
  return (
    <React.Fragment>
      <Navbar
        selectedLanguage={selectedLanguage}
        onSelect={setSelectedLanguage}
      />
      <RepoList selectedLanguage={selectedLanguage} />
    </React.Fragment>
  );
};

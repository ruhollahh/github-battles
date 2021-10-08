import React from 'react';
import Tooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";
import {FiUser} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'
import {FiGitBranch} from 'react-icons/fi'
import {FiAlertTriangle} from 'react-icons/fi'
import './RepoCard.styles.css'
import { Frame } from '../Frame';

export const RepoCard = ({repo, rank, ...delegated}) => {

  const { forks, owner, open_issues: openIssues, stargazers_count: stars, html_url: repoUrl } = repo;
  const {login: username, avatar_url: image, html_url: usernameUrl} = owner;

  return (
    <li {...delegated} className="card-wrapper">
      <article className="repo-card">
        <h2 className="repo-card__header">
          #{rank}
        </h2>
        <Frame className="mt-1">
          <img src={image} alt={`${username} avatar`} />
        </Frame>
        <h3 className="repo-card__header mt-2">
          <a href={repoUrl}>{username}</a>
        </h3>
        <ul className="repo-card__details mt-1">
          <li className="detail">
            <div className="detail__icon"><FiUser /></div>
            <Tooltip label="Github username">
              <div className="detail__body"><a className="text-bold" href={usernameUrl}>{username}</a></div>
            </Tooltip>
          </li>
          <li className="detail">
            <div className="detail__icon"><FiStar /></div>
            <div className="detail__body">{stars}</div>
          </li>
          <li className="detail">
            <div className="detail__icon"><FiGitBranch /></div>
            <div className="detail__body">{forks}</div>
          </li>
          <li className="detail">
            <div className="detail__icon"><FiAlertTriangle /></div>
            <div className="detail__body">{openIssues}</div>
          </li>
        </ul>
      </article>
    </li>
  );
};



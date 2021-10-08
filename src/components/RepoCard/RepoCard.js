import React from 'react';
import Tooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";
import {FiUser} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'
import {FiGitBranch} from 'react-icons/fi'
import {FiAlertTriangle} from 'react-icons/fi'
import './RepoCard.styles.css'
import { Frame } from '../Frame';

const Detail = ({icon, isUsername, children, ...delegated}) => {
  return (
    <li className="detail" {...delegated}>
      <div className="detail__icon">{icon}</div>
      {isUsername ? (
        <Tooltip label="Github username">
          <div className="detail__body">{children}</div>
        </Tooltip>
      ) :
        <div className="detail__body">{children}</div>
      }
    </li>
  )
}

export const RepoCard = ({rank, repoUrl, image, username, usernameUrl, stars, forks, openIssues, ...delegated}) => {

  const details = [
    {
      icon: <FiUser />,
      body: username,
      isUsername: true,
    },
    {
      icon: <FiStar />,
      body: stars
    },
    {
      icon: <FiGitBranch />,
      body: forks
    },
    {
      icon: <FiAlertTriangle />,
      body: openIssues
    },
  ]

  return (
    <li {...delegated} className="card-wrapper">
      <article className="repo-card">
        <h2 className="repo-card__header">
          {rank}
        </h2>
        <Frame className="mt-1">
          <img src={image} alt={`${username} avatar`} />
        </Frame>
        <h3 className="repo-card__header mt-2">
          {username}
        </h3>
        <ul className="repo-card__details mt-1">
          {
            details.map((detail, index) => <Detail key={index} icon={detail.icon} isUsername={detail.isUsername}>{detail.body}</Detail>)
          }
        </ul>
      </article>
    </li>
  );
};



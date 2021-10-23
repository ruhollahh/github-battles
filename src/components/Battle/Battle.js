import * as React from "react";
import { getUserProfile } from "../../utils/api";

import { FiUsers, FiTarget, FiGift, FiTrash2 } from "react-icons/fi";
import "./Battle.styles.css";

const Instructions = () => {
  return (
    <section className="instructions">
      <h2 className="instructions__header">Instructions</h2>
      <ol className="instructions__list">
        <li className="instruction-item">
          <h3 className="instruction-item__header">Enter two Github users</h3>
          <FiUsers
            className="instruction-item__icon"
            color="rgb(255, 191, 116)"
          />
        </li>
        <li className="instruction-item">
          <h3 className="instruction-item__header">Battle</h3>
          <FiTarget className="instruction-item__icon" color="#727272" />
        </li>
        <li className="instruction-item">
          <h3 className="instruction-item__header">See the winner</h3>
          <FiGift className="instruction-item__icon" color="rgb(255, 215, 0)" />
        </li>
      </ol>
    </section>
  );
};

const PlayerForm = ({ onSubmit }) => {
  const [username, setUsername] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form className="player-form mt-1" onSubmit={handleSubmit}>
      <label htmlFor="username" className="player-form__label">
        Username:
      </label>
      <input
        id="username"
        className="player-form__input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="player-form__btn px-2"
        type="submit"
        disabled={!username}
      >
        Submit
      </button>
    </form>
  );
};

const SelectablePlayer = ({ title, children }) => {
  return (
    <div className="selectable-player">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const PlayerProfile = ({ profile, onDelete }) => {
  const { login, avatar_url, html_url } = profile;
  return (
    <article className="player-profile mt-1 p-1/2">
      <img
        className="player-profile__avatar"
        src={avatar_url}
        alt="player avatar"
      />
      <a className="player-profile__username" href={html_url}>
        {login}
      </a>
      <button
        className="player-profile__remove-btn"
        aria-label="Remove"
        onClick={onDelete}
      >
        <FiTrash2 />
      </button>
    </article>
  );
};

const usePlayer = () => {
  const [player, setPlayer] = React.useState(null);

  const addPlayer = (username) => {
    getUserProfile(username).then((userProfile) => {
      setPlayer(userProfile);
    });
  };

  const removePlayer = () => setPlayer(null);

  return { player, addPlayer, removePlayer };
};

const BattleField = () => {
  const {
    player: playerOne,
    addPlayer: addPlayerOne,
    removePlayer: removePlayerOne,
  } = usePlayer();
  const {
    player: playerTwo,
    addPlayer: addPlayerTwo,
    removePlayer: removePlayerTwo,
  } = usePlayer();

  const isReady = Boolean(playerOne && playerTwo);

  return (
    <section className="players-section mt-3">
      <h2 className="players-section__header">Players</h2>
      <div className="players-section__forms mt-2">
        <SelectablePlayer title="Player One">
          {playerOne ? (
            <PlayerProfile profile={playerOne} onDelete={removePlayerOne} />
          ) : (
            <PlayerForm onSubmit={addPlayerOne} />
          )}
        </SelectablePlayer>
        <SelectablePlayer title="Player Two">
          {playerTwo ? (
            <PlayerProfile profile={playerTwo} onDelete={removePlayerTwo} />
          ) : (
            <PlayerForm onSubmit={addPlayerTwo} />
          )}
        </SelectablePlayer>
      </div>
      <button
        className="players-section__battle-btn mt-2 py-1/2 px-2"
        disabled={!isReady}
      >
        Battle
      </button>
    </section>
  );
};

export const Battle = () => {
  return (
    <React.Fragment>
      <Instructions />
      <BattleField />
    </React.Fragment>
  );
};

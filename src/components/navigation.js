import React from 'react';
import titleIcon from './icons/merge_black.svg';
import githubIcon from './icons/github.svg';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__left">
        <a href="http://operategpt.cn">
          <img src={titleIcon} alt="Title" className="navigation__logo" />
        </a>
      </div>
      <div className="navigation__right">
        <a href="https://github.com/xuyuan23/operateGPT">
          <img src={githubIcon} alt="GitHub" className="navigation__icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
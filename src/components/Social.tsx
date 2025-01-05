import React from 'react';
import config from '../config/config';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Social = () => {
  const { github: githubLink, discord: discordLink } = config.profileLinks || {};
  
  return (
    <div className="flex flex-grow gap-5">
      {discordLink && (
        <button
          className="bg-slate-500 px-6 py-2 rounded text-white hover:bg-slate-400 flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = discordLink;
          }}
        >
          <FaDiscord className="text-lg" />
          Discord
        </button>
      )}
      {githubLink && (
        <button
          className="bg-slate-500 px-6 py-2 rounded text-white hover:bg-slate-400 flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = githubLink;
          }}
        >
          <FaGithub className="text-lg" />
          Github
        </button>
      )} 
    </div>
  );
};

export default Social;

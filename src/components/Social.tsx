import React from 'react';
import config from '../config/config';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Social = () => {
  const { github: githubLink, discord: discordLink } = config.profileLinks || {};

  const buttonBase =
    "px-6 py-2 rounded-xl text-white font-semibold flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105";

  return (
    <>
      {discordLink && (
        <button
          className={`${buttonBase} bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-indigo-400/50`}
          onClick={(e) => {
            e.preventDefault();
            window.open(discordLink, "_blank");
          }}
        >
          <FaDiscord className="text-lg" />
          Discord
        </button>
      )}
      {githubLink && (
        <button
          className={`${buttonBase} bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg hover:shadow-gray-500/50`}
          onClick={(e) => {
            e.preventDefault();
            window.open(githubLink, "_blank");
          }}
        >
          <FaGithub className="text-lg" />
          Github
        </button>
      )}
    </>
  );
};

export default Social;

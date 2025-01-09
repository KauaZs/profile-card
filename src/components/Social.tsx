import config from '../config/config';
import { FaDiscord, FaGithub } from 'react-icons/fa';



const Social = ({
  hexColor,
  discordLink,
  githubLink,
}: {
  hexColor?: string;
  discordLink?: string | null;
  githubLink?: string | null;
}) => {

  const darkenHex = (hex: string, amount: number): string => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const darken = (color: number) => Math.max(0, Math.min(255, color - amount));
    const toHex = (color: number) => color.toString(16).padStart(2, "0");
    return `#${toHex(darken(r))}${toHex(darken(g))}${toHex(darken(b))}`;
  };

  const hoverColor = hexColor ? darkenHex(hexColor, 30) : '#4b5563';

  return (
    <>
      {discordLink && (
        <button
          className="px-6 py-2 rounded text-white flex items-center gap-2"
          style={{
            backgroundColor: hexColor || '#64748b',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = hexColor || '#64748b';
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open(discordLink, '_blank');
          }}
        >
          <FaDiscord className="text-lg" />
          Discord
        </button>
      )}
      {githubLink && (
        <button
          className="px-6 py-2 rounded text-white flex items-center gap-2"
          style={{
            backgroundColor: hexColor || '#6b7280',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = hexColor || '#6b7280';
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open(githubLink, '_blank');
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

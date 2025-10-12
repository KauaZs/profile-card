import Starfield from "./components/Space";
import Social from "./components/Social";
import config from "./config/config";

function App() {
  const { displayName, about, avatar_url, banner } = config.profileOptions;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 relative overflow-hidden">
      <Starfield backgroundColor="#000000" />

      <div className="relative w-80 sm:w-96 bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-800 p-6 animate-fadeIn">
        {/* Banner */}
        <div className="absolute -top-24 left-0 w-full">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-32 sm:h-36 rounded-t-2xl object-cover opacity-90"
          />
        </div>

        {/* Avatar */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src={avatar_url}
            alt="Profile"
            className="rounded-full h-28 w-28 sm:h-32 sm:w-32 border-4 border-gray-900 shadow-lg shadow-black/50"
          />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center mt-20 sm:mt-24 text-center">
          <h1 className="text-white font-bold text-2xl sm:text-3xl tracking-wide">
            {displayName || "Random"}
          </h1>
          <p className="text-gray-300 font-Cinzel mt-2 text-sm sm:text-base max-w-[80%]">
            {about || ""}
          </p>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-8">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default App;

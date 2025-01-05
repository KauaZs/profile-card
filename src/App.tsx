import Starfield from "./components/Space";

import Social from "./components/Social";
import config from "./config/config";

function App() {
  const { displayName, about, avatar_url, banner } = config.profileOptions
  return ( 
    
    <div className="flex items-center justify-center h-screen bg-gray-900 relative">
      <Starfield  backgroundColor="#000000" />
      <div className="relative w-80 h-80 bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="absolute -top-20 left-0 w-full">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-36 rounded-t-lg object-cover"
          />
        </div>
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <img
            src={avatar_url}
            alt="Profile"
            className="rounded-full h-36 w-36 border-4 border-gray-700"
          />
        </div>
        <div className="flex flex-col items-center mt-24">
          <h1 className="font-semibold text-white right-20 text-3xl">{displayName || "Random"}</h1>
          <p className="font-Cinzel text-white right-20 mt-1 text-center text-xs">{about || ""}</p>   
        </div>
        <div className="flex flex-grow gap-6 mt-6">
          <Social />    
        </div>    
      </div>
    </div>
  );
}

export default App;

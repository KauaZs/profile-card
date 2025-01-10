import useAuth from "../hooks/useAuh";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { user, logged, loggedProcess } = useAuth()
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    if (!loggedProcess) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [logged, loggedProcess]);
 
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 flex flex-col items-center overflow-hidden">
    <header className="w-full text-center py-16 px-4 bg-white shadow-lg">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
        Welcome to Kaurds
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A project designed for you to manage your profile in a simple, practical and elegant way. 
        Edit and view your information without complications.
      </p>
      <button
        className={`mt-6 px-8 py-3 ${
          !loggedProcess
            ? 'bg-gray-300 text-gray-500 animate-pulse'
            : 'bg-blue-600 text-white'
        } text-lg font-semibold rounded-lg shadow ${
          !loggedProcess ? '' : 'hover:bg-blue-700'
        }`}
        onClick={() =>
          window.location.pathname = logged
            ? `/u/${user.database.profileOptions.displayName}`
            : '/api/auth'
        }
        disabled={loading}
      >
        {!loggedProcess ? 'Loading...' : (user ? 'View my profile' : 'Login')}
      </button>

      <button className='bg-yellow-300 shadow text-white text-lg font-semibold mt-4 ml-3 px-8 py-3 rounded-lg hover:bg-yellow-500' 
        onClick={() => window.location.pathname = '/hallfame'}
      >
        View HallFame
      </button>
    </header>

    
      <section className="w-full max-w-5xl mt-12 px-6 py-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">About the Project</h2>
        <p className="mt-4 text-gray-600">
          This project is dedicated to offering an intuitive experience for managing user profiles. 
          With a responsive and modern interface, you can view and edit personal information 
          like name, banner and bio with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Profile View</h3>
            <p className="text-gray-600 mt-2">
              See your information clearly and organized, with a design that highlights what's most important.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Data Editing</h3>
            <p className="text-gray-600 mt-2">
              Update your information with just a few clicks. Everything in a practical and safe way.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl mt-12 px-6 py-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Features</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 text-blue-600">✔️</span>
            <p className="ml-4 text-gray-600">View full profile with detailed information.</p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 text-blue-600">✔️</span>
            <p className="ml-4 text-gray-600">Edit data such as name, biography and banner.</p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 text-blue-600">✔️</span>
            <p className="ml-4 text-gray-600">User-friendly and responsive interface for all devices.</p>
          </li>
        </ul>
      </section>

      <footer className="w-full mt-12 bg-blue-600 py-6 text-center text-white">
        <h2 className="text-2xl font-bold">Explore Right Now</h2>
        <p className="mt-2 text-white/90">
          Click the button below and discover how easy it is to manage your profile!
        </p>
        <button className={`mt-4 px-6 py-3 bg-white rounded-lg shadow ${
          !loading
            ? "text-blue-600 font-semibold  hover:bg-gray-100"
            : "animate-pulse text-gray-50"
          }`}  
          disabled={loading} 
          onClick={() => window.location.pathname = logged? `/u/${user.database.profileOptions.displayName}` :'/api/auth'}>
          {loading ? 'Loading...' : (!user ? 'Login' : 'View my profile')}
        </button>
      </footer>
    </div>
  );
};

export default Home;

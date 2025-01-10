import { IUserData } from '@/types/user';
import HallFameCard from '../components/HallFameCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageNotFound from './Error/PageNotFound';
import Loading from './Loading';

const HallFame = () => {
  const [usersHallFame, setUsersHallFame] = useState<IUserData[] | null>(null);

  useEffect(() => {
    const findUsersFame = async () => {
      try {
        const result = await axios.get('/api/users/listHallFame?maxItens=10', {
          headers: {
            Authorization: import.meta.env.API_KEY,
          },
        });
        setUsersHallFame(result.data);
      } catch (error) {
        
        setUsersHallFame(null);
      }
    };

    findUsersFame();
  }, []);

  if (!usersHallFame) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="font-semibold text-4xl shadow text-white lg:text-center">
        HallFame
      </h1>

      <div className="flex justify-center items-start mt-6">
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
          {usersHallFame.map((user, i) => (
            <HallFameCard
              avatar={user.profileOptions.avatar}
              displayName={user.profileOptions.displayName}
              position={i + 1}
              views={user.profileOptions.stats.views}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HallFame;

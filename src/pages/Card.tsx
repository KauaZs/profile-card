import { Button } from '../components/ui/button';
import { DialogEdit } from '../components/Dialog';
import Social from '../components/Social';
import Starfield from '../components/Space';
import config from '../config/config';
import useAuth from '../hooks/useAuh';
import React, { useEffect, useState } from 'react'
import useQuery from '../hooks/useQuery';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import PageNotFound from './Error/PageNotFound';
import { DropdownMenuAccount } from '../components/Dropdown';
import { error } from 'console';



interface IUserData {
  _id: string
  profileOptions: {
    displayName: string,
    aboutme: string,
    banner: string,
    avatar: string,
    effectSpace: boolean,
    colorCard: string,
    colorBackground: string,
    socials: {
      discord: string,
      github: string
    }
  }
}



const darkenHex = (hex: string, amount: number): string => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const darken = (color: number) => Math.max(0, Math.min(255, color - amount));
  const toHex = (color: number) => color.toString(16).padStart(2, "0");
  return `#${toHex(darken(r))}${toHex(darken(g))}${toHex(darken(b))}`;
};

const Card = () => {
    const { displayName, about, avatar_url, banner } = config.profileOptions;
    const { logged, user: userLogged } = useAuth()
    const [data, setData] = useState<IUserData>();
    const [error, setError] = useState<string>();
    const { user } = useParams();
    
    if (!user) {
      return (
        <PageNotFound />
      )
    } else {
        useEffect(() => {     
          if (data)return;
            const fetchData = async () => {
              try { 
                const result = await axios.get(`/users/${user}`, {
                  headers: {
                    Authorization: import.meta.env.API_KEY,
                    'Content-Type': 'application/json'
                  }
                })
                setData(result.data)
              } catch(e: any) {
                setError(e.message)
              }
            }

            fetchData()
        }, [data, error])
    }

    console.log(data)
    if (!data && !error) {
      return (
        <div className='flex items-center h-screen justify-center'>
         
          <div className="text-center">
              <div role="status">
                  <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span className="sr-only">Loading...</span>
              </div>
          </div>
          <p className='ml-3'>Loading...</p>
        </div>
      )
    } else if (error) {
      return (
        <PageNotFound />
      )
    } else if (!data) {
      return (
        < PageNotFound />
      )
    }
    const isHisLogged = logged && userLogged.discord.id === data?._id;
    return ( 
        
      <div className="flex items-center justify-center h-screen relative" style={
        {backgroundColor: data.profileOptions?.colorBackground || '#111827'}
      }>
        {data?.profileOptions.effectSpace && <Starfield  backgroundColor="#000000" />}

        {logged ? (
          <div className="absolute top-0 right-0 mt-4 mr-3 flex items-center">
            <DropdownMenuAccount  isHisProfile={isHisLogged}/>
          </div>
        ) : (
          <div className="absolute top-0 right-0 mt-4 mr-3 flex items-center">
              <Button  onClick={() => window.location.pathname = '/auth'}>
                  Login
              </Button>
          </div>
        )
        
        }
        
        <div className="relative w-80 h-80 bg-gray-800 rounded-lg shadow-lg p-6" style={
          {
            backgroundColor: data?.profileOptions.colorCard || '#1f2937'
          }
        }>
          <div className="absolute -top-20 left-0 w-full">
            <img
              src={data?.profileOptions.banner ? data?.profileOptions.banner : banner}
              alt="Banner"
              className="w-full h-36 rounded-t-lg object-cover"
            />
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <img
              src={data?.profileOptions.avatar ? data?.profileOptions.avatar : avatar_url}
              alt="Profile"
              className="rounded-full h-36 w-36 border-4"
              style={
                { borderColor: data?.profileOptions.colorCard || '#374151'}
              }
            />
          </div>
          <div className="flex flex-col items-center mt-24">
            <h1 className="font-semibold text-white right-20 text-3xl">{data?.profileOptions.displayName || ''}</h1>
            <p className="font-Cinzel text-white right-20 mt-1 text-center text-xs">{data.profileOptions?.aboutme || ""}</p>   
          </div>
          <div className={`flex flex-grow gap-6 mt-6 ${(!data.profileOptions.socials.discord || !data.profileOptions.socials.github) ? 'justify-center' : 'justify-between'}`}>
            <Social 
              hexColor={darkenHex(data.profileOptions.colorCard, 30)} 
              discordLink={data.profileOptions.socials.discord || null}
              githubLink={data.profileOptions.socials.github || null}
            />
          </div>    
        </div>
      </div>
    );
}

export default Card

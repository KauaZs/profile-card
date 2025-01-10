import { Button } from '../components/ui/button';
import Social from '../components/Social';
import Starfield from '../components/Space';
import config from '../config/config';
import useAuth from '../hooks/useAuh';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageNotFound from './Error/PageNotFound';
import { DropdownMenuAccount } from '../components/Dropdown';

import { Helmet } from 'react-helmet';
import { IUserData } from '../types/user';
import Loading from './Loading';

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
    const { logged, user: userLogged, loggedProcess } = useAuth()
    const [data, setData] = useState<IUserData>();
    const [error, setError] = useState<string>();
    const { user } = useParams();
    
    if (!user) {
      return (
        <PageNotFound />
      )
    } else {
        useEffect(() => {     
          if (data) return;
            const fetchData = async () => {
              try { 
                const result = await axios.get(`/api/users/${user}`, {
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

    if (!data && !error) {
      return (
        <Loading />
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
        
      <div className="flex items-center justify-center min-h-screen relative overflow-hidden" style={
        {backgroundColor: data.profileOptions?.colorBackground || '#111827'}
      }>

        <Helmet>
            <title>Profile {data?.profileOptions.displayName} - Kaurds</title>
            <meta name="description" content={`see ${data?.profileOptions.displayName} profile and find out more about him`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${data?.profileOptions.displayName}`} />
            <meta property="og:description" content={`see ${data?.profileOptions.displayName} profile and find out more about him`} />
            <meta property="og:url" content={`https://kaurds.kauazs.tech/u/${data?.profileOptions.displayName}`} />
            <meta name="theme-color" content="#819bf0" />
        </Helmet>
        {data?.profileOptions.effectSpace && <Starfield  backgroundColor="#000000" />}

        {!loggedProcess? (
          <div className="absolute top-0 right-0 mt-4 mr-3 flex items-center">
            <Button  onClick={() => window.location.pathname = '/api/auth'} disabled={true}>
              Loading...
            </Button>
          </div>
        )  : logged ? (
          <div className="absolute top-0 right-0 mt-4 mr-3 flex items-center">
            <DropdownMenuAccount  isHisProfile={isHisLogged}/>
          </div>
        ) : (
          <div className="absolute top-0 right-0 mt-4 mr-3 flex items-center">
              <Button  onClick={() => window.location.pathname = '/api/auth'}>
                  Login
              </Button>
          </div>
        )
        
        }
        
        <div className="relative w-80 h-80  bg-gray-800 rounded-lg shadow-lg p-6" style={
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
          <div className={`flex gap-6 mt-4 ${(!data.profileOptions.socials.discord || !data.profileOptions.socials.github) ? 'justify-center' : 'justify-between'}`}>
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

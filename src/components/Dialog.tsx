import { useEffect, useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import useAuth from "../hooks/useAuh";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import axios from "axios";
import AlertDestructive from "./label/Error";

export function DialogEdit() {
  const { user } = useAuth();
  const data = user?.database?.profileOptions;
  const [effectSpace, setEffectSpace] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>(false)
  
  useEffect(() => {
    if (data?.effectSpace !== undefined) {
      setEffectSpace(data.effectSpace);
    }
  }, [data?.effectSpace]);

  const handleSave = async () => {
    const formData = {
      displayName: (document.getElementById("name") as HTMLInputElement).value,
      avatar: (document.getElementById("avatar") as HTMLInputElement).value,
      banner: (document.getElementById("banner") as HTMLInputElement).value,
      colorBackground: (document.getElementById("background") as HTMLInputElement).value,
      colorCard: (document.getElementById("background-card") as HTMLInputElement).value,
      aboutme: (document.getElementById("aboutme") as HTMLInputElement).value,
      socials: {
        github: (document.getElementById("github") as HTMLInputElement).value,
        discord: (document.getElementById("discord") as HTMLInputElement).value,
      },
      effectSpace, 
    };

    const regexUrl = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
    const regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const regexGithub = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+$/;
    const regexNick = /^[a-zA-Z0-9]+$/;
    const regexDiscord = /^https:\/\/discord\.com\/users\/\d+$/

    if (!formData.displayName) return setError('the name field is required')
    if (formData.displayName.length > 30) return setError('your nickname must be less than 30 characters')
    if (!regexNick.test(formData.displayName)) return setError('Do not use inappropriate characters in your nickname')
    if (formData.avatar && !regexUrl.test(formData.avatar)) return setError('the avatar field needs to be a url')
    if (formData.banner && !regexUrl.test(formData.banner)) return setError('the banner field needs to be a url')
    if (formData.colorBackground && !regexHex.test(formData.colorBackground)) return setError('the background color field needs to be a hexcolor')
    if (formData.colorCard && !regexHex.test(formData.colorCard)) return setError('the background card color field needs to be a hexcolor')
    if (formData.socials.github && !regexGithub.test(formData.socials.github)) return setError('github link is invalid')
    if (formData.socials.discord && !regexDiscord.test(formData.socials.discord)) return setError('discord link is invalid')
    
    try {
      const result = await axios({
        method: 'post',
        url: `/api/profile/?userId=${user.discord.id}`,
        headers: {
          Authorization: import.meta.env.API_KEY,
          'Content-Type': 'application/json'
        },
        data: { profileOptions: formData }
      });
      if (data.displayName !== formData.displayName) {
        window.location.pathname = '/u/' + formData.displayName
      } else {
        window.location.reload();
      }  
    } catch(e : any) {
      return setError(e.response.data.error)
    }
    
  };

  return (
  
      
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        {error && (
          <AlertDestructive error={error as string}/>
        )}
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue={data?.displayName} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="avatar" className="text-right">
              Avatar
            </Label>
            <Input id="avatar" defaultValue={data?.avatar} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="banner" className="text-right">
              Banner
            </Label>
            <Input id="banner" defaultValue={data?.banner} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="background" className="text-right">
              Page background color
            </Label>
            <Input id="background" defaultValue={data?.colorBackground} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="background-card" className="text-right">
              Card background color
            </Label>
            <Input id="background-card" defaultValue={data?.colorCard} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="aboutme" className="text-right">
               About Me
            </Label>
            <Input id="aboutme" defaultValue={data?.aboutme} className="col-span-3" />
          </div>
          <div className="flex grid-cols-4 items-center gap-3 mt-5">
            <Label htmlFor="github" className="flex items-center gap-2">
              <FaGithub className="text-lg ml-4" /> Github
            </Label>
            <Input id="github" defaultValue={data?.socials?.github || ""} className="col-span-3" />
          </div>
          <div className="flex grid-cols-4 items-center gap-3">
            <Label htmlFor="discord" className="flex items-center gap-2">
              <FaDiscord className="text-lg ml-4" /> Discord
            </Label>
            <Input id="discord" defaultValue={data?.socials?.discord || ""} className="col-span-3" />
          </div>
          <div className="flex gap-3 items-center ml-4">
            <Checkbox
              id="airplane-mode"
              checked={effectSpace}
              onCheckedChange={(value) => setEffectSpace(value as boolean)}
            />
            <label htmlFor="airplane-mode">
             Display effect <span>Spatial</span>
            </label>
          </div>
        </div>
        <SheetFooter>
            <Button type="submit" onClick={handleSave}>Save changes</Button>
        </SheetFooter>
      </SheetContent>
   
  );
}

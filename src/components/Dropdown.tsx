import {
  LogOut,
  User,
} from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import useAuth from "../hooks/useAuh";
import { DialogEdit } from "./Dialog";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"; 

import { useState } from "react";
import axios from "axios";

export function DropdownMenuAccount({ isHisProfile} : {isHisProfile: boolean}) {
  const { user } = useAuth();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleEditProfile = () => {
    setIsSheetOpen(true); 
  };

  const handleLogout = async () => {
      const result = await axios.post('/auth/logout')
      window.location.reload()
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {user?.discord?.username} <IoMdArrowDropdown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          { isHisProfile ? (
            <DropdownMenuItem onClick={handleEditProfile}>
              <User />
            <span>Edit profile</span>
          </DropdownMenuItem> ) : (
            <DropdownMenuItem onClick={() => window.location.pathname = `/u/${user.database?.profileOptions?.displayName}`}>
              <User />
            <span>View my profile</span>
          </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <DialogEdit /> 
        </SheetContent>
      </Sheet>
    </>
  );
}

"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { User } from '@/payload-types'
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
const UserAccountNav = ({user}:{user:User}) => {
    const {signOut} = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible  border-black ">
        <button className="px-3 py-2 border border-black rounded-md text-white hover:text-gray-300">
          myAcc
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" p-2 text-black bg-white w-60 rounded-sm mt-2 py-2" align="end" >
        <div className="flex items-center justify-start gap-2 " >
            <div className=" p-2 flex flex-col space-y-0.5 leading-none" >
                <p className=" font-medium text-sm  " >{user.email}</p>
            </div>
        </div>
        
        <DropdownMenuItem asChild>
            <Link href='/creator' className="p-2 backdrop-blur-md bg-opacity-50" >Creator Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut} className="  cursor-pointer p-2 " >Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
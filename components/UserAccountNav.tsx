"use client"
import React from "react";
import { User } from "next-auth";
import { DropdownMenu, DropdownMenuContent,DropdownMenuItem,DropdownMenuSeparator,DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";
type Props={
    user:User;
};
const UserAccountNav=({user}:Props)=>{
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar user={user}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <div className="flex items-center justify-start gap-2 p-3">
                    <div className="flex flex-col space-y-1 leading-none min-w-0">
                        {user?.name && <p className="font-medium">{user.name}</p>}
                        {user?.email &&(
                            <p className="truncate text-sm text-secondary-foreground">{user.email}</p>
                        )}

                    </div>

                </div>
                
                <DropdownMenuSeparator/>
                <DropdownMenuItem 
                onClick={() => signOut()} className="text-red-600 cursor-pointer flex items-center justify-start"
                >
                    <span>Sign Out</span>
                    <LogOut className="ml-2 h-4 w-4"/>

                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    
    );



}
export default UserAccountNav;
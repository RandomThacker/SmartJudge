'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation'; 
import axios from 'axios';
import { apiMap } from '@/lib/apiMap';

export default function Page() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  // Function to handle username submission
  async function updateUsername() {
    try {
      const response = await axios.post(apiMap.usernameChange, { username });
      if (response.data.success) {
        router.push(apiMap.home);
      } else {
        console.log("Try some other username");
      }
    } catch (error) {
      console.error("Error updating username:", error);
    }
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">First Time Setup</h1>
            <p className="text-balance text-muted-foreground">
              Enter your username to complete setting up your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text" // Change type to "text"
                placeholder="smart404"
                value={username} // Bind value to state
                onChange={(e) => setUsername(e.target.value)} // Handle input change
                required
              />
            </div>
            <Button type="submit" onClick={updateUsername} className="w-full"> {/* Call updateUsername function onClick */}
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

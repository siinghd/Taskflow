'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation';

interface DialogLoginProps {
    triggerElement: React.ReactNode;
}

const DialogLogin: React.FC<DialogLoginProps> = ({ triggerElement }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter()

  return (
    <Dialog>
        <DialogTrigger asChild>
            {triggerElement}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
            <DialogTitle>Enter in Taskflow</DialogTitle>
            <DialogDescription>
            Lorem ipsum dolor sit amet consectetur. Vel dolor vitae sed id ipsum eget purus id.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                    Username
                </Label>
                <Input 
                    id="username" 
                    value={username} 
                    className="col-span-3"
                    placeholder='Write your username' 
                    type='text'
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="passoword" className="text-right">
                Password
                </Label>
                <div className='relative col-span-3'>
                    <Input 
                        id="passoword" 
                        value={password} 
                        className="col-span-3"
                        placeholder='Write your password'
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <div className='absolute top-0 bottom-0 my-auto cursor-pointer right-2 h-fit'>
                        {showPassword ? (
                            <i 
                                className="bi bi-eye-slash-fill"
                                onClick={() => setShowPassword(false)}
                            />
                        ) : (
                            <i 
                                className="bi bi-eye-fill"
                                onClick={() => setShowPassword(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
            </div>
            <DialogFooter>
                <Button 
                    type="submit"
                    onClick={() => router.push('/profile')}
                >
                    Log In
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default DialogLogin
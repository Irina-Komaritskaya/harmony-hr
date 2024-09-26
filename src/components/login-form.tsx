"use client"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { LogIn, GetUser } from '@/lib/queries';
import { useRouter } from 'next/navigation'

export const description =
    "A simple login form with email and password. The submit button says 'Sign in'.";

export function LoginForm() {
    // const bears = useUserStore((state) => state.id_user);
    // // console.log(bears)

    // const setUser = useUserStore(
    //     (state) => state.setUser
    // );
    const router = useRouter()
    const [value, setValue] = useState({
        email: "john@mail.com",
        password: "changeme",
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        LogIn({ email: value.email, password: value.password });
        GetUser()
        router.push('/page')
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={onSubmit}>
            <Card className="w-full max-w-sm" >
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="m@example.com"
                            value={value.email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={value.password}
                            onChange={onChange}
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Sign in</Button>
                </CardFooter>
            </Card>
        </form>

    );
}

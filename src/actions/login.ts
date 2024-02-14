'use server'

import { db } from "@/lib/db"


type LoginProps = {
    email: string
    password: string
}

export const login = (values: LoginProps) => {
    console.log(values)
    
}
'use server'

import { db } from "@/lib/db"


type RegisterProps = {
    email: string
    password: string
}

export const register = (values: RegisterProps) => {
    console.log('Register: ', values)
    
}
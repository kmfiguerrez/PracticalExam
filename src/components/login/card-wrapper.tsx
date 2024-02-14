import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
type CardWrapperProps = {
    title: string
    children: React.ReactNode
}

const CardWrapper:React.FC<CardWrapperProps> = ({ children, title }) => {
  return (
    <Card className='w-[500px] mx-auto'>
    <CardHeader>
        <CardTitle>{ title }</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
    </CardHeader>
    <CardContent>
        { children }
    </CardContent>
    {/* <CardFooter>
        <p>Card Footer</p>
    </CardFooter> */}
    </Card>

  )
}

export default CardWrapper
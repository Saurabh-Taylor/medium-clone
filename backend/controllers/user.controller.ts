import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'


import { Context } from "hono";

import {  signupInput , signinInput} from "@saurabh-tailor/medium-common";



export const signup = async(c:Context)=>{
  //prisma starts
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL // we have to write in every route or use as variable coz cloud doesnt know the environment variable
  }).$extends(withAccelerate())
  //prisma ends

  try {
    const body = await c.req.json()
   //zod validation
    const {success} = signupInput.safeParse(body)
    
    if(!success){
      c.status(411)
      return c.json({
        message:"user cannot created successfully , checkup input fields"
      })
    }
   //saving in DB
   const user = await prisma.user.create({
      data:{
        username:body.username,
        name:body.name,
        password:body.password
      }
   })

   const token = await sign({id:user.id , username: user.username} , c.env.JWT_SECRET)
   
    return c.text(token)

  } catch (error:any) {
    c.status(411)
    return c.text(error.message)
  }

}

export const signin = async (c:Context)=>{
  //prisma starts
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL // we have to write in every route or use as variable coz cloud doesnt know the environment variable
  }).$extends(withAccelerate())
  //prisma ends
  const body = await c.req.json()

  const {success} = signinInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      message:"user cannot created successfully , checkup input fields"
    })
  }

  const user = await prisma.user.findFirst({
    where:{
      username:body.username,
      password:body.password
    }
  })

  if(!user){
    c.status(403) // unauthorised
    return c.text('Invalid Credentials')
  }

  const token = await sign({id:user.id , username: user.username} , c.env.JWT_SECRET)
  return c.text(token)

}
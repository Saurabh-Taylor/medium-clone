import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


import { Context, Hono } from "hono";
import { verify } from 'hono/jwt';

const app = new Hono<{
    Bindings: {
      DATABASE_URL:string,
      JWT_SECRET:string
    }
  }>()

// post
export const createBlog = async (c:Context)=>{
    //prisma starts
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL // we have to write in every route or use as variable coz cloud doesnt know the environment variable
    }).$extends(withAccelerate())
    //prisma ends

    const body = await c.req.json()
    const userId = c.get("userId")
    console.log("userId:::"+userId);
    

   const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
   })


   return c.json({
    id:blog.id
   })
}


//put
export const updateBlog = async (c:Context)=>{
    //prisma starts
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL // we have to write in every route or use as variable coz cloud doesnt know the environment variable
    }).$extends(withAccelerate())
    //prisma ends

    const body = await c.req.json()

    const blog = await prisma.blog.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })

    return c.json({
        message:"Blog updated successfully",
        id:blog.id
    })

}


// get request
export const getBlogByID = async (c:Context)=>{
     //prisma starts
     const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL // we have to write in every route or use as variable coz cloud doesnt know the environment variable
    }).$extends(withAccelerate())
    //prisma ends
    try {

        const id  = c.req.param('id')
        const blog = await prisma.blog.findFirst({
            where:{
                id:Number(id)
            }
        })

        return c.json({
            message:"success fetched to get blogs",
            blog
        })
    
    } catch (error:any) {
        console.log(error.message);
        
    }
}

//get request
// can apply pagination
export const allBlogs = async (c:Context)=>{
      //prisma starts
      const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL // we have to write in every route or use as variable coz cloud doesnt know the environment variable
    }).$extends(withAccelerate())
    //prisma ends
    try {
        const blog = await prisma.blog.findMany()

        return c.json({
            message:"success fetched to get blogs",
            blog
        })
    
    } catch (error:any) {
        console.log(error.message);
        
    }
    return c.text('Hello Hono!')
}
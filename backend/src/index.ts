import { Hono } from 'hono'
import { cors } from 'hono/cors'





const app = new Hono<{
  Bindings: {
    DATABASE_URL:string,
    JWT_SECRET:string
  },
  Variables:{
    userId:any
  }
}>()

import { signin, signup } from '../controllers/user.controller'
import { updateBlog , allBlogs ,createBlog ,getBlogByID } from '../controllers/blog.controller'
import { verify } from 'hono/jwt'
import { Context } from 'hono/jsx'

app.use("/*" , cors())

app.use("/api/v1/blog/*" , async (c, next)=>{

  console.log("logged from blog middleware");
  const authHeader = c.req.header("authorization") || ""
  
  const user  = await verify(authHeader , c.env.JWT_SECRET) || ""

  c.set("userId" , user.id)
  await next()
  
})


app.get("/" , (c)=>{
  return c.text("server is working and healthy")
})


app.post('/api/v1/user/signup', signup)

app.post('/api/v1/user/signin', signin)

app.post('/api/v1/blog/createBlog', createBlog )

app.put('/api/v1/blog/updateBlog', updateBlog )

app.get('/api/v1/blog/allBlogs', allBlogs )

app.get('/api/v1/blog/:id', getBlogByID)



export default app

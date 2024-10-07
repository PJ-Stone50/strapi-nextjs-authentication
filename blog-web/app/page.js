import axios from 'axios'
import Link from 'next/link'

const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs`)
    // console.log("data", response.data)
    return response.data.data
  } catch(error) {
    console.log("error",error)
    return []
  }
}

export default async function Page() {
  const blogs = await fetchBlogs()
  console.log(blogs)
  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-500">Hello Page</h1>
      <div className=" w-full bg-blue-200 justify-center gap-5 p-5">
      {blogs.map((blog,index) => (
        <div key={index} className="flex flex-col">
          <div>
            ID: {blog.id}
          </div>
          <div>
           {blog.attributes.title}
          </div>
          <Link href={`blog/${blog.id}`} className="p-3 w-fit text-center rounded-lg shadow-lg bg-white">See more</Link>
        </div>
      ))}
      </div>
    </div>
  )
}
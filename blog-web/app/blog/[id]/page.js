import axios from 'axios'


const fetchBlog = async (id) => {
  try {
    const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs/${id}?populate=thumbnail,author`)
    // console.log("data", response.data)
    return response.data.data
  } catch(error) {
    console.log("error",error)
    return []
  }
}

export default async function Page({ params }) {
    const blogId = params.id
    const blog = await fetchBlog(blogId)

    // console.log("BlogId",blogId)
    // console.log("Blog",blog.attributes.thumbnail.data.attributes.url)
    console.log("Process",process.env.STRAPI_BASE_URL)

    return (
        <div>
            Blog ID: {blog.id}
            <img width="100px" alt="blog-image" src={`${process.env.STRAPI_BASE_URL }${blog.attributes.thumbnail.data.attributes.url}`} />
            <div>
                {blog.attributes.title}
            </div>
            <div>
                author by: {blog.attributes.author.data.attributes.name}
            </div>
        </div>
    )
}
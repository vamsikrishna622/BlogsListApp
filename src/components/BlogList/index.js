// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(blog => (
        <BlogItem key={blog.id} blogItem={blog} />
      ))}
    </ul>
  )
}

export default BlogList

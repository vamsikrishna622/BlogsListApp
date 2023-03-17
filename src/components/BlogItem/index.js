// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li className="list-item">
      <div className="post-details">
        <h1 className="post">{title}</h1>
        <p className="posted-date">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem

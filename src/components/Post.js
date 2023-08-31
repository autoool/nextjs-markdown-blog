import Link from 'next/link'
import Image from 'next/image'
import { slugify } from '@/lib'

export default function Post({ post }) {

  const date = new Date(post.frontmatter?.date)
  return (
    <div className="card mb-4">
      <Link href={`/blog/${post.slug}`} > <img className="card-img-top" src={post.frontmatter.image} alt="..." /></Link>
      <div className="card-body">
        <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>

        <div> {
          post.frontmatter.tags.map(
            tag => {

              const slug = slugify(tag)

              return (<Link key={tag} href={`/tag/${slug}`} className='btn  post-title'>
                <h6 className=' post-title'>#{tag}</h6>
              </Link>)
            }
          )
        } </div>
        <h2 className="card-title">{post.frontmatter.title}</h2>
        <p className="card-text">{post.frontmatter.summary}</p>
        <Link href={`/blog/${post.slug}`} className='btn'>
          Read More
        </Link>
      </div>
    </div>
  )
}
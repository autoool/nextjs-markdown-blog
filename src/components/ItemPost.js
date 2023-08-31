import Link from 'next/link'
import Image from 'next/image';
import { ImageUrl } from '@/lib';

export default function ItemPost({ post: { post } }) {

  // const imageUrl= process.env.SITE_URL + post.images[0]


  const date = new Date(post.date)

  return (
    <div className="card mb-4">
      <Link href={`/blog/${post.slug}`} > <img className="card-img-top"
        src={ImageUrl(post.images[0])} alt={post.title} /></Link>
      <div className="card-body">
        <div className="small text-muted">{`${date.getMonth() + 1} 
        - ${date.getDate()} - 
        ${date.getFullYear()}`}</div>
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.summary}</p>
        <Link href={`/blog/${post.slug}`} className='btn'>
          Read More
        </Link>
      </div>
    </div>


  )
}
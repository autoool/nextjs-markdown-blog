"use client"

import { useRouter } from 'next/navigation'

import Post from '@/components/Post';
import Banner from '@/components/Banner';
import search from '@/config/search.json';

export default function Search({params}) {
    const slug = params.slug
    const router= useRouter()
    console.log(slug)
    const TempPosts = []

    search.map(
        (post) => {
            if (post.frontmatter.draft === false) {
                if (post.frontmatter.title.toLowerCase().includes(params.slug)
                 || post.frontmatter.summary.toLowerCase().includes(params.slug) 
                || post.frontmatter.description.toLowerCase().includes(params.slug)) {
                    TempPosts.push(post)
                } else {
                    TempPosts.push(null)
                }
            }
        }
    )

    //   remove null in posts 
    const posts = TempPosts.filter(
        path => {
            return path && path
        }
    )

    return (
        <div>
            <Banner />
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 m-auto">

                        {
                            posts.length > 0 ?
                                posts.map((post, index) => (
                                    <Post key={index} post={post} />
                                )) : <div className='m-auto p-5 mx-5 '>
                                    <h2 className='text-center'>
                                        {params.slug? `No post find base on ${params.slug} ` : 'loadding.. '}
                                    </h2>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

import Head from 'next/head'

import { useRouter } from 'next/router'


import Post from '@/components/Post';
import Banner from '@/components/Banner';
import Search from ''

export default function Search() {
    const { query } = useRouter()
    const TempPosts = []

    search.map(
        (post) => {
            if (post.frontmatter.draft === false) {
                if (post.frontmatter.title.toLowerCase().includes(query.q) || post.frontmatter.summary.toLowerCase().includes(query.q) || post.frontmatter.description.toLowerCase().includes(query.q)) {
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
                                        {query.q ? `No post find base on ${query.q} ` : 'loadding.. '}
                                    </h2>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

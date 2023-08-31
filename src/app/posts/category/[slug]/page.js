
"use client"
import ItemPost from '@/components/ItemPost';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Category({ params }) {

    const slug = params.slug
    const router = useRouter();
    console.log(router.query);

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const requestBody ={
        slug: slug
    }
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/posts/category',
                {
                    method: 'POST',
                    body: JSON.stringify(requestBody)
                });
            const data = await res.json();
            setPosts(data.props.posts);
        }
        fetchData();
    }, [])


    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-10 post-date m-1 p-2m-auto">
                        {
                            posts.map((post, index) => {

                                return <ItemPost key={index} post={post} />
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
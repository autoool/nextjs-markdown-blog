
"use client"
import ItemPost from '@/components/ItemPost';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import Post from '@/components/Post';

export default function Category() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/posts',
                {
                    method: 'POST'

                });
            const data = await res.json();
            setPosts(data.props.posts);
        }
        fetchData();
    }, [])


    return (
        <div>
            <Banner />
            <div className="container">
                <div className="row">

                    <div className="col-lg-8">

                        {posts.map((post, index) => (
                            <Post key={index} post={post} />
                        ))}
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
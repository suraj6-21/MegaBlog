import React, { useState, useEffect } from 'react'
import appwriteService from "../appwrite/Config"
import { PostCard } from '../components/index'
import Cantainer from "../components/cantainer/Cantainer"


const AllPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => { }, [])

    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Cantainer>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Cantainer>
        </div>
    )
}

export default AllPosts
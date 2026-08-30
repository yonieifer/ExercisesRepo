import { useEffect, useState } from "react";

interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Post = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<PostData | null>(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/5")
            .then((d) => d.json())
            .then((p) => {
                setPost(p)
                setLoading(false)
            });
        
    }, []);

    if (loading || !post)
        return (
            <>
                <h1>loading...</h1>
            </>
        );

    return (
        <>
            <h1>POST - user {post.userId}</h1>
            <h2>id: {post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </>
    );
};

export default Post;

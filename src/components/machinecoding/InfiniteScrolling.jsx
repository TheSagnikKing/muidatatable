import axios from 'axios'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const InfiniteScrolling = () => {

    const [postId, setPostId] = useState(2)
    const [loader, setLoader] = useState(false)

    const [postData, setPostData] = useState([])

    const loaderRef = useRef()

    const fetchNewPost = useCallback(async () => {
        if (loader) {
            return
        }

        setLoader(true)
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

        setTimeout(() => {
            setPostData([...postData ,...data])
            setLoader(false)
            setPostId((prev) => prev + 1)
        },2000)
        

    }, [postId, loader])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0]
            if (target.isIntersecting) {
                console.log("Next Api Call")
                fetchNewPost()
            }
        })

        if (loaderRef.current) {
            observer.observe(loaderRef.current)
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current)
            }
        }
    }, [fetchNewPost])



    


    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
            setPostData(data)
        }
        fetchPost()
    }, [])

    // console.log(postData)


    return (
        <>
            <main style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", height: "auto", background: "#efefef" }}>

                {
                    postData?.map((post) => {
                        return (
                            <div style={commondivstyle} key={post.id}>
                                <pre style={{ fontSize: "20px", fontWeight: "500" }}>{`${post.postId}  ${post.email}`}</pre>
                            </div>
                        )
                    })
                }

            </main>
            <div ref={loaderRef}>
                {
                    loader && <h2>...Loading...</h2>
                }
                
            </div>
        </>
    )
}

export default InfiniteScrolling


const commondivstyle = {
    border: "1px solid black",
    height: "200px",
    borderRadius: "10px",
    display: "grid",
    placeItems: "center",
}
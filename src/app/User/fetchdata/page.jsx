"use client"
import axios from 'axios'
import { useState } from 'react'
import React from 'react'

const Page = () => {
    const [images, setImages] = useState([])

    const fetchImages = async () => {
        try {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random")
            const data = response.data
            // setImages(data)
            const ans = setImages(data.message)
            console.log(data)
        } catch (error) {
            console.error("something went wrong", error)
        }
    }

    return (
        <>
        <div className='justify-center items-center flex m-5'>
            <button 
                type='button' 
                onClick={fetchImages} 
                className='bg-purple-600 text-gray-100 p-3 rounded-lg'
            >
                Fetch Data
            </button>
        </div>


<div className='p-10' >

    <img src={setImages} alt="" />

  

  
</div>
</>
    )
}

export default Page

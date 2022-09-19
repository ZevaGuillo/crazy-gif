import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


function useFetchGifs( category ) {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImg = await getGifs(category);
        setImages(newImg);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages();
    }, [])


    return {
        images,
        isLoading
    }
}

export default useFetchGifs
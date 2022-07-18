import { useEffect, useState } from 'react';

export const useWindowsSize = () => {

const [dimensions, setDimension] = useState({
    width:window.innerWidth,
    height: window.innerHeight,
})

const hendleWindowResize =() =>{
    setDimension({
        width:window.innerWidth,
        height: window.innerHeight,
    })
}


useEffect(() => {
    window.addEventListener('resize', hendleWindowResize)

    return () => window.removeEventListener('resize', hendleWindowResize)
},[])

 return dimensions
};

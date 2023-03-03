import React from 'react'
import Lottie from 'react-lottie';
import animationData from './loader.json'; // Replace with your own JSON file
import styles from './Loader.module.scss'

const Loader = (props) => {
    const loaderOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const { setIsLoaded} = props

    setTimeout(() => {
        setIsLoaded(true)
    }, 4500)


    return (
        <div>
            <div className={styles.loader}>
                <Lottie
                    options={loaderOptions}
                    height={400}
                    width={400}
                    style={{zIndex: 5000, top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)'}}
                />
            </div>
        </div>
    )
}

export default Loader

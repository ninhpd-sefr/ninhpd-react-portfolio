import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://twitter.com/PhmngNinh3' target='_blank'><BsTwitter /></a>  
            </div>
            <div>
            <a href='https://www.instagram.com/ninhhere/' target='_blank'><BsInstagram /></a>  
            </div>
            <div>
            <a href='https://www.facebook.com/ninhdangpham' target='_blank'><FaFacebookF /></a>  
            </div>
        </div>
    )
}

export default SocialMedia
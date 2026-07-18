import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/forever-assets/assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nesciunt distinctio dolore quae accusantium inventore repellat expedita eos amet, illum culpa rerum asperiores.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facilis quo explicabo voluptates repellendus eos provident! Error magnam sapiente veritatis quae eius odit aperiam ipsum!</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa praesentium consequatur qui. Vel sit inventore amet porro doloremque. Quidem quia officia hic accusantium laboriosam! Delectus inventore soluta pariatur assumenda. Nostrum modi odio illum fugit rem commodi ex expedita quo hic.</p>
            </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugit illo nulla. Culpa, molestiae laudantium. Ipsum error nobis, recusandae quia placeat mollitia sapiente!</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugit illo nulla. Culpa, molestiae laudantium. Ipsum error nobis, recusandae quia placeat mollitia sapiente!</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugit illo nulla. Culpa, molestiae laudantium. Ipsum error nobis, recusandae quia placeat mollitia sapiente!</p>
        </div>
      </div>

        <NewsLetterBox/>

    </div>
  )
}

export default About
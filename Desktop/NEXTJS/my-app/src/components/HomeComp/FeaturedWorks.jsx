import Image from 'next/image'
// import RectImage from '@/assets/Rectangle 32.svg';
// import React from 'react'

// const FeaturedWorks = () => {
//   return (
//     <div className="w-full h-auto  flex flex-col sm:flex-row gap-2 sm:gap-12 py-20 px-65  border-b-2 border-[#E0E0E0]">
//       {/* Image side */}
//       <div className="w-full sm:w-[200px] h-auto sm:h-[200px]  rounded-[6px]">
//         <Image
//           src={RectImage}
//           width={230}
//           height={180}
//           className="rounded-[6px] sm:absolute"
//           alt="my profile picture" />
//       </div>

//       {/* Text and button side */}
//       <div className="w-full md:w-1/2 flex flex-col items-start md:pl-8">
//         <h2 className="text-3xl font-bold mb-4">Designing Dashboards</h2>
//         <div className=' flex items-center justify-between'>
//           <div className='w-[60px] px-4 py-2 bg-[#142850] text-[#FFFFFF] flex items-center justify-center rounded-[20px]'>2020</div>
//           <div className='w-[25%] text-[#8695A4] font-normal flex items-center justify-start'>Dashboard</div>
//         </div>
//         <p className="w-full sm:w-[580px] h-auto sm:h-[93px] text-[#21243D] text-base font-normal">
//           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//         </p>

//       </div>

      
//     </div>
    
//   );
// }

// export default FeaturedWorks
// import Image from 'next/image'
import React from 'react'
import TitleComp from '../common/TitleComp'

import FeaturedCard from './FeaturedCard'


const FeaturedWorks= () => {
  return (
    <section className='w-[344px] sm:w-full mx-auto sm:mx-0 h-auto '>
      <div className='w-full sm:w-[856px] mx-auto'>
        <div className='w-full flex items-start  '>
          <TitleComp title='Featured works' />
        </div>

        <div className='flex flex-col h-auto gap-6'>

          <FeaturedCard title='Designing Dashboards' img='/assets/Rectangle 30.svg' label='Dashboard' btnContent='2020' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

          <FeaturedCard title=' Vibrant Portraits of 2020' img='/assets/Rectangle 32.svg' label='Illustration' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

          <FeaturedCard title='36 Days of Malayalam type' img='/assets/Rectangle 34.svg' label='Typography' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
        </div>
      </div>

    </section>
  )
}

export default FeaturedWorks
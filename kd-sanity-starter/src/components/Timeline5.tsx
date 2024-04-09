import ProfessionalJourneyImage from '@public/professionalJourneyImage.png';
import Image from 'next/image';

const Timeline5 = () => {
  return (
    <div className='self-stretch h-[1108px] px-4 py-[120px] bg-gray-800 flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch justify-center items-center gap-20 inline-flex'>
        <div className='grow shrink basis-0 h-[868px] justify-center items-center gap-10 flex'>
          <div className='grow shrink basis-0 w-[60%] rounded-[32px] justify-center items-center gap-2 flex'>
            <Image
              className='grow shrink basis-0 self-stretch rounded-[32px]'
              src={ProfessionalJourneyImage}
              alt=''
            />
          </div>
          <div className='grow shrink basis-0 flex-col justify-center items-center gap-10 inline-flex'>
            <div className='self-stretch h-[366px] flex-col justify-center items-center gap-10 flex'>
              <div className='self-stretch h-[267px] flex-col justify-start items-start gap-2 flex'>
                <div className="self-stretch text-zinc-100 text-[108px] font-black font-['Playfair Display'] leading-[118.80px]">
                  Professional Journey
                </div>
                <div className="self-stretch text-zinc-100 text-sm font-normal font-['Manrope'] leading-[21px]">
                  With a decade in data engineering, I&apos;ve sculpted data solutions that drive
                  business growth.
                </div>
              </div>
              <div className='self-stretch justify-start items-center gap-10 inline-flex'>
                <div className='grow shrink basis-0 h-[59px] px-12 py-4 bg-teal-600 rounded-lg justify-center items-center gap-1 flex'>
                  <div className='px-1 justify-center items-center gap-2 flex'>
                    <div className="text-center text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                      Contact Lucas
                    </div>
                  </div>
                </div>
                <div className='justify-start items-start gap-4 flex'>
                  <div className='w-6 h-6 relative' />
                  <div className='w-6 h-6 relative' />
                  <div className='w-6 h-6 relative' />
                </div>
              </div>
            </div>
            <div className='self-stretch justify-start items-start gap-10 inline-flex'>
              <div className='grow shrink basis-0 flex-col justify-start items-start inline-flex'>
                <div className='flex justify-between self-stretch py-4 items-center'>
                  <div className="text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                    2018
                  </div>
                  <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 max-w-[90%] inline-flex'>
                    <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                      Developed an award-winning data warehouse for a leading e-commerce platform.
                    </div>
                  </div>
                </div>
                <div className='flex justify-between self-stretch py-4 items-center'>
                  <div className="text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                    2019
                  </div>
                  <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 max-w-[90%] inline-flex'>
                    <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                      Engineered a real-time analytics system for a national healthcare provider.
                    </div>
                  </div>
                </div>
                <div className='flex justify-between self-stretch py-4 items-center'>
                  <div className="text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                    2020
                  </div>
                  <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 max-w-[90%] inline-flex'>
                    <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                      Led the data migration for a merger of two Fortune 500 companies.
                    </div>
                  </div>
                </div>
                <div className='flex justify-between self-stretch py-4 items-center'>
                  <div className="text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                    2021
                  </div>
                  <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 max-w-[90%] inline-flex'>
                    <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                      Optimized machine learning pipelines for a tech startup&apos;s recommendation
                      system.
                    </div>
                  </div>
                </div>
                <div className='flex justify-between self-stretch py-4 items-center'>
                  <div className="text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                    2022
                  </div>
                  <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 max-w-[90%] inline-flex'>
                    <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                      Implemented GDPR-compliant data practices for a European client.
                    </div>
                  </div>
                </div>
                <div className='flex justify-between self-stretch py-4 items-center'>
                  <div className="text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                    2023
                  </div>
                  <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 max-w-[90%] inline-flex'>
                    <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                      Architected a scalable data lake for a multinational media conglomerate.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline5;

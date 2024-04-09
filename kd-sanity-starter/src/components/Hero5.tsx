import Image from 'next/image';
import Image1 from '../../public/hero5image1.png';
import Image2 from '../../public/hero5Image2.png';
import Image3 from '../../public/hero5Image3.png';
import Image4 from '../../public/hero5Image4.png';
import Image5 from '../../public/hero5Image5.png';
import Image6 from '../../public/hero5Image6.png';

const Hero5 = () => {
  return (
    <div className='self-stretch px-6 bg-gray-800 justify-center items-start gap-20 inline-flex'>
      <div className='grow shrink basis-0 h-[900px] justify-center items-start gap-8 flex'>
        <div className='grow shrink basis-0 self-stretch flex-col justify-center items-center gap-6 inline-flex'>
          <div className='h-[406px] flex-col justify-center items-start gap-10 flex'>
            <div className='self-stretch h-[312px] flex-col justify-start items-start gap-6 flex'>
              <div className="self-stretch text-zinc-100 text-7xl font-black font-['Playfair Display'] leading-[77.76px]">
                Hi, I’m Lucas Brenton, Data Engineer.
              </div>
              <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                Crafting data architectures and analytics for impactful insights in various
                industries.
              </div>
            </div>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='px-6 py-4 bg-teal-600 rounded-lg justify-center items-center gap-1 flex'>
                <div className='px-1 justify-center items-center gap-2 flex'>
                  <div className="text-center text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
                    View Projects
                  </div>
                </div>
              </div>
              <div className='px-6 py-4 rounded-lg border border-gray-500 justify-center items-center gap-1 flex'>
                <div className='px-1 justify-center items-center gap-2 flex'>
                  <div className="text-center text-zinc-100 text-sm font-normal font-['Source Sans Pro'] leading-snug">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 self-stretch justify-start items-start gap-4 flex'>
          <div className='w-[280.77px] flex-col justify-start items-start gap-4 inline-flex'>
            <Image className='self-stretch  rounded-2xl' src={Image1} alt='' />
            <Image className='self-stretch  rounded-2xl' src={Image3} alt='' />
            <Image className='self-stretch  rounded-2xl' src={Image5} alt='' />
          </div>
          <div className='w-[280.77px] flex-col justify-start items-start gap-4 inline-flex'>
            <Image className='self-stretch  rounded-2xl' src={Image2} alt='' />
            <Image className='self-stretch  rounded-2xl' src={Image4} alt='' />
            <Image className='self-stretch  rounded-2xl' src={Image6} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;

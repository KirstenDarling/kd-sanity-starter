import Image from 'next/image';
import CircleOne from '../../public/oneCircleOne.png';
import CircleThree from '../../public/oneCircleThree.png';
import CircleTwo from '../../public/oneCircleTwo.png';

const CardRowCircle1 = () => {
  return (
    <div className='self-stretch h-[763px] px-4 py-36 bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[114px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[114px] flex-col justify-center items-start gap-4 flex'>
          <div className="self-stretch text-center text-neutral-100 text-[56px] font-extrabold font-['Playfair Display'] leading-[67.20px]">
            Meet Our Visionaries
          </div>
          <div className="self-stretch text-center text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
            The minds driving urban tech into the future.
          </div>
        </div>
      </div>
      <div className='self-stretch justify-center items-start gap-8 inline-flex'>
        <div className='w-[260px] flex-col justify-start items-center gap-4 inline-flex'>
          <Image className='self-stretch h-64 rounded-[400px]' src={CircleOne} alt='' />
          <div className='self-stretch h-[49px] flex-col justify-start items-center flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Alexa Rydell
            </div>
            <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
              Chief Innovation Officer
            </div>
          </div>
        </div>
        <div className='w-[260px] flex-col justify-start items-center gap-4 inline-flex'>
          <Image className='self-stretch h-64 rounded-[400px]' src={CircleTwo} alt='' />
          <div className='self-stretch h-[49px] flex-col justify-start items-center flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Marco Chen
            </div>
            <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
              Lead Urban Architect
            </div>
          </div>
        </div>
        <div className='w-[260px] flex-col justify-start items-center gap-4 inline-flex'>
          <Image className='self-stretch h-64 rounded-[400px]' src={CircleThree} alt='' />
          <div className='self-stretch h-[49px] flex-col justify-start items-center flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Samira Khan
            </div>
            <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
              Head of Data Science
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRowCircle1;

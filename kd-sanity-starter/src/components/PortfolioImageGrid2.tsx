import Image from 'next/image';
import LummiImage1 from '../../public/image-lummi1.png';
import LummiImage2 from '../../public/imageLummi2.png';
import LummiImage3 from '../../public/imageLummi3.png';
import LummiImage4 from '../../public/imageLummi4.png';
import LummiImage5 from '../../public/imageLummi5.png';
import LummiImage6 from '../../public/imageLummi6.png';

const PortfolioImageGrid2 = () => {
  return (
    <div className='self-stretch h-[1058px] px-4 py-[120px] bg-rose-500 flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[818px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[102px] flex-col justify-start items-center gap-3 flex'>
          <div className="self-stretch text-center text-orange-200 text-[51px] font-bold font-['Syne'] leading-[61.20px]">
            Portfolio Highlights
          </div>
          <div className="self-stretch text-center text-amber-300 text-[22px] font-normal font-['Work Sans'] leading-7">
            A peek into my professional adventures.
          </div>
        </div>
        <div className='self-stretch justify-center items-start gap-6 inline-flex'>
          <Image className='h-[676px] grow shrink basis-0 rounded-2xl' src={LummiImage1} alt='' />
          <div className='baseline flex-wrap grow shrink basis-0 h-[676px] justify-start items-center gap-4 flex'>
            <Image
              className='grow shrink basis-0 max-w-[282px] h-[209px] rounded-2xl'
              src={LummiImage2}
              alt=''
            />
            <Image
              className='grow shrink basis-0 max-w-[282px]  h-[209px] rounded-2xl'
              src={LummiImage3}
              alt=''
            />
            <Image
              className='grow shrink basis-0 max-w-[282px]  h-[209px] rounded-2xl'
              src={LummiImage4}
              alt=''
            />
            <Image
              className='grow shrink basis-0 max-w-[282px]  h-[209px] rounded-2xl'
              src={LummiImage5}
              alt=''
            />
            <Image
              className='grow shrink basis-0   max-w-[580px]  h-[209px] rounded-2xl'
              src={LummiImage6}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImageGrid2;

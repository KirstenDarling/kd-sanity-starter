import Image from 'next/image';
import IntroImage from '../../public/introImage.jpg';

const IntroSection = ({ text }: { text?: string }) => {
  return (
    <div className='introSection flex w-[100vw] h-[80%] bg-white pl-[5%]'>
      <div className='w-[50%] flex flex-col pl-[5%] pt-[5%] z-[1]'>
        <h1 className='text-[32px] font-bold'>
          Hi, my name is Kirsten and I like to bring your ideas to life on the web.
        </h1>
        <p className='mt-[7%] mb-[7%] pl-[7%]'>
          My #1 goal is to help businesses create custom company websites. I can build custom
          websites from scratch, redesign an existing website, or add features to your website such
          as a contact form, image gallery, portfolio section, blog, and more!
        </p>
        <p>Click below to contact me and get started on your new custom website!</p>
        <a href='/corporate'>
          <button className='bg-[#5171ff] p-[2%] text-white font-bold mt-[5%]'>Contact Me!</button>
        </a>
      </div>
      <div className='w-[30%] ml-[15%] flex flex-col z-[1]'>
        <Image
          alt='travel'
          src={IntroImage}
          height={350}
          width={350}
          quality={100}
          className='border-[7px] border-white'
        />
        <p className='ml-[2%]'>
          Photo by&nbsp;
          <a href='https://unsplash.com/@rucksackmag?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            Rucksack Magazine
          </a>
          &nbsp;on&nbsp;
          <a href='https://unsplash.com/photos/macbook-pro-on-white-table-QbVvcO6lr2o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            Unsplash
          </a>
        </p>
      </div>
      <div className='w-[65%] h-[425px] ml-[25%] mt-[3%] mb-[5%] bg-[#f3f3f3] absolute z-[0]'></div>
    </div>
  );
};

export default IntroSection;

import Image from 'next/image';

const RightPictureSection = ({
  subheading,
  heading,
  text,
  buttonText,
  buttonLink,
  image,
}: {
  subheading?: string;
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: any;
}) => {
  return (
    <div className='rightPictureSection flex w-full h-[550px] bg-white pt-[3%]'>
      <div className='w-[55%] h-[200px] ml-[7%] mt-[6%] mb-[5%] mr-[-5%] bg-[#f3f3f3] z-[0] absolute'></div>
      <div className='w-[50%] z-[1]'>
        <Image
          alt='travel'
          src={image}
          quality={100}
          height={400}
          width={400}
          className='border-[7px] border-white ml-[25%] mt-[10%]'
        />
      </div>
      <div className='w-[50%] pt-[2%] z-[1]'>
        <p className='mb-[5%] text-[#5171ff]'>{subheading}</p>
        <h1 className='text-[32px] font-bold'>{heading}</h1>
        <p className='pr-[20%] pl-[5%] pt-[2%]'>{text}</p>
        <a href={buttonLink}>
          <button className='p-2 mt-[5%] bg-[#5171ff] text-white font-bold'>{buttonText}</button>
        </a>
      </div>
    </div>
  );
};

export default RightPictureSection;

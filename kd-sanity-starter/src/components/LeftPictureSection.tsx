import Image from 'next/image';

const LeftPictureSection = ({
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
    <div className='leftPictureSection flex w-full h-[550px] bg-white pt-[3%] pl-[12%]'>
      <div className='w-[50%] z-[1]'>
        <p className='mb-[5%] text-[#5171ff]'>{subheading}</p>
        <h1 className='text-[32px] font-bold'>{heading}</h1>
        <p className='pr-[20%] pl-[5%] pt-[2%]'>{text}</p>

        <a href={buttonLink}>
          <button className='p-2 mt-[5%] bg-[#5171ff] text-white font-bold'>{buttonText}</button>
        </a>
      </div>
      <div className='w-[50%] z-[1]'>
        <Image
          alt='travel'
          src={image}
          quality={100}
          height={400}
          width={400}
          className='border-[7px] border-white mt-[10%]'
        />
      </div>
      <div className='h-[250px] w-[55%] ml-[31%] mt-[3%] mb-[5%] bg-[#f3f3f3] z-[0] absolute'></div>
    </div>
  );
};

export default LeftPictureSection;

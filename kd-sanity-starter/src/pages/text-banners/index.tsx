import Footer1 from '@/components/Footer1';
import Hero3 from '@/components/Hero3';
import NavBar1 from '@/components/NavBar1';
import Nova1 from '../../../public/Nova1.png';

export default function Home() {
  return (
    <div className='w-full h-[4806px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar1
        pageTitle='CityTech'
        linkOneTitle='Dashboard'
        linkTwoTitle='Innovations'
        linkThreeTitle='Our Crew'
        buttonText='Explore Now'
        backgroundColor='bg-black'
        textColor='text-white'
      />
      <Hero3
        heading="I'm Nova, Cybernetic Enthusiast."
        subheading='Navigate the neon-lit streets.'
        buttonText='Join the Odyssey'
        image={Nova1}
      />
      <Footer1 />
    </div>
  );
}

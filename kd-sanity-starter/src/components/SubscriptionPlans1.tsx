import Image from 'next/image';
import ApartmentIcon from '../../public/ApartmentIcon.svg';
import AlienIcon from '../../public/alienIcon.svg';
import CheckCircleIcon from '../../public/checkCircleIcon.svg';
import PlaceIcon from '../../public/planeIcon.svg';
import SwitchIcon from '../../public/switchIcon.svg';

const SubscriptionPlans1 = () => {
  return (
    <div className='self-stretch h-[913px] px-4 py-[120px] bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[145px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[145px] flex-col justify-center items-start gap-4 flex'>
          <div className="self-stretch text-center text-neutral-100 text-[56px] font-extrabold font-['Playfair Display'] leading-[67.20px]">
            Subscription Tiers
          </div>
          <div className="self-stretch text-center text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
            Choose the plan that aligns with your urban tech needs and start transforming your city.
          </div>
        </div>
      </div>
      <div className='self-stretch justify-center items-center gap-4 inline-flex'>
        <div className='grow shrink basis-0 p-8 bg-gray-800 flex-col justify-center items-start gap-6 inline-flex'>
          <div className='self-stretch h-[131px] flex-col justify-start items-start gap-1 flex'>
            <div className='w-8 h-8 relative'>
              <Image alt='' src={PlaceIcon} />
            </div>
            <div className="self-stretch text-neutral-100 text-4xl font-extrabold font-['Playfair Display'] leading-[46.80px]">
              Starter
            </div>
            <div className="self-stretch text-neutral-100 text-sm font-normal font-['Fira Sans'] leading-snug">
              Ideal for personal projects or small-scale initiatives
            </div>
          </div>
          <div className='self-stretch justify-start items-center gap-2 inline-flex'>
            <div className="text-neutral-100 text-4xl font-extrabold font-['Playfair Display'] leading-[46.80px]">
              $29
            </div>
            <div className='flex-col justify-center items-start inline-flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
                each month
              </div>
              <div className='justify-start items-center gap-2 inline-flex'>
                <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
                  billed annually
                </div>
                <div className='h-4 p-0.5  justify-end items-center gap-2 flex'>
                  <div className='w-3 h-3 relative '>
                    <Image
                      height={25}
                      width={25}
                      alt=''
                      src={SwitchIcon}
                      className='max-w-[none]'
                      style={{ height: '25px !important', width: '25px !important' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch h-[120px] flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                Project Analysis
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                10 GB Data Insights
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                Standard Support
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                Forum Access
              </div>
            </div>
          </div>
          <div className='self-stretch px-6 py-4 border border-gray-400 justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-neutral-100 text-sm font-normal font-['Fira Sans'] leading-snug">
                Get Starter
              </div>
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 px-8 py-10 bg-black border-2 border-purple-500 flex-col justify-center items-start gap-6 inline-flex'>
          <div className='flex flex-row space-between w-[100%]'>
            <div className='w-8 h-8 relative'>
              <Image alt='' src={AlienIcon} />
            </div>
            <div className='p-2 bg-purple-500 justify-center items-center gap-2 inline-flex'>
              <div className="text-white text-xs font-normal font-['Fira Sans'] leading-tight">
                Best Value
              </div>
            </div>
          </div>
          <div className='self-stretch h-[109px] flex-col justify-start items-start gap-1 flex'>
            <div className="self-stretch text-neutral-100 text-4xl font-extrabold font-['Playfair Display'] leading-[46.80px]">
              Business
            </div>
            <div className="self-stretch text-neutral-100 text-sm font-normal font-['Fira Sans'] leading-snug">
              Optimized for SMEs seeking to leverage urban tech
            </div>
          </div>
          <div className='self-stretch justify-start items-center gap-2 inline-flex'>
            <div className='justify-start items-start gap-1 flex'>
              <div className="text-neutral-100 text-4xl font-extrabold font-['Playfair Display'] leading-[46.80px]">
                $49
              </div>
              <div className="w-[23px] h-7 text-neutral-100 text-lg font-bold font-['Manrope'] leading-[25.20px]">
                99
              </div>
            </div>
            <div className='flex-col justify-center items-start inline-flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
                each month
              </div>
              <div className='justify-start items-center gap-2 inline-flex'>
                <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
                  billed annually
                </div>
                <div className='h-4 p-0.5  justify-end items-center gap-2 flex'>
                  <div className='w-3 h-3 relative '>
                    <Image
                      height={25}
                      width={25}
                      alt=''
                      src={SwitchIcon}
                      className='max-w-[none]'
                      style={{ height: '25px !important', width: '25px !important' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch h-[120px] flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                Priority Project Queue
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                50 GB Data Insights
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                Priority Support
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                API Integration
              </div>
            </div>
          </div>
          <div className='self-stretch px-6 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-white text-sm font-normal font-['Fira Sans'] leading-snug">
                Get Business
              </div>
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 p-8 bg-gray-800 flex-col justify-center items-start gap-6 inline-flex'>
          <div className='self-stretch h-[131px] flex-col justify-start items-start gap-1 flex'>
            <div className='w-8 h-8 relative'>
              <Image alt='' src={ApartmentIcon} />
            </div>
            <div className="self-stretch text-neutral-100 text-4xl font-extrabold font-['Playfair Display'] leading-[46.80px]">
              Enterprise
            </div>
            <div className="self-stretch text-neutral-100 text-sm font-normal font-['Fira Sans'] leading-snug">
              Tailored for large-scale operations and city-wide deployment
            </div>
          </div>
          <div className='self-stretch justify-start items-center gap-2 inline-flex'>
            <div className="text-neutral-100 text-4xl font-extrabold font-['Playfair Display'] leading-[46.80px]">
              $99
            </div>
            <div className='flex-col justify-center items-start inline-flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
                each month
              </div>
              <div className='justify-start items-center gap-2 inline-flex'>
                <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
                  billed annually
                </div>
                <div className='h-[25px] w-[25px] gap-2 flex'>
                  <div className='w-3 h-3 relative '>
                    <Image
                      height={25}
                      width={25}
                      alt=''
                      src={SwitchIcon}
                      className='max-w-[none]'
                      style={{ height: '25px !important', width: '25px !important' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch h-[120px] flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                Dedicated Account Manager
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                Unlimited Data Insights
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                24/7 Premium Support
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative'>
                <Image src={CheckCircleIcon} alt='' />
              </div>
              <div className="grow shrink basis-0 text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
                Enterprise Forum
              </div>
            </div>
          </div>
          <div className='self-stretch px-6 py-4 border border-gray-400 justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-neutral-100 text-sm font-normal font-['Fira Sans'] leading-snug">
                Get Enterprise
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans1;

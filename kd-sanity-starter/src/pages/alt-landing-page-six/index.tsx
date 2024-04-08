// import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-[1280px] h-[4106px] bg-white flex-col justify-start items-center inline-flex'>
      <div className='self-stretch p-2 justify-between items-center inline-flex'>
        <div className='grow shrink basis-0 h-[51px] px-2 py-4 bg-black rounded-[64px] justify-between items-center flex'>
          <div className='px-4 justify-center items-center gap-4 flex'>
            <div className='w-[60px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Synopsis
              </div>
            </div>
            <div className='w-[69px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Code Vault
              </div>
            </div>
            <div className='w-[57px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Hackers
              </div>
            </div>
          </div>
          <div className='justify-center items-center gap-2 flex'>
            <div className='w-6 h-6 relative'></div>
            <div className="text-neutral-100 text-base font-normal font-['Alegreya'] leading-normal">
              ShadowBytes
            </div>
          </div>
          <div className='px-4 justify-center items-center gap-4 flex'>
            <div className='w-[66px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Manifesto
              </div>
            </div>
            <div className='w-[104px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                @darkpurplehack
              </div>
            </div>
            <div className='w-[76px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Infiltrate Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-stretch bg-gray-100 justify-center items-center inline-flex'>
        <div className='grow shrink basis-0 px-12 py-[120px] flex-col justify-center items-center gap-8 inline-flex'>
          <div className='self-stretch h-[302px] flex-col justify-center items-start gap-10 flex'>
            <div className='self-stretch h-[203px] flex-col justify-center items-start gap-4 flex'>
              <div className="self-stretch text-zinc-900 text-7xl font-extrabold font-['Alegreya'] leading-[77.76px]">
                Unveil the Digital Shadows
              </div>
              <div className="self-stretch text-zinc-800 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
                Piercing through cybersecurity.
              </div>
            </div>
            <div className='self-stretch px-12 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
              <div className='px-1 justify-center items-center gap-2 flex'>
                <div className="text-center text-white text-lg font-normal font-['Alegreya'] leading-[27px]">
                  Initiate Your Journey
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 h-[725px] justify-center items-center gap-2 flex'>
          {/* <Image
            className='grow shrink basis-0 self-stretch'
            src='https://via.placeholder.com/640x725'
          /> */}
        </div>
      </div>
      <div className='self-stretch h-[477px] px-4 py-36 bg-black justify-center items-center gap-12 inline-flex'>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
          <div className="self-stretch text-purple-500 text-4xl font-extrabold font-['Alegreya'] leading-[46.80px]">
            Our Ethos
          </div>
          <div className='self-stretch justify-start items-start gap-8 inline-flex'>
            <div className="grow shrink basis-0 text-neutral-100 text-[56px] font-extrabold font-['Alegreya'] leading-[67.20px]">
              Crafting the Cyber Narrative
            </div>
            <div className="grow shrink basis-0 h-[93px] text-zinc-300 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
              Innovation through every byte.
            </div>
          </div>
        </div>
      </div>
      <div className='self-stretch h-[1125px] px-4 py-40 bg-black flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[805px] flex-col justify-center items-center gap-10 flex'>
          <div className='self-stretch h-[101px] flex-col justify-start items-center gap-3 flex'>
            <div className="self-stretch text-center text-neutral-100 text-[56px] font-extrabold font-['Alegreya'] leading-[67.20px]">
              Stealth Operations
            </div>
            <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
              Navigate with unseen agility.
            </div>
          </div>
          <div className='self-stretch justify-center items-center gap-10 inline-flex'>
            <div className='grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex'>
              <div className='self-stretch justify-start items-start gap-4 inline-flex'>
                <div className='w-8 h-8 relative'></div>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                  <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                    Advanced Algorithms
                  </div>
                  <div className="self-stretch text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                    Decoding complexities, simplifying solutions.
                  </div>
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-4 inline-flex'>
                <div className='w-8 h-8 relative'></div>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                  <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                    Secure Protocols
                  </div>
                  <div className="self-stretch text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                    A fortress of code guarding your data.
                  </div>
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-4 inline-flex'>
                <div className='w-8 h-8 relative'></div>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                  <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                    User Anonymity
                  </div>
                  <div className="self-stretch text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                    Your identity cloaked in the network’s shadows.
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[342.67px] h-[664px] relative'>
              {/* <Image
                className='w-[358px] h-[682.67px] left-[-7.67px] top-[-9px] absolute'
                src='https://via.placeholder.com/358x683'
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className='self-stretch h-[939px] px-4 py-24 bg-black flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[747px] flex-col justify-center items-center gap-10 flex'>
          <div className="self-stretch text-neutral-100 text-7xl font-extrabold font-['Alegreya'] leading-[77.76px]">
            Commence the Protocol
          </div>
          <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
            <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Alegreya'] leading-[118.80px]">
              1
            </div>
            <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
              <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                Encryption Keys
              </div>
              <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
                Generate unbreakable keys, secure your code.
              </div>
            </div>
          </div>
          <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
            <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Alegreya'] leading-[118.80px]">
              2
            </div>
            <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
              <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                System Penetration
              </div>
              <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
                Test defenses, exploit vulnerabilities effectively.
              </div>
            </div>
          </div>
          <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
            <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Alegreya'] leading-[118.80px]">
              3
            </div>
            <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
              <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                Data Extraction
              </div>
              <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
                Retrieve critical intel with precision operations.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-stretch h-[686px] px-4 py-[120px] flex-col justify-center items-center flex'>
        {/* <Image className='w-[1280px] h-[686px]' src='https://via.placeholder.com/1280x686' /> */}
        <div className='self-stretch h-[446px] p-8 bg-black flex-col justify-center items-center gap-4 flex'>
          <div className='self-stretch h-[82px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-neutral-100 text-4xl font-extrabold font-['Alegreya'] leading-[46.80px]">
              Enlist Now
            </div>
            <div className="self-stretch text-center text-zinc-300 text-lg font-normal font-['Alegreya'] leading-[27px]">
              Join the Shadow Network!
            </div>
          </div>
          <div className='self-stretch px-2 py-4 bg-gray-800 border border-gray-600 justify-center items-center gap-3 inline-flex'>
            <div className='w-6 h-6 relative'></div>
            <div className="text-center text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
              Proceed with OAuth
            </div>
          </div>
          <div className='self-stretch justify-center items-center gap-6 inline-flex'>
            <div className='w-[178.50px] h-px relative bg-gray-600'></div>
            <div className="text-center text-zinc-300 text-xs font-normal font-['Alegreya'] leading-tight">
              or
            </div>
            <div className='w-[178.50px] h-px relative bg-gray-600'></div>
          </div>
          <div className='self-stretch h-[142px] flex-col justify-start items-center gap-2 flex'>
            <div className='self-stretch h-20 flex-col justify-center items-start gap-1 flex'>
              <div className="self-stretch text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
                Username or Email
              </div>
              <div className='self-stretch p-4 bg-black rounded border border-gray-600 justify-start items-center gap-1 inline-flex'>
                <div className='grow shrink basis-0 h-[22px] px-1 justify-start items-center gap-2 flex'>
                  <div className="text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                    Enter Access Credentials
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch px-6 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
              <div className='grow shrink basis-0 h-[22px] px-1 justify-center items-center gap-2 flex'>
                <div className="grow shrink basis-0 text-center text-white text-sm font-normal font-['Alegreya'] leading-snug">
                  Continue with Secrecy
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch text-center text-zinc-300 text-xs font-normal font-['Alegreya'] leading-tight">
            Consent to our Cryptic Terms and Covert Policy
          </div>
        </div>
      </div>
      <div className='self-stretch px-8 py-12 bg-black justify-between items-center inline-flex'>
        <div className='grow shrink basis-0 h-[58px] justify-between items-center flex'>
          <div className='flex-col justify-center items-center gap-1 inline-flex'>
            <div className='w-8 h-8 relative'></div>
            <div className="text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
              ShadowBytes
            </div>
          </div>
          <div className='flex-col justify-center items-end gap-2 inline-flex'>
            <div className='justify-start items-center gap-8 inline-flex'>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Dossier
              </div>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Manifesto
              </div>
              <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Hackers
              </div>
            </div>
            <div className="text-zinc-300 text-xs font-normal font-['Alegreya'] leading-tight">
              All rights reserved 2024
            </div>
          </div>
          <div className='justify-start items-start gap-4 flex'>
            <div className='w-6 h-6 relative'></div>
            <div className='w-6 h-6 relative'></div>
            <div className='w-6 h-6 relative'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectAccordion5 = () => {
  return (
    <div className='self-stretch h-[1202px] px-16 py-[120px] bg-gray-800 flex-col justify-start items-center gap-16 flex'>
      <div className='self-stretch h-[962px] flex-col justify-start items-start gap-16 flex'>
        <div className='self-stretch h-[174px] flex-col justify-center items-start gap-6 flex'>
          <div className="self-stretch text-zinc-100 text-[108px] font-black font-['Playfair Display'] leading-[118.80px]">
            Project Showcase
          </div>
          <div className="self-stretch text-white text-[22px] font-normal font-['Source Sans Pro'] leading-[30.80px]">
            A collection of high-impact projects demonstrating my data engineering prowess.
          </div>
        </div>
        <div className='self-stretch h-[724px] flex-col justify-center items-start gap-10 flex'>
          <div className='self-stretch bg-gray-800 justify-start items-center gap-8 inline-flex'>
            {/* <Image className="w-[640px] h-[656px] rounded-[32px]" src="https://via.placeholder.com/640x656" /> */}
            <div className='w-[640px] h-[656px] opacity-10 bg-zinc-400 rounded-[32px]' />
            {/* <Image className="w-[640px] h-[656px] rounded-[32px]" src="https://via.placeholder.com/640x656" /> */}
          </div>
          <div className='p-4 bg-gray-800 rounded-[100px] border border-slate-600 justify-center items-center gap-2 inline-flex'>
            <div className='w-4 h-4 relative' />
          </div>
          <div className='p-4 bg-gray-800 rounded-[100px] border border-slate-600 justify-center items-center gap-2 inline-flex'>
            <div className='w-4 h-4 relative' />
          </div>
          <div className='p-2.5 justify-center items-center gap-[9px] inline-flex'>
            <div className='w-2 h-2 bg-zinc-100 rounded-full' />
            <div className='w-2 h-2 bg-slate-600 rounded-full' />
            <div className='w-2 h-2 bg-slate-600 rounded-full' />
            <div className='w-2 h-2 bg-slate-600 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAccordion5;

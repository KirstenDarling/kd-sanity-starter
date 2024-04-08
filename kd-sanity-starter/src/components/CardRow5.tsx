const CardRow5 = () => {
  return (
    <div className='self-stretch h-[489px] px-4 py-[120px] bg-gray-800 flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[249px] flex-col justify-start items-start gap-8 flex'>
        <div className='self-stretch h-[110px] flex-col justify-start items-start gap-3 flex'>
          <div className="self-stretch text-zinc-100 text-[56px] font-black font-['Playfair Display'] leading-[67.20px]">
            Data Mastery
          </div>
          <div className="self-stretch text-white text-[22px] font-normal font-['Source Sans Pro'] leading-[30.80px]">
            Innovative solutions tailored to empower decision-making.
          </div>
        </div>
        <div className='self-stretch justify-center items-start gap-6 inline-flex'>
          <div className='grow shrink basis-0 px-6 py-4 bg-zinc-700 rounded-[32px] flex-col justify-start items-start gap-1 inline-flex'>
            <div className="self-stretch text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
              Cloud Expertise
            </div>
            <div className="self-stretch text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
              Migrating and managing petabyte-scale datasets in the cloud environment.
            </div>
          </div>
          <div className='grow shrink basis-0 px-6 py-4 bg-zinc-700 rounded-[32px] flex-col justify-start items-start gap-1 inline-flex'>
            <div className="self-stretch text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
              Real-time Analytics
            </div>
            <div className="self-stretch text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
              Building systems that provide instant insights from live data streams.
            </div>
          </div>
          <div className='grow shrink basis-0 px-6 py-4 bg-zinc-700 rounded-[32px] flex-col justify-start items-start gap-1 inline-flex'>
            <div className="self-stretch text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
              Data Security
            </div>
            <div className="self-stretch text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
              Ensuring the integrity and confidentiality of sensitive information.
            </div>
          </div>
          <div className='grow shrink basis-0 px-6 py-4 bg-zinc-700 rounded-[32px] flex-col justify-start items-start gap-1 inline-flex'>
            <div className="self-stretch text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
              Automation
            </div>
            <div className="self-stretch text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
              Creating pipelines that efficiently process and analyze data.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRow5;

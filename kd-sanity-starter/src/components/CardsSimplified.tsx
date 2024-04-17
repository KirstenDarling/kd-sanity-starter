const CardsSimplified = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='grow shrink basis-0 px-6 py-4 bg-zinc-700 rounded-[32px] flex-col justify-start items-start gap-1 inline-flex'>
      <div className="self-stretch text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
        {title}
      </div>
      <div className="self-stretch text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
        {text}
      </div>
    </div>
  );
};

export default CardsSimplified;

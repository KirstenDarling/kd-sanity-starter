const FAQQuestion = ({ questionText }: { questionText: string }) => {
  return (
    <div className='self-stretch h-[65px] border-b border-gray-600 flex-col justify-start items-start flex'>
      <div className='self-stretch py-5 justify-start items-center gap-3 inline-flex'>
        <div className="grow shrink basis-0 text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
          {questionText}
        </div>
        <div className='w-6 h-6 relative' />
      </div>
    </div>
  );
};

export default FAQQuestion;

import FAQQuestion from './FAQQuestion';

const FAQSection = ({
  title,
  subtitle,
  questions,
  footerTitle,
  footerText,
  footerCTAButtonText,
}: {
  title?: string;
  subtitle?: string;
  questions: { questionText: string }[];
  footerTitle?: string;
  footerText?: string;
  footerCTAButtonText?: string;
}) => {
  return (
    <div className='self-stretch h-[981px] px-[10rem] py-[120px] bg-black flex-col justify-start items-center gap-20 flex'>
      <div className='self-stretch h-[741px] flex-col justify-start items-center gap-[72px] flex'>
        <div className='self-stretch h-[118px] flex-col justify-start items-start gap-6 flex'>
          <div className="self-stretch text-neutral-100 text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]">
            {title}
          </div>
          <div className="self-stretch text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
            {subtitle}
          </div>
        </div>
        <div className='self-stretch h-[325px] flex-col justify-start items-start flex'>
          {questions.map((question, index) => (
            <FAQQuestion key={index} questionText={question.questionText} />
          ))}
        </div>
        <div className='self-stretch h-[154px] flex-col justify-center items-start gap-6 flex'>
          <div className='self-stretch h-[90px] flex-col justify-start items-start gap-4 flex'>
            <div className="self-stretch text-neutral-100 text-4xl font-normal font-['Fugaz One'] leading-[46.80px]">
              {footerTitle}
            </div>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              {footerText}
            </div>
          </div>
          <div className='px-4 py-2 bg-white rounded border border-zinc-300 justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-zinc-950 text-sm font-medium font-['Inter'] leading-normal">
                {footerCTAButtonText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

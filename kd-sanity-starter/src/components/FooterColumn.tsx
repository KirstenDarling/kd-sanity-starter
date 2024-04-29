const FooterColumn = ({ links }: { links: { link: string; URL: string }[] }) => {
  return (
    <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
      {links.map(({ link, URL }, index) => (
        <div
          key={index}
          className="text-zinc-900 text-sm font-normal font-['Fira Sans'] leading-snug"
        >
          {URL ? (
            <a href={URL} className='hover:underline'>
              {link}
            </a>
          ) : (
            link
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterColumn;

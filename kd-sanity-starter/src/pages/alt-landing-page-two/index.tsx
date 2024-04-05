import HeartIcon from '@public/Icon.svg';
import ImageLummiGroup1 from '@public/ImageLummiGroup1.png';
import ImageLummiGroup2 from '@public/ImageLummiGroup2.png';
import ImageLummiGroup3 from '@public/ImageLummiGroup3.png';
import InstagramIcon from '@public/InstagramLogo.svg';
import LinkedInIcon from '@public/LinkedinLogo.svg';
import TwitterIcon from '@public/TwitterLogo.svg';
import CodeGrooveIcon from '@public/codeGrooveIcon.svg';
import ImageLummi1 from '@public/image-lummi1.png';
import ImageLummi2 from '@public/imageLummi2.png';
import ImageLummi3 from '@public/imageLummi3.png';
import ImageLummi4 from '@public/imageLummi4.png';
import ImageLummi5 from '@public/imageLummi5.png';
import ImageLummi6 from '@public/imageLummi6.png';

import Image from 'next/image';
import mushoStyles from '../../styles/musho.module.css';

export default function Home() {
  return (
    <div className={mushoStyles.mushoVibrant}>
      <div className={mushoStyles.typeCenteredNav}>
        <div className={mushoStyles.brand}>
          <Image className={mushoStyles.icon} alt='Icon' src={CodeGrooveIcon} />
          <div className={mushoStyles.brandName}>CodeGroove</div>
        </div>
        <div className={mushoStyles.navLinks}>
          <div className={mushoStyles.textContainer}>
            <button className={mushoStyles.CTA}>Explore My Work</button>
          </div>
        </div>
        <div className={mushoStyles.div}>
          <div className={mushoStyles.navLink}>
            <div className={mushoStyles.navLabel}>Start</div>
          </div>
          <div className={mushoStyles.navLink}>
            <div className={mushoStyles.navLabel}>Profile</div>
          </div>
          <div className={mushoStyles.navLink}>
            <div className={mushoStyles.navLabel}>Collaborators</div>
          </div>
        </div>
      </div>
      <div className={mushoStyles.typeSimpleTitle}>
        <div className={mushoStyles.contentWrapper}>
          <div className={mushoStyles.copyComponent}>
            <div className={mushoStyles.headingText}>
              <div className={mushoStyles.heading}>Crafting Code Creatively</div>
              <div className={mushoStyles.subheading}>Diving deep into development.</div>
            </div>
            <div className={mushoStyles.CTAButton}>
              <div className={mushoStyles.textContainer}>
                <button className={mushoStyles.textWrapper}>See Projects</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={mushoStyles.typeBigStatement}>
        <div className={mushoStyles.textContent}>
          <div className={mushoStyles.benefitHeading}>Creative Ethos</div>
          <p className={mushoStyles.p}>
            Fueling innovation with playful designs and robust code that encapsulate my journey as a
            mobile engineer.
          </p>
        </div>
      </div>
      <div className={mushoStyles.typeSuperGallery}>
        <div className={mushoStyles.container}>
          <div className={mushoStyles.headingContainer}>
            <div className={mushoStyles.heading2}>Portfolio Highlights</div>
            <p className={mushoStyles.subheading2}>A peek into my professional adventures.</p>
          </div>
          <div className={mushoStyles.showcaseContainer}>
            <Image className={mushoStyles.imageLummi} alt='Image lummi' src={ImageLummi1} />
            <div className={mushoStyles.showcaseGrid}>
              <Image className={mushoStyles.img} alt='Image lummi' src={ImageLummi2} />
              <Image className={mushoStyles.img} alt='Image lummi' src={ImageLummi3} />
              <Image className={mushoStyles.img} alt='Image lummi' src={ImageLummi4} />
              <Image className={mushoStyles.img} alt='Image lummi' src={ImageLummi5} />
              <Image className={mushoStyles.img} alt='Image lummi' src={ImageLummi6} />
            </div>
          </div>
        </div>
      </div>
      <div className={mushoStyles.propertySimple}>
        <div className={mushoStyles.headingTextWrapper}>
          <div className={mushoStyles.headingText2}>
            <div className={mushoStyles.heading3}>Making Magic Happen</div>
            <p className={mushoStyles.subheading2}>A snapshot of my development process.</p>
          </div>
        </div>
        <div className={mushoStyles.stepsGrid}>
          <div className={mushoStyles.cards}>
            <Image className={mushoStyles.imageLummi2} alt='Image lummi' src={ImageLummiGroup1} />
            <div className={mushoStyles.copy}>
              <div className={mushoStyles.step}>Step 1</div>
              <div className={mushoStyles.featureTitle}>Ideation Phase</div>
              <p className={mushoStyles.featureDescription}>
                Conceptualizing the user experience with a touch of whimsy and technical prowess.
              </p>
            </div>
          </div>
          <div className={mushoStyles.cards}>
            <Image className={mushoStyles.imageLummi2} alt='Image lummi' src={ImageLummiGroup2} />
            <div className={mushoStyles.copy}>
              <div className={mushoStyles.step}>Step 2</div>
              <div className={mushoStyles.featureTitle}>Code in Action</div>
              <p className={mushoStyles.featureDescription}>
                Breathing life into ideas with elegant algorithms and swift keystrokes.
              </p>
            </div>
          </div>
          <div className={mushoStyles.cards}>
            <Image className={mushoStyles.imageLummi2} alt='Image lummi' src={ImageLummiGroup3} />
            <div className={mushoStyles.copy}>
              <div className={mushoStyles.step}>Step 3</div>
              <div className={mushoStyles.featureTitle}>Final Touches</div>
              <p className={mushoStyles.featureDescription}>
                Polishing features to ensure a delightful and bug-free user journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={mushoStyles.typeBigImage}>
        <div className={mushoStyles.benefitsImageLummi} />
        <div className={mushoStyles.benefitsCopy}>
          <div className={mushoStyles.copyComponent2}>
            <div className={mushoStyles.headingText2}>
              <div className={mushoStyles.heading4}>Let&#39;s Collaborate!</div>
              <p className={mushoStyles.subheading3}>Ready to build something amazing together?</p>
            </div>
            <div className={mushoStyles.CTAButton}>
              <div className={mushoStyles.textContainer}>
                <button className={mushoStyles.textWrapper}>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={mushoStyles.typeHorizontal}>
        <div className={mushoStyles.content}>
          <div className={mushoStyles.brand2}>
            <Image className={mushoStyles.icon2} alt='Icon' src={HeartIcon} />
            <div className={mushoStyles.brandName}>CodeGroove</div>
          </div>
          <div className={mushoStyles.links}>
            <div className={mushoStyles.menu}>
              <div className={mushoStyles.navLabel2}>Start</div>
              <div className={mushoStyles.navLabel2}>Profile</div>
              <div className={mushoStyles.navLabel2}>Collaborators</div>
            </div>
            <div className={mushoStyles.legal}>All rights reserved 2024</div>
          </div>
          <div className='flex flex-row pr-[32px]'>
            <Image className={`mr-[10%] ${mushoStyles.social}`} alt='Social' src={TwitterIcon} />
            <Image className={`mr-[10%] ${mushoStyles.social}`} alt='Social' src={InstagramIcon} />
            <Image className={`mr-[10%] ${mushoStyles.social}`} alt='Social' src={LinkedInIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

import mushoStyles from '../../styles/musho.module.css';

export default function Home() {
  return (
    <div className={mushoStyles.mushoVibrant}>
      <div className={mushoStyles.typeCenteredNav}>
        <div className={mushoStyles.brand}>
          {/* <img className={mushoStyles.icon} alt='Icon' src='icon.svg' /> */}
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
            {/* <img className={mushoStyles.imageLummi} alt='Image lummi' src='image-lummi.png' /> */}
            <div className={mushoStyles.showcaseGrid}>
              {/* <img className={mushoStyles.img} alt='Image lummi' src='image.png' />
              <img className={mushoStyles.img} alt='Image lummi' src='image-lummi-2.png' />
              <img className={mushoStyles.img} alt='Image lummi' src='image-lummi-3.png' />
              <img className={mushoStyles.img} alt='Image lummi' src='image-lummi-4.png' />
              <img className={mushoStyles.img} alt='Image lummi' src='image-lummi-5.png' /> */}
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
            {/* <img className={mushoStyles.imageLummi2} alt='Image lummi' src='image-lummi-6.png' /> */}
            <div className={mushoStyles.copy}>
              <div className={mushoStyles.step}>Step 1</div>
              <div className={mushoStyles.featureTitle}>Ideation Phase</div>
              <p className={mushoStyles.featureDescription}>
                Conceptualizing the user experience with a touch of whimsy and technical prowess.
              </p>
            </div>
          </div>
          <div className={mushoStyles.cards}>
            {/* <img className={mushoStyles.imageLummi2} alt='Image lummi' src='image-lummi-7.png' /> */}
            <div className={mushoStyles.copy}>
              <div className={mushoStyles.step}>Step 2</div>
              <div className={mushoStyles.featureTitle}>Code in Action</div>
              <p className={mushoStyles.featureDescription}>
                Breathing life into ideas with elegant algorithms and swift keystrokes.
              </p>
            </div>
          </div>
          <div className={mushoStyles.cards}>
            {/* <img className={mushoStyles.imageLummi2} alt='Image lummi' src='image-lummi-8.png' /> */}
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
            {/* <img className={mushoStyles.icon2} alt='Icon' src='image.svg' /> */}
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
          {/* <img className={mushoStyles.social} alt='Social' src='social.svg' /> */}
        </div>
      </div>
    </div>
  );
}

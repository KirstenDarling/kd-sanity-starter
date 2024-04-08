// import Image from 'next/image';
import AltFourstyles from '../../styles/altLandingPageFour.module.css';

export default function Home() {
  return (
    <div className={AltFourstyles.modernStudy}>
      <div className={AltFourstyles.typeLightBubble}>
        <div className={AltFourstyles.bubbleContainer}>
          <div className={AltFourstyles.navLinks}>
            <div className={AltFourstyles.navLink}>
              <div className={AltFourstyles.textWrapper}>Welcome</div>
            </div>
            <div className={AltFourstyles.navLink}>
              <div className={AltFourstyles.textWrapper}>Our Spaces</div>
            </div>
            <div className={AltFourstyles.navLink}>
              <div className={AltFourstyles.textWrapper}>Our Story</div>
            </div>
          </div>
          <div className={AltFourstyles.navLinks}>
            <div className={AltFourstyles.navLink}>
              <div className={AltFourstyles.textWrapper}>Learn More</div>
            </div>
            <div className={AltFourstyles.navLink}>
              <div className={AltFourstyles.textWrapper}>@cyberstudyhall</div>
            </div>
            <div className={AltFourstyles.navLink}>
              <div className={AltFourstyles.textWrapper}>Get in Touch</div>
            </div>
          </div>
          <div className={AltFourstyles.brand}>
            {/* <Image className={AltFourstyles.img} alt='Icon' src='icon.svg' /> */}
            <div className={AltFourstyles.brandName}>CyberStudy Cafe</div>
          </div>
        </div>
      </div>
      {/* <Image
        className={AltFourstyles.typeFullImage}
        alt='Type full image'
        src='type-full-image-background-aligned-left.png'
      /> */}
      <div className={AltFourstyles.typeImage}>
        {/* <Image
          className={AltFourstyles.imageLummi}
          alt='Image lummi'
          src='image-lummi-luminance-dark.png'
        /> */}
        <div className={AltFourstyles.overlay} />
        <div className={AltFourstyles.textContent}>
          <div className={AltFourstyles.heading}>Study anytime, anywhere.</div>
          <p className={AltFourstyles.description}>A new era of online learning.</p>
        </div>
      </div>
      <div className={AltFourstyles.typeGridWith}>
        <div className={AltFourstyles.headingContainer}>
          <div className={AltFourstyles.div}>Comfort &amp; Convenience</div>
          <p className={AltFourstyles.descriptiveSubtitle}>Study in the comfort of cyber space.</p>
        </div>
        <div className={AltFourstyles.featureGrid}>
          <div className={AltFourstyles.cards}>
            {/* <Image className={AltFourstyles.imageLummi2} alt='Image lummi' src='image-lummi.png' /> */}
            <div className={AltFourstyles.copy}>
              <div className={AltFourstyles.featureTitle}>24/7 Access</div>
              <p className={AltFourstyles.featureDescription}>Study at any hour, day or night.</p>
            </div>
          </div>
          <div className={AltFourstyles.cards}>
            {/* <Image className={AltFourstyles.imageLummi2} alt='Image lummi' src='image.png' /> */}
            <div className={AltFourstyles.copy}>
              <div className={AltFourstyles.featureTitle}>Global Community</div>
              <div className={AltFourstyles.featureDescription}>
                Connect with learners worldwide.
              </div>
            </div>
          </div>
          <div className={AltFourstyles.cards}>
            {/* <Image
              className={AltFourstyles.imageLummi2}
              alt='Image lummi'
              src='image-lummi-2.png'
            /> */}
            <div className={AltFourstyles.copy}>
              <div className={AltFourstyles.featureTitle}>Tech-Enabled</div>
              <p className={AltFourstyles.featureDescription}>Advanced tools at your fingertips.</p>
            </div>
          </div>
          <div className={AltFourstyles.cards}>
            <div className={AltFourstyles.imageLummi3} />
            <div className={AltFourstyles.copy}>
              <div className={AltFourstyles.featureTitle}>Expert Support</div>
              <p className={AltFourstyles.featureDescription}>
                Guidance from online study experts.
              </p>
            </div>
          </div>
          <div className={AltFourstyles.cards}>
            {/* <Image
              className={AltFourstyles.imageLummi2}
              alt='Image lummi'
              src='image-lummi-3.png'
            /> */}
            <div className={AltFourstyles.copy}>
              <div className={AltFourstyles.featureTitle}>Customizable Spaces</div>
              <p className={AltFourstyles.featureDescription}>
                Create the perfect study environment.
              </p>
            </div>
          </div>
          <div className={AltFourstyles.cards}>
            {/* <Image
              className={AltFourstyles.imageLummi2}
              alt='Image lummi'
              src='image-lummi-4.png'
            /> */}
            <div className={AltFourstyles.copy}>
              <div className={AltFourstyles.featureTitle}>Interactive Sessions</div>
              <p className={AltFourstyles.featureDescription}>
                Engage in live knowledge exchanges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={AltFourstyles.propertyBig}>
        <div className={AltFourstyles.container}>
          <div className={AltFourstyles.heading2}>How CyberStudy Works</div>
          <div className={AltFourstyles.copyComponent}>
            <div className={AltFourstyles.heading3}>1</div>
            <div className={AltFourstyles.itemText}>
              <div className={AltFourstyles.subheading}>Create an Account</div>
              <p className={AltFourstyles.p}>Sign up and access our study features.</p>
            </div>
          </div>
          <div className={AltFourstyles.copyComponent}>
            <div className={AltFourstyles.heading3}>2</div>
            <div className={AltFourstyles.itemText}>
              <div className={AltFourstyles.subheading}>Customize Your Space</div>
              <p className={AltFourstyles.p}>Personalize your study hall experience.</p>
            </div>
          </div>
          <div className={AltFourstyles.copyComponent}>
            <div className={AltFourstyles.heading3}>3</div>
            <div className={AltFourstyles.itemText}>
              <div className={AltFourstyles.subheading}>Start Learning</div>
              <p className={AltFourstyles.p}>Dive into a world of knowledge.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={AltFourstyles.propertyTable}>
        <div className={AltFourstyles.frame}>
          <div className={AltFourstyles.headingTextWrapper}>
            <div className={AltFourstyles.headingText}>
              <div className={AltFourstyles.heading4}>Membership Plans</div>
              <p className={AltFourstyles.p}>Choose the plan that fits your study needs.</p>
            </div>
          </div>
          <div className={AltFourstyles.pricePlans}>
            <div className={AltFourstyles.planColumn}>
              <div className={AltFourstyles.featureList}>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.listItem}>Unlimited</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.listItem}>Collaborations</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.listItem}>Snack Bar</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.listItem}>Guest Logins</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.listItem}>File Vaults</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.listItem}>24/7 Helpdesk</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.listItem}>Secure Access</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.listItem}>Community Events</div>
                </div>
              </div>
            </div>
            <div className={AltFourstyles.planColumn2}>
              <div className={AltFourstyles.plan}>
                <div className={AltFourstyles.titleWrapper}>
                  <div className={AltFourstyles.title}>Starter</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.element}>$5</div>
                  <div className={AltFourstyles.detailsContainer}>
                    <div className={AltFourstyles.textWrapper}>each month</div>
                    <div className={AltFourstyles.yearlySwitch}>
                      <div className={AltFourstyles.textWrapper}>billed annually</div>
                      <div className={AltFourstyles.switch}>
                        <div className={AltFourstyles.circle} />
                      </div>
                    </div>
                  </div>
                </div>
                <button className={AltFourstyles.button}>
                  <button className={AltFourstyles.textContainer}>
                    <button className={AltFourstyles.CTA}>Get Started</button>
                  </button>
                </button>
              </div>
              <div className={AltFourstyles.featureList}>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>5GB</div>
                </div>
                <div className={AltFourstyles.div2}>
                  {/* <Image className={AltFourstyles.img} alt='Checkcircle icon' src='image.svg' /> */}
                  <div className={AltFourstyles.textWrapper2}>1GB</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.textWrapper3}>Basic</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.textWrapper3}>Limited</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.textWrapper3}>Email Only</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.textWrapper3}>Common Areas</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.textWrapper3}>Monthly Digest</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.textWrapper3}>Community Forum</div>
                </div>
              </div>
            </div>
            <div className={AltFourstyles.planColumn2}>
              <div className={AltFourstyles.plan2}>
                <div className={AltFourstyles.divWrapper}>
                  <div className={AltFourstyles.title}>Advanced</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.price}>
                    <div className={AltFourstyles.element2}>$10</div>
                    <div className={AltFourstyles.textWrapper4}>99</div>
                  </div>
                  <div className={AltFourstyles.detailsContainer}>
                    <div className={AltFourstyles.textWrapper}>each month</div>
                    <div className={AltFourstyles.yearlySwitch}>
                      <div className={AltFourstyles.textWrapper}>billed annually</div>
                      <div className={AltFourstyles.switch}>
                        <div className={AltFourstyles.circle} />
                      </div>
                    </div>
                  </div>
                </div>
                <button className={AltFourstyles.textContainerWrapper}>
                  <button className={AltFourstyles.textContainer}>
                    <button className={AltFourstyles.CTA2}>Join Now</button>
                  </button>
                </button>
              </div>
              <div className={AltFourstyles.featureList2}>
                <div className={AltFourstyles.feature}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-2.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>15GB</div>
                </div>
                <div className={AltFourstyles.feature}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-3.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Unlimited Bar</div>
                </div>
                <div className={AltFourstyles.feature}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-4.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>5 Invites</div>
                </div>
                <div className={AltFourstyles.feature}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-5.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Unlimited</div>
                </div>
                <div className={AltFourstyles.feature}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-6.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Encrypted Vault</div>
                </div>
                <div className={AltFourstyles.feature}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-7.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Priority Support</div>
                </div>
                <div className={AltFourstyles.feature}>
                  <div className={AltFourstyles.textWrapper3}>Exclusive Content</div>
                </div>
                <div className={AltFourstyles.feature}>
                  <div className={AltFourstyles.textWrapper3}>Monthly Webinars</div>
                </div>
              </div>
            </div>
            <div className={AltFourstyles.planColumn2}>
              <div className={AltFourstyles.plan3}>
                <div className={AltFourstyles.divWrapper}>
                  <div className={AltFourstyles.title}>Ultimate</div>
                </div>
                <div className={AltFourstyles.div2}>
                  <div className={AltFourstyles.element}>$20</div>
                  <div className={AltFourstyles.detailsContainer}>
                    <div className={AltFourstyles.textWrapper}>each month</div>
                    <div className={AltFourstyles.yearlySwitch}>
                      <div className={AltFourstyles.textWrapper}>billed annually</div>
                      <div className={AltFourstyles.switch}>
                        <div className={AltFourstyles.circle} />
                      </div>
                    </div>
                  </div>
                </div>
                <button className={AltFourstyles.button}>
                  <div className={AltFourstyles.CTAWrapper}>
                    <button className={AltFourstyles.CTA}>Enroll Today</button>
                  </div>
                </button>
              </div>
              <div className={AltFourstyles.featureList}>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-8.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Unlimited</div>
                </div>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-9.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Full Access Bar</div>
                </div>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-10.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Unlimited Invites</div>
                </div>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-11.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Project Rooms</div>
                </div>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-12.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Private Vaults</div>
                </div>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-13.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>24/7 Priority Help</div>
                </div>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-14.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>VPN Protection</div>
                </div>
                <div className={AltFourstyles.div2}>
                  {/* <Image
                    className={AltFourstyles.img}
                    alt='Checkcircle icon'
                    src='checkcircle-icon-15.svg'
                  /> */}
                  <div className={AltFourstyles.textWrapper2}>Global Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={AltFourstyles.typeFAQQuestion}>
        <div className={AltFourstyles.container2}>
          <div className={AltFourstyles.sectionTitle}>
            <div className={AltFourstyles.heading5}>Common Questions</div>
            <p className={AltFourstyles.text}>
              Find answers to commonly asked questions about our cyber study hall.
            </p>
          </div>
          <div className={AltFourstyles.questions}>
            <div className={AltFourstyles.questionAccordion}>
              <div className={AltFourstyles.title2}>
                <div className={AltFourstyles.question}>What is CyberStudy Hall?</div>
                {/* <Image className={AltFourstyles.img} alt='Caret down' src='caret-down.svg' /> */}
              </div>
            </div>
            <div className={AltFourstyles.questionAccordion}>
              <div className={AltFourstyles.title2}>
                <p className={AltFourstyles.question}>Can I study with others?</p>
                {/* <Image className={AltFourstyles.img} alt='Caret down' src='caret-down-2.svg' /> */}
              </div>
            </div>
            <div className={AltFourstyles.questionAccordion}>
              <div className={AltFourstyles.title2}>
                <div className={AltFourstyles.question}>Are there live tutors?</div>
                {/* <Image className={AltFourstyles.img} alt='Caret down' src='caret-down-3.svg' /> */}
              </div>
            </div>
            <div className={AltFourstyles.questionAccordion}>
              <div className={AltFourstyles.title2}>
                <p className={AltFourstyles.question}>How do I customize my space?</p>
                {/* <Image className={AltFourstyles.img} alt='Caret down' src='caret-down-4.svg' /> */}
              </div>
            </div>
            <div className={AltFourstyles.questionAccordion}>
              <div className={AltFourstyles.title2}>
                <div className={AltFourstyles.question}>What are community events?</div>
                {/* <Image className={AltFourstyles.img} alt='Caret down' src='caret-down-5.svg' /> */}
              </div>
            </div>
          </div>
          <div className={AltFourstyles.moreQuestions}>
            <div className={AltFourstyles.heading6}>
              <div className={AltFourstyles.heading7}>Need further assistance?</div>
              <p className={AltFourstyles.text}>Reach out to us anytime for additional support.</p>
            </div>
            <button className={AltFourstyles.button2}>
              <button className={AltFourstyles.textContainer}>
                <button className={AltFourstyles.button3}>Contact Us</button>
              </button>
            </button>
          </div>
        </div>
      </div>
      <div className={AltFourstyles.typeBubbleMega}>
        <div className={AltFourstyles.bubbleContainer2}>
          <div className={AltFourstyles.content}>
            <div className={AltFourstyles.brand2}>
              <div className={AltFourstyles.logo}>
                {/* <Image className={AltFourstyles.icon} alt='Icon' src='icon-2.svg' /> */}
                <div className={AltFourstyles.textWrapper5}>CyberStudy Cafe</div>
              </div>
              <div className={AltFourstyles.slogan}>Elevate your learning space</div>
            </div>
            <div className={AltFourstyles.links}>
              <div className={AltFourstyles.list}>
                <div className={AltFourstyles.textWrapper6}>Company</div>
                <div className={AltFourstyles.textWrapper5}>About</div>
                <div className={AltFourstyles.textWrapper5}>Careers</div>
                <div className={AltFourstyles.textWrapper5}>Newsroom</div>
              </div>
              <div className={AltFourstyles.list}>
                <div className={AltFourstyles.textWrapper6}>Our Features</div>
                <div className={AltFourstyles.textWrapper5}>High-Speed Wi-Fi</div>
                <div className={AltFourstyles.textWrapper5}>Study Cards</div>
                <div className={AltFourstyles.textWrapper5}>Virtual Bulletin</div>
              </div>
              <div className={AltFourstyles.list}>
                <div className={AltFourstyles.textWrapper6}>Social</div>
                <div className={AltFourstyles.textWrapper5}>Twitter</div>
                <div className={AltFourstyles.textWrapper5}>Instagram</div>
                <div className={AltFourstyles.textWrapper5}>Threads</div>
              </div>
            </div>
          </div>
          <div className={AltFourstyles.divider} />
          <div className={AltFourstyles.legals}>
            <div className={AltFourstyles.copyright}>© CyberStudy Cafe 2024</div>
            <div className={AltFourstyles.list2}>
              <div className={AltFourstyles.textWrapper6}>Legal Info</div>
              <div className={AltFourstyles.textWrapper6}>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

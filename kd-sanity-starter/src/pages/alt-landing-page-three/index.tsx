import Nova1 from '@public/Nova1.png';
import Nova2 from '@public/Nova2.png';
import Nova3 from '@public/Nova3.png';
import NovaPerson1 from '@public/NovaPerson1.png';
import Image from 'next/image';
import AltThreestyles from '../../styles/altLandingPageThree.module.css';

export default function Home() {
  return (
    <div className={AltThreestyles.futuristicDystopian}>
      <div className={AltThreestyles.typeDarkLight}>
        <div className={AltThreestyles.bubbleContainer}>
          <div className={AltThreestyles.navLinks}>
            <div className={AltThreestyles.navLink}>
              <div className={AltThreestyles.navLabel}>Portal</div>
            </div>
            <div className={AltThreestyles.navLink}>
              <div className={AltThreestyles.navLabel}>Dystopia</div>
            </div>
            <div className={AltThreestyles.navLink}>
              <div className={AltThreestyles.navLabel}>Crew</div>
            </div>
          </div>
          <div className={AltThreestyles.navLinks}>
            <div className={AltThreestyles.navLink}>
              <div className={AltThreestyles.navLabel}>Manifesto</div>
            </div>
            <div className={AltThreestyles.navLink}>
              <div className={AltThreestyles.navLabel}>@cyberpulse</div>
            </div>
            <div className={AltThreestyles.navLink}>
              <div className={AltThreestyles.navLabel}>Connect</div>
            </div>
          </div>
          <div className={AltThreestyles.brand}>
            {/* <img className={AltThreestyles.icon} alt='Icon' src='icon.svg' /> */}
            <div className={AltThreestyles.brandName}>Neon Thrive</div>
          </div>
        </div>
      </div>
      <div className={AltThreestyles.typeSimpleTitle}>
        <div className={AltThreestyles.wrapper}>
          <div className={AltThreestyles.copyComponent}>
            <div className={AltThreestyles.headingText}>
              <div className={AltThreestyles.heading}>I&#39;m Nova, Cybernetic Enthusiast.</div>
              <div className={AltThreestyles.textWrapper}>Navigate the neon-lit streets.</div>
            </div>
            <div className={AltThreestyles.CTAButton}>
              <div className={AltThreestyles.textContainer}>
                <button className={AltThreestyles.CTA}>Join the Odyssey</button>
              </div>
            </div>
          </div>
          <div className={AltThreestyles.imageContainer}>
            <Image className={AltThreestyles.imageLummi} alt='Image lummi' src={Nova1} />
          </div>
        </div>
      </div>
      <div className={AltThreestyles.typeImage}>
        {/* <Image className={AltThreestyles.img} alt='Image lummi' src={Nova2} /> */}
        <div className={AltThreestyles.overlay} />
        <div className={AltThreestyles.textContent}>
          <div className={AltThreestyles.div}>Crafting virtual utopias.</div>
          <div className={AltThreestyles.description}>Digital Frontier Awaits</div>
        </div>
      </div>
      <div className={AltThreestyles.typeThreeFeature}>
        <div className={AltThreestyles.content}>
          <div className={AltThreestyles.headingContainer}>
            <div className={AltThreestyles.heading2}>Neon Dreams Unveiled</div>
            <div className={AltThreestyles.subheading}>Immersive Reality Awaits</div>
          </div>
          <div className={AltThreestyles.div2}>
            <div className={AltThreestyles.frame}>
              <div className={AltThreestyles.bigCard}>
                <div className={AltThreestyles.content2}>
                  <div className={AltThreestyles.contentContainer}>
                    <div className={AltThreestyles.subheading3}>Transcend Reality</div>
                    <div className={AltThreestyles.div3}>
                      <div className={AltThreestyles.heading3}>Reshape the Metropolis Skyline</div>
                      <div className={AltThreestyles.text}>Urban revolution begins</div>
                    </div>
                  </div>
                  <button className={AltThreestyles.buttonWrapper}>
                    <button className={AltThreestyles.button}>
                      <button className={AltThreestyles.CTA2}>Embark the Hype</button>
                    </button>
                  </button>
                </div>
                <div className={AltThreestyles.imageLummi2} />
              </div>
              <div className={AltThreestyles.bigCard2}>
                <div className={AltThreestyles.content2}>
                  <div className={AltThreestyles.contentContainer}>
                    <div className={AltThreestyles.subheading2}>Hack the System</div>
                    <div className={AltThreestyles.div3}>
                      <div className={AltThreestyles.heading3}>Reimagine Cybernetic Life</div>
                      <div className={AltThreestyles.text}>AI rebellion starts now</div>
                    </div>
                  </div>
                  <button className={AltThreestyles.buttonWrapper}>
                    <button className={AltThreestyles.button}>
                      <button className={AltThreestyles.CTA2}>Lead the Change</button>
                    </button>
                  </button>
                </div>
                {/* <div className={AltThreestyles.imageLummi3} /> */}
                <Image src={Nova2} alt='' />
              </div>
            </div>
            <div className={AltThreestyles.bigCard3}>
              <div className={AltThreestyles.content2}>
                <div className={AltThreestyles.contentContainer}>
                  <div className={AltThreestyles.subheading2}>Rebel With Cause</div>
                  <div className={AltThreestyles.div3}>
                    <div className={AltThreestyles.heading3}>Redefine Humanity&#39;s Fate</div>
                    <div className={AltThreestyles.text}>Cyber evolution awaits</div>
                  </div>
                </div>
                <button className={AltThreestyles.buttonWrapper}>
                  <button className={AltThreestyles.button}>
                    <button className={AltThreestyles.CTA2}>Seize the Future</button>
                  </button>
                </button>
              </div>
              <Image src={Nova3} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className={AltThreestyles.propertySlider}>
        <div className={AltThreestyles.content3}>
          <div className={AltThreestyles.div2}>
            <div className={AltThreestyles.imageGalleryTitle}>Visual Overdrive</div>
            <p className={AltThreestyles.textWrapper}>Explore streets with no daylight.</p>
          </div>
          <div className={AltThreestyles.imageGallery}>
            <div className={AltThreestyles.imagesContent}>
              <Image className={AltThreestyles.image} alt='Image' src={NovaPerson1} />
              {/* <Image className={AltThreestyles.image2} alt='Image' src={Nova2} /> */}
            </div>
            <div className={AltThreestyles.dots}>
              <div className={AltThreestyles.dot} />
              <div className={AltThreestyles.dot2} />
              <div className={AltThreestyles.dot2} />
              <div className={AltThreestyles.dot2} />
            </div>
            {/* <img className={AltThreestyles.leftButton} alt='Left button' src='left-button.svg' />
            <img className={AltThreestyles.rightButton} alt='Right button' src='right-button.svg' /> */}
          </div>
        </div>
      </div>
      <div className={AltThreestyles.propertyBig}>
        <div className={AltThreestyles.stepsWrapper}>
          <div className={AltThreestyles.QuoteContainer}>
            <div className={AltThreestyles.headingTextWrapper}>
              <div className={AltThreestyles.headingText}>
                <p className={AltThreestyles.testimonial}>
                  “Their vision for the cyber world transformed my reality.”
                </p>
                <div className={AltThreestyles.name}>Maverick T., Cyberpunk Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
        <div className={AltThreestyles.imageLummiCategory} />
      </div>
      <div className={AltThreestyles.typeMegaMenu}>
        <div className={AltThreestyles.content4}>
          <div className={AltThreestyles.list}>
            <div className={AltThreestyles.listHeading}>Subculture</div>
            <div className={AltThreestyles.listLinkItem}>Manifesto</div>
            <div className={AltThreestyles.listLinkItem}>Join Us</div>
            <div className={AltThreestyles.listLinkItem}>Feed</div>
          </div>
          <div className={AltThreestyles.list}>
            <div className={AltThreestyles.listHeading}>Highlights</div>
            <div className={AltThreestyles.listLinkItem}>Quantum Leap</div>
            <div className={AltThreestyles.listLinkItem}>Tech Waves</div>
            <div className={AltThreestyles.listLinkItem}>Feed</div>
          </div>
          <div className={AltThreestyles.list}>
            <div className={AltThreestyles.listHeading}>Signals</div>
            <div className={AltThreestyles.listLinkItem}>@neonpulse</div>
            <div className={AltThreestyles.listLinkItem}>@cyberpulse</div>
            <div className={AltThreestyles.listLinkItem}>Circuits</div>
          </div>
          <div className={AltThreestyles.list2}>
            <div className={AltThreestyles.div3}>
              <div className={AltThreestyles.listHeading2}>Monthly Manifest</div>
              <p className={AltThreestyles.listDescription}>Get tips for hacking the mainframe</p>
            </div>
            <div className={AltThreestyles.inputWithButton}>
              <div className={AltThreestyles.input}>
                <div className={AltThreestyles.inputForm}>
                  <input
                    className={AltThreestyles.placeholderText}
                    placeholder='user@neonpulse.net'
                    type='email'
                  />
                </div>
              </div>
              {/* <img className={AltThreestyles.button2} alt='Button' src='button.svg' /> */}
            </div>
            <div className={AltThreestyles.links}>
              <div className={AltThreestyles.listLinkItem2}>Protocol</div>
              <div className={AltThreestyles.listLinkItem2}>Anonymity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

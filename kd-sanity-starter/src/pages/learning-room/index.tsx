import EscapeBanner from '@/components/EscapeBanner';
import Circle from '@components/Circle';
import LearningRoomLogo from '@public/learningRoomLogo.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Styles from './learningRoom.module.css';

export default function Home() {
  useEffect(() => {
    let WIDTH: number;
    let HEIGHT: number;
    let canvas: HTMLCanvasElement;
    let con: CanvasRenderingContext2D;
    let pxs: Circle[] = [];
    const rint = 60;

    class Circle {
      s = {
        ttl: 8000,
        xmax: 3,
        ymax: 2,
        rmax: 200,
        rt: 1,
        xdef: 960,
        ydef: 540,
        xdrift: 2,
        ydrift: 2,
        random: true,
        blink: true,
      };

      reset() {
        this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;
        this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef;
        this.r = (this.s.rmax - 1) * Math.random() + 1;
        this.dx = Math.random() * this.s.xmax * (Math.random() < 0.5 ? -1 : 1);
        this.dy = Math.random() * this.s.ymax * (Math.random() < 0.5 ? -1 : 1);
        this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
        this.rt = Math.random() * this.hl;
        this.s.rt = Math.random() + 1;
        this.stop = Math.random() * 0.2 + 0.4;
        this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
        this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);

        this.opacityFill = '.' + Math.floor(Math.random() * 5) + 1;
        this.currentColor = Math.floor(Math.random() * crFill.length);
      }

      fade() {
        this.rt += this.s.rt;
      }

      draw() {
        if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) {
          this.s.rt = this.s.rt * -1;
        } else if (this.rt >= this.hl) {
          this.reset();
        }
        con.beginPath();
        con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        con.globalAlpha = +this.opacityFill;
        const newo = 1 - this.rt / this.hl;
        const cr = this.r * newo;

        const gradient = con.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          cr <= 0 ? 1 : cr,
        );
        gradient.addColorStop(0.0, crFill[this.currentColor][1]);
        gradient.addColorStop(0.7, crFill[this.currentColor][1]);
        gradient.addColorStop(1.0, crFill[this.currentColor][0]);

        con.fillStyle = gradient;
        con.fill();

        con.closePath();
      }

      move() {
        this.x += (this.rt / this.hl) * this.dx;
        this.y += (this.rt / this.hl) * this.dy;
        if (this.x > WIDTH || this.x < 0) {
          this.dx *= -1;
        }
        if (this.y > HEIGHT || this.y < 0) {
          this.dy *= -1;
        }
      }

      constructor(
        public x: number,
        public y: number,
        public r: number,
        public dx: number,
        public dy: number,
        public hl: number,
        public rt: number,
        public stop: number,
        public opacityFill: string,
        public currentColor: number,
      ) {}
    }

    const crFill: [string, string][] = [
      ['rgba(221,160,221,0)', 'rgba(221,160,221,1)'],
      ['rgba(230,230,250,0)', 'rgba(230,230,250,1)'],
      ['rgba(182,102,204,0)', 'rgba(182,102,204,1)'],
    ];

    const draw = () => {
      con.clearRect(0, 0, WIDTH, HEIGHT);
      for (const px of pxs) {
        px.fade();
        px.move();
        px.draw();
      }
    };

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    console.log(HEIGHT);
    canvas = document.getElementById('demo') as HTMLCanvasElement;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    con = canvas.getContext('2d')!;
    for (let i = 0; i < 100; i++) {
      const newCircle = new Circle(0, 0, 0, 0, 0, 0, 0, 0, '', 0);
      newCircle.reset();
      pxs.push(newCircle);
    }
    const interval = setInterval(draw, rint);

    return () => clearInterval(interval);
  }, []);

  const [circleClicked, setCircleClicked] = useState(false);

  const handleCircleClick = () => {
    setCircleClicked(true);
  };

  return (
    <div className={`${Styles.mainContainer} main-container`}>
      <EscapeBanner pageType='creative' />
      <div className={`${Styles.sectionDemo} section-demo`}>
        <canvas id='demo'></canvas>
        <div className='absolute top-0 w-full h-full'>
          <Image src={LearningRoomLogo} width='600' alt={''} className='mt-[10%] ml-[5-%]'></Image>
          <div className='flex flex-row'>
            {!circleClicked && (
              <Circle
                position='absolute'
                left='5%'
                top='50%'
                size='150px'
                text='Hobbies and Interests'
                handleCircleClick={handleCircleClick}
              />
            )}
            {!circleClicked && (
              <Circle
                position='absolute'
                // left={circleClicked ? '37.5%' : '48%'}
                // top={circleClicked ? '15%' : '12%'}
                // size={circleClicked ? '575px' : '250px'}
                left='48%'
                top='12%'
                size='250px'
                text='Resources'
                handleCircleClick={handleCircleClick}
                backgroundColor={circleClicked ? '#5171ff' : '#9966CC'}
              />
            )}

            {!circleClicked && (
              <Circle
                position='absolute'
                left='74%'
                top='23%'
                size='250px'
                videoUrl='https://www.youtube.com/watch?v=qhPr8XgRnrg'
                hasPlayButton={true}
                handleCircleClick={handleCircleClick}
              />
            )}
            {/* {!circleClicked && ( */}
            <Circle
              position='absolute'
              left={circleClicked ? '37.5%' : '66%'}
              top={circleClicked ? '15%' : '62%'}
              size={circleClicked ? '575px' : '250px'}
              text='Study Topics'
              handleCircleClick={handleCircleClick}
              backgroundColor={circleClicked ? '#5171ff' : '#9966CC'}
            />
            {/* )} */}
            {!circleClicked && (
              <Circle
                size='375px'
                left='25%'
                top='2rem'
                videoUrl='https://www.youtube.com/watch?v=9JrAojUqMvQ'
                hasPlayButton={false}
                handleCircleClick={handleCircleClick}
              />
            )}
            {/* sub topics */}
            {circleClicked && (
              <Circle position='absolute' left='40%' top='45%' size='150px' text='1' />
            )}
            {circleClicked && (
              <Circle position='absolute' left='48%' top='68%' size='150px' text='2' />
            )}
            {circleClicked && (
              <Circle position='absolute' left='48%' top='22%' size='150px' text='3' />
            )}
            {circleClicked && (
              <Circle position='absolute' left='68%' top='22%' size='150px' text='4' />
            )}
            {circleClicked && (
              <Circle position='absolute' left='68%' top='68%' size='150px' text='5' />
            )}
            {circleClicked && (
              <Circle position='absolute' left='74%' top='45%' size='150px' text='6' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import EscapeBanner from '@/components/EscapeBanner';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import PortfolioSection from '@/components/PortfolioSection';
import Head from 'next/head';
import CodingForDataCert from '../../../public/codingfordata.png';
import CSharpCert from '../../../public/csharpcert.png';
import CSharpIntermediateCert from '../../../public/csharpintermediatecert.jpg';
import CSSCert from '../../../public/csscert.png';
import HTMLCert from '../../../public/htmlcert.png';
import JavaScriptCert from '../../../public/javascript.png';
import JQueryCert from '../../../public/jquerycert.png';
import ReactReduxCert from '../../../public/reactreduxcert.png';
import SkillcrushCert from '../../../public/skillcrushCertImage.png';
import SQLCert from '../../../public/sqlCert.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kirsten Darling</title>
        <meta
          name='description'
          content='A fun and informative site, created by Kirsten Darling.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full h-full'>
        <EscapeBanner pageType='professional' />
        <NavBar />
        <PortfolioSection
          subheading='Break Into Tech: Front End Developer Track'
          heading='Skillcrush'
          text='Skillcrush is a fun and innovative place to learn the latest in tech. I attended their Front End Developer Track, which included HTML, CSS, JavaScript, and more. I learned how to create a website from scratch, and how to make it look great on any device. I also learned how to make my site interactive and fun with JavaScript. View my certificate to see what I learned!'
          buttonText='View Certificate'
          buttonLink='/skillcrushCert.pdf'
          image={SkillcrushCert}
          alignment='left'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='C# Intermediate'
          text='In this course, I learned about Object-Oriented Programming in C#. I learned about classes, objects, inheritance, polymorphism, interfaces, and abstract classes. I also learned about Exception Handling, File I/O, and how to use LINQ to query data. I also learned about Delegates, Events, and Lambda Expressions.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/certificates/CC-NKKQGTNS'
          image={CSharpIntermediateCert}
          alignment='left'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='Intro to C#'
          text='In this course, I learned the basics of C# programming, including variables, data types, control structures, classes, and objects. I also learned about Decision Making, Loops, and Methods, and how to use them in my programs.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/en/certificates/CC-WOPEJLN1'
          image={CSharpCert}
          alignment='right'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='Coding for Data'
          text='In this extensive course I learned the basics of Python, working with data, control flow, working with lists, functions, SQL, query techniques, and Data Analysis.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/certificates/CC-F9STMAOT'
          image={CodingForDataCert}
          alignment='left'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='SQL'
          text='Here I learned the basics of SQL, including how to create and manage databases, how to query a database using SELECT, INSERT, UPDATE, and DELETE, and how to use SQL functions. I also learned how to use SQL to join tables, and how to use subqueries.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/certificates/CT-ZPQ4SHMJ'
          image={SQLCert}
          alignment='right'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='React + Redux'
          text='In this course, I learned the basics of React and Redux, including how to create components, how to manage state, how to use props, how to use hooks, how to use Redux, and how to use Redux with React. I also learned how to use React Router.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/certificates/CT-RIDW9Z4J'
          image={ReactReduxCert}
          alignment='left'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='jQuery'
          text='In this course, I learned the basics of jQuery, including how to select elements, how to manipulate elements, how to handle events, how to use effects, how to use animations, how to use AJAX, and how to use plugins. I also learned how to use jQuery UI.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/certificates/CT-SRWYMKMO'
          image={JQueryCert}
          alignment='right'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='JavaScript'
          text='Here, I learned the basics of JavaScript, including how to create variables, how to use data types, how to use operators, how to use control structures, how to use functions, how to use objects, how to use arrays, how to use classes, and how to use modules. I also learned how to use the DOM, how to use events, how to use AJAX, and how to use JSON.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/certificates/CT-0TCLOFW7'
          image={JavaScriptCert}
          alignment='left'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='CSS'
          text='This course showed me the basics of CSS, including how to style text, how to style boxes, how to style backgrounds, how to style lists, how to style tables, how to style forms, how to use Flexbox, how to use Grid, and how to use Media Queries. I also learned how to use CSS Variables, how to use CSS Transitions, how to use CSS Animations, and how to use CSS Filters.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/certificates/CT-IXLE7GAK'
          image={CSSCert}
          alignment='right'
        />
        <PortfolioSection
          subheading='Sololearn'
          heading='HTML'
          text='Hello World! In this course, I learned the basics of HTML, including how to create a webpage, how to use headings, how to use paragraphs, how to use lists, how to use links, how to use images, how to use tables, how to use forms, and how to use iframes. I also learned how to use HTML5 elements, how to use semantic elements, how to use multimedia elements, and how to use form elements.'
          buttonText='View Certificate'
          buttonLink='https://www.sololearn.com/certificates/CT-8WCESLWD'
          image={HTMLCert}
          alignment='left'
        />
        <Footer />
      </div>
    </div>
  );
}

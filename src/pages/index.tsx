import Head from 'next/head';

import { NUMBER_OF_BLOGS } from 'data/blogs';
import Link from 'components/Link';
import styles from './index.module.css';

const STRUCTURED_DATA_PROFILE_PAGE = `
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2021-06-21T17:21:00-08:00",
  "dateModified": "2024-05-30T23:10:00-08:00",
  "mainEntity": {
    "@type": "Person",
    "name": "Jeremiah Clothier",
    "agentInteractionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WriteAction",
      "userInteractionCount": ${NUMBER_OF_BLOGS}
    },
    "description": "Software Engineer, Blogger, and Developer Productivity Advocate",
    "image": "https://jeremiah.gg/images/logo-light.svg",
    "sameAs": [
      "https://www.linkedin.com/in/jeremiah-clothier/"
    ]
  }
}
`;

const Home = () => (
  <>
    <Head>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: STRUCTURED_DATA_PROFILE_PAGE }}
      />
    </Head>
    <div className={`${styles.container} flex h-[90%] flex-col items-center`}>
      <div>
        <span className="fs-normal fc-yellow">Hi, my name is</span>
        <h1 className="fs-x-large font-bold leading-snug">Jeremiah Clothier</h1>
        <p className="fs-large mb-0 font-bold leading-none opacity-60">
          I build things on the web for fun.
        </p>
        <p className="fs-normal fc-light-purple mb-8 mt-4 max-w-[600px] leading-7">
          I am a software engineer with a constant desire to figure out why and how things work the
          way they do. I enjoy building websites and teaching others along the way.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
          <Link href="mailto:clothiernamedjeremiah@gmail.com" rel="noreferrer" target="_blank">
            Get in Touch
          </Link>
          {/* <Link
            href="https://jeremiah-clothier.s3-us-west-2.amazonaws.com/resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            View Resume
          </Link> */}
        </div>
      </div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="81.20457260207468 -0.006372851825200421 268.0743355786582 442.9492228654704"
        width="264.07"
        height="438.95"
        role="presentation"
        className={styles.j}
      >
        <defs>
          <path
            d="M264.91 312.88C265.1 313.5 265.13 314.17 265.01 314.81C264.78 315.91 263.02 324.75 262.8 325.85C259.24 343.61 251.64 351.33 230.9 357.41C201.94 366.01 188.42 359.11 176.93 330.3C176.37 328.83 171.82 317.07 171.26 315.6C170.51 313.66 168.41 312.62 166.41 313.2C163.62 314 141.26 320.48 138.46 321.29C94.03 334.1 96.04 331.95 105.49 357.27C122.92 405.56 158.87 432.53 208.48 434.29C226.94 435.06 232.71 434.07 257.15 426.59C299.08 413.52 321.69 396.09 337.05 364.46C344.05 350.01 347.76 323.99 345.73 303.83C344.7 294.91 330.02 243.74 299.97 145.44C295.64 131.28 261.01 17.99 256.68 3.83C256.03 1.71 253.79 0.52 251.68 1.17C249.34 1.88 237.66 5.46 216.62 11.89C195.71 18.28 184.09 21.83 181.77 22.54C179.66 23.19 178.47 25.41 179.11 27.52C181.93 36.93 196.08 83.97 221.54 168.65C247.57 255.19 262.02 303.26 264.91 312.88Z"
            id="a6n86vr3n"
          />
          <path
            d="M247.15 318.31C247.34 318.94 247.38 319.6 247.25 320.25C247.03 321.35 245.26 330.18 245.04 331.29C241.48 349.05 233.88 356.76 213.14 362.84C184.18 371.44 170.66 364.55 159.18 335.74C158.61 334.27 154.07 322.5 153.5 321.03C152.75 319.1 150.65 318.05 148.65 318.63C145.86 319.44 123.5 325.91 120.7 326.72C76.27 339.54 78.28 337.38 87.73 362.71C105.16 410.99 141.11 437.97 190.73 439.73C209.18 440.5 214.95 439.5 239.4 432.03C281.32 418.95 303.93 401.52 319.29 369.9C326.29 355.44 330 329.43 327.97 309.27C326.94 300.35 312.27 249.17 282.22 150.88C277.89 136.72 243.25 23.42 238.92 9.26C238.27 7.15 236.04 5.96 233.92 6.61C231.59 7.32 219.9 10.89 198.86 17.32C177.95 23.72 166.33 27.27 164.01 27.98C161.9 28.62 160.71 30.85 161.35 32.96C164.18 42.37 178.32 89.41 203.79 174.09C229.81 260.62 244.26 308.7 247.15 318.31Z"
            id="aboSTMkeQ"
          />
        </defs>
        <g>
          <g>
            <use xlinkHref="#a6n86vr3n" opacity="1" fill="#7895f9" fillOpacity="1" />
            <g>
              <use
                xlinkHref="#a6n86vr3n"
                opacity="1"
                fillOpacity="0"
                stroke="#000000"
                strokeWidth="1"
                strokeOpacity="0"
              />
            </g>
          </g>
          <g>
            <use xlinkHref="#aboSTMkeQ" opacity="1" fill="#f6f9fc" fillOpacity="1" />
            <g>
              <use
                xlinkHref="#aboSTMkeQ"
                opacity="1"
                fillOpacity="0"
                stroke="#000000"
                strokeWidth="1"
                strokeOpacity="0"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </>
);

export default Home;

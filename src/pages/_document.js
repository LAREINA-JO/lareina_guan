import { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from '@mui/icons-material/Email';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* header */}
        <div className="flex flex-col justify-center items-center lg:h-[1400px] sm:h-[400px] h-[225px] w-[100%]
        bg-fixed bg-contain" style={{ backgroundImage: "url(/mainbg.JPG)" }}>
          <img
            src="/profile.jpg"
            alt="Image 1"
            className="rounded-full lg:w-32 lg:h-32 sm:w-24 sm:h-24 h-16 w-16 border-4 border-white"
            width="50"
            height="50"
          />

          <div className="justify-top items-right lg:space-x-10 sm:space-x-10 space-x-4 text-white mt-10 text-xl underline">
            <Link href="/index">HOME</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="/personal">MY LIFE</Link>
          </div>

          <div className="text-center lg:text-4xl sm:text-2xl text-white font-serif lg:my-32 sm:my-10 my-2 leading-loose lg:px-16 sm:px-8 px-4 tracking-wide">
            "Life was like a box of chocolates, you never know what you're gonna get."<br />
            <span className="lg:text-xl/5 sm:text-lg text-white font-serif italic font-thin">----&nbsp;&nbsp;&nbsp;Forrest Gump</span>
          </div>
        </div>

        {/* navigation */}


        {/* external links */}
        <div className="flex justify-center lg:space-x-10 sm:space-x-10 space-x-4 p-12">
          <Link
            href="https://github.com/LAREINA-JO"
            className="flex flex-col items-center"
          >
            <GitHubIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></GitHubIcon>
            <br />GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/rui-guan-9079b5229/"
            className="flex flex-col items-center"
          >
            <LinkedInIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></LinkedInIcon>
            <br />LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/lalalala_lareina/"
            className="flex flex-col items-center"
          >
            <InstagramIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></InstagramIcon>
            <br />Instagram
          </Link>
          <a
            target="_blank"
            href="mailto:lareina.guan@mail.utoronto.ca?subject=Hello, Lareina"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <EmailIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></EmailIcon>
            <br />Email
          </a>
          <a
            target="_blank"
            href="/Rui_Guan_Grad_Resume_N.pdf"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <PictureAsPdfIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></PictureAsPdfIcon>
            <br />Resume
          </a>
        </div>

        {/* short description */}
        <div className="text-center lg:text-3xl lg:px-16 px-6 text-lg font-serif font-bold space-x-1.5 leading-loose">I,&nbsp;
          <span className="underline decoration-slate-400">
            Rui (Lareina) Guan
          </span>
          , am currently pursuing a&nbsp;
          <span className="underline decoration-lime-400">
            Master of Engineering
          </span>
          &nbsp;degree within the Department of Electrical and Computer Engineering at
          the&nbsp;
          <span className="underline decoration-orange-400">
            University of Toronto
          </span>
          .
        </div>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

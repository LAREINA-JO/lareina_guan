// import Image from 'next/image'
import { Inter } from "next/font/google";
import Link from "next/link";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';



{/* 
  Underline Color:
    Name: slate-400
    Degree: lime-400
    School: orange-400
    Interest Direction: sky-400

  Text Color:
    Skills: violet-800
*/}

const inter = Inter({ subsets: ["latin"] });


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function Home() {

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:h-[500px] sm:h-[250px] h-[125px] bg-fixed bg-white">
        <img
          src="/profile2.jpg"
          alt="Image 1"
          className="rounded-full lg:w-32 lg:h-32 sm:w-24 sm:h-24 h-16 w-16 border-4 border-black"
          width="50"
          height="50"
        />

        <div className="justify-top items-right lg:space-x-10 sm:space-x-10 space-x-4 text-black mt-16 text-xl underline">
          <Link href="/">HOME</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/personal">MY LIFE</Link>
        </div>
      </div>

      {/* Images List */}
      <Box sx={{ width: 1, height: 1, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={8} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}



const itemData = [
  {
    img: '/lifeimages/56.jpg',
    title: 'image56',
  }, {
    img: '/lifeimages/55.jpg',
    title: 'image55',
  }, {
    img: '/lifeimages/54.jpg',
    title: 'image54',
  }, {
    img: '/lifeimages/53.jpg',
    title: 'image53',
  }, {
    img: '/lifeimages/52.jpg',
    title: 'image52',
  }, {
    img: '/lifeimages/51.jpeg',
    title: 'image51',
  }, {
    img: '/lifeimages/50.jpg',
    title: 'image50',
  }, {
    img: '/lifeimages/49.jpg',
    title: 'image49',
  }, {
    img: '/lifeimages/48.jpg',
    title: 'image48',
  }, {
    img: '/lifeimages/47.jpeg',
    title: 'image47',
  }, {
    img: '/lifeimages/46.jpg',
    title: 'image46',
  }, {
    img: '/lifeimages/45.jpg',
    title: 'image45',
  }, {
    img: '/lifeimages/44.jpg',
    title: 'image44',
  }, {
    img: '/lifeimages/43.jpg',
    title: 'image43',

  }, {
    img: '/lifeimages/42.jpg',
    title: 'image42',

  }, {
    img: '/lifeimages/41.jpg',
    title: 'image41',

  }, {
    img: '/lifeimages/40.jpg',
    title: 'image40',
  }, {
    img: '/lifeimages/39.jpg',
    title: 'image39',

  }, {
    img: '/lifeimages/38.jpg',
    title: 'image38',
  }, {
    img: '/lifeimages/37.jpg',
    title: 'image37',
  }, {
    img: '/lifeimages/36.jpg',
    title: 'image36',

  }, {
    img: '/lifeimages/35.jpg',
    title: 'image35',

  }, {
    img: '/lifeimages/34.jpg',
    title: 'image34',

  }, {
    img: '/lifeimages/33.jpg',
    title: 'image33',


  }, {
    img: '/lifeimages/32.jpg',
    title: 'image32',


  }, {
    img: '/lifeimages/31.jpeg',
    title: 'image31',
  }, {
    img: '/lifeimages/30.jpg',
    title: 'image30',
  }, {
    img: '/lifeimages/29.jpg',
    title: 'image29',

  }, {
    img: '/lifeimages/28.jpg',
    title: 'image28',


  }, {
    img: '/lifeimages/27.jpg',
    title: 'image27',

  }, {
    img: '/lifeimages/26.jpeg',
    title: 'image26',

  }, {
    img: '/lifeimages/25.jpeg',
    title: 'image25',
  }, {
    img: '/lifeimages/24.jpeg',
    title: 'image24',
  }, {
    img: '/lifeimages/23.jpg',
    title: 'image23',
  }, {
    img: '/lifeimages/22.jpg',
    title: 'image22',

  }, {
    img: '/lifeimages/21.jpg',
    title: 'image21',
  }, {
    img: '/lifeimages/20.jpg',
    title: 'image20',
  }, {
    img: '/lifeimages/19.jpg',
    title: 'image19',

  }, {
    img: '/lifeimages/18.jpg',
    title: 'image18',

  }, {
    img: '/lifeimages/17.jpeg',
    title: 'image17',

  }, {
    img: '/lifeimages/16.jpg',
    title: 'image16',
  }, {
    img: '/lifeimages/15.jpeg',
    title: 'image15',

  }, {
    img: '/lifeimages/14.jpg',
    title: 'image14',
  }, {
    img: '/lifeimages/13.jpg',
    title: 'image13',

  }, {
    img: '/lifeimages/12.jpg',
    title: 'image12',

  }, {
    img: '/lifeimages/11.jpg',
    title: 'image11',

  }, {
    img: '/lifeimages/10.jpeg',
    title: 'image10',

  }, {
    img: '/lifeimages/9.jpg',
    title: 'image9',
  }, {
    img: '/lifeimages/8.jpg',
    title: 'image8',

  }, {
    img: '/lifeimages/7.jpeg',
    title: 'image7',

  }, {
    img: '/lifeimages/6.jpg',
    title: 'image6',

  }, {
    img: '/lifeimages/5.jpg',
    title: 'image5',

  }, {
    img: '/lifeimages/4.jpg',
    title: 'image4',

  }, {
    img: '/lifeimages/3.jpg',
    title: 'image3',
  }, {
    img: '/lifeimages/2.jpg',
    title: 'image2',

  }, {
    img: '/lifeimages/1.jpg',
    title: 'image1',

  },

];

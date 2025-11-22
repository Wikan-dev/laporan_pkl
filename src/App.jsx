import logo_ti from './assets/logo_ti.svg';
import hero_image from './assets/hero.png';
import arrow from './assets/arrow.svg';
import logo from './assets/logo.png';
import visi_misi from './assets/general-info1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import vscode from './assets/vscode.png';
import figma from './assets/figma.png';
import github from './assets/github.png';
import react from './assets/react.png';
import tailwind from './assets/tailwind.png';
import { useState } from 'react';

const Card = ({ bgColor, title, desc, srcc }) => {
  return (
    <div className={`w-[90%] h-[442px] flex flex-row justify-between p-10 mx-auto`} style={{ backgroundColor: bgColor }}>
      <div className='flex flex-col my-auto text-white'>
        <h1 className='font-bold text-4xl mb-5'>{title}</h1>
        <h1 className='w-200 text-xl'>{desc}</h1>
      </div>
      <img src={srcc} alt="image" />
    </div>
  )
}

const App = () => {
  const Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  className: "relative top-40"
};

const CardDetail = [
  {
    bgColor: "#2A2C2E",
    title: "React",
    desc: "React adalah library JavaScript berbasis komponen yang mempermudah pembuatan UI dinamis dan efisien melalui Virtual DOM serta dukungan JSX.",
    srcc: react
  },
  {
    bgColor: "#282A36",
    title: "Vscode",
    desc: "Tailwind CSS adalah framework utility-first yang menyediakan kelas siap pakai untuk styling cepat, konsisten, dan mudah dikustomisasi langsung dari markup.",
    srcc: vscode
  },
  {
    bgColor: "#000000",
    title: "Figma",
    desc: "Figma adalah platform desain kolaboratif berbasis web yang digunakan untuk membuat antarmuka, prototipe interaktif, dan asset visual, dengan fitur real-time collaboration yang memudahkan tim bekerja secara simultan di satu proyek.",
    srcc: figma
  },
  {
    bgColor: "#181616",
    title: "Github",
    desc: "GitHub adalah platform berbasis web untuk menyimpan dan mengelola kode menggunakan Git, sekaligus memfasilitasi kolaborasi lewat fitur seperti pull request, issue tracking, dan version control agar pengembangan proyek bisa lebih terstruktur dan terkoordinasi.",
    srcc: github
  },
  {
    bgColor: "#0F172A",
    title: "Tailwind",
    desc: "Tailwind CSS adalah framework utility-first yang menyediakan kelas siap pakai untuk styling cepat, konsisten, dan mudah dikustomisasi langsung dari markup.",
    srcc: tailwind
  },
]

const [open, setOpen] = useState(false);

 return(
  <div className='mx-8 mt-6 scroll-smooth transition-all duration-500 ease-in'>
    {/* header */}
    <div className='flex flex-row justify-between mb-5'>
      <img src={logo_ti} alt="ti" />
      <div className='flex flex-row mt-3 gap-[122px]'>
        <a href="#">Home</a>
        <a href="#">Tools</a> 
        <a href="#project">Projects</a>
        <a href="#">Informasi Umum</a>
        <a href="#">Penutup</a>
      </div>
    </div>

    {/* hero */}
    <div className='mb-20'>
      <img src={hero_image} alt="image" className='w-full object-cover h-140' />
      <div className='relative'>
        <h1 className='font-gajraj text-[91px] h-25'>LAPORAN PKL</h1>
        <div className='flex flex-row'>
          <h1 className='text-[48px] font-bold'>BTW Edutech</h1>
          <h1 className='text-[20px] mt-8'>By - Gede Jnana Wikan La Permana</h1>
        </div>
        <img src={arrow} alt="arrow" className='bg-gray-100 rounded-full absolute right-0 bottom-0 hover:bg-gray-300 transition-all duration-300 ease-in-out' />
      </div>
    </div>

    <div className='h-screen'>
      <h1 className='my-10 relative top-5'>Informasi Umum</h1>
      <div className='flex flex-row gap-10'>
        <div className='w-180 h-90 shrink-0 flex justify-center items-center bg-gray-400 rounded-br-[45px] shadow-[inset_0_0px_10px_rgba(0,0,0,0.6)]'>
          <img src={logo} alt="logo" className='drop-shadow-xl/50 max-w-full max-h-full object-contain'/>
        </div>
        <div className='flex-1 gap-5 flex flex-col'>
          <h1 className='text-3xl font-bold'>Sejarah</h1>
          <h1 className='w-auto'>BTW berdiri di Denpasar tahun 2018 sebagai bimbel kedinasan, lalu ekspansi cabang sejak 2019 dan makin berkembang saat pandemi lewat platform digital Smart BTW yang kemudian menjadi BTW Edutech. Pada 2023 mereka beralih menjadi BTW Academy dengan fokus pelatihan teknologi dan terus menambah cabang serta sistem bagi hasil. Tahun 2025, BTW mulai menerapkan model waralaba dan membentuk AITDI untuk mewadahi instruktur teknologi digital di Indonesia.</h1>
        </div>
      </div>
      <div className='flex flex-row-reverse gap-10'>
          <img src={visi_misi} alt="logo" className='object-cover w-180 h-100 rounded-tl-[45px] shadow-[inset_0_0px_10px_rgba(0,0,0,0.6)]'/>
        <div className='flex-1 gap-5 flex flex-col mt-10'>
          <h1 className='text-3xl font-bold'>Visi dan Misi</h1>
          <h1 className='font-bold text-2xl'>Visi:</h1>
          <ul className='list-disc pl-6'>
            <li>Menjadi lembaga pendidikan dan pelatihan terdepan mempersiapkan generasi pemenang untuk Indonesia Maju 2045.</li>
          </ul>
          <h1 className='font-bold text-2xl'>Misi:</h1>
          <ul className='list-disc pl-6'>
            <li>Menyelenggarakan Bimbingan Belajar seleksi masuk PTN, PTK, ASN, TNI, Polri.</li>
            <li>Mengelola Kursus & Pelatihan Kerja di bidang teknologi digital & industri.</li>
            <li>Membangun karakter profesional dan berintegritas melalui penguatan soft skills.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className='h-screen px-4'>
      <h1 className='my-5 relative top-5'>Tools</h1>
      <Slider {...Settings}>
        {CardDetail.map((item, i) => (
          <Card key={i} {...item} />
        ))}
        
      </Slider>
    </div>

    <div className='w-full h-screen'>
        <h1 className='my-10 relative top-5' id='project'>Projects</h1>
        
        <div className='flex justify-center relative'>
          <div className={`w-200 h-70 bg-linear-0 z-20 to-[#5ED8F9] from-[#039AC4] rounded-3xl mx-auto flex justify-center relative top-40 transition-all duration-300 ease-out ${open ? 'scale-120 translate-y-10' : 'scale-100'}`}>
            <button onClick={() => setOpen((!open))} className='absolute top-10 bg-[#0891D1] text-white text-3xl px-12 py-3 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] font-bold'>Open</button>
          </div>
          <div className={`bg-red-500 absolute z-2 transition-all ease-out top-40 rounded-xl hover:scale-y-110  ${open ? '-translate-y-10 h-70 w-220 duration-400' : 'opacity-0 h-0  w-170 duration-300'} `}></div>
          <div className={`bg-blue-500 absolute z-1 transition-al ease-out top-40 rounded-xl hover:scale-y-110  ${open ? '-translate-y-20 h-70 w-210 duration-500' : 'opacity-0 h-0 w-170 duration-300'} `}></div>
          <div className={`bg-green-500 absolute z-0 transition-all ease-out top-40  rounded-xl hover:scale-y-110 ${open ? '-translate-y-30 h-70 w-200 duration-600' : 'opacity-0 h-0 w-170 duration-300'} `}></div>
        </div>
    </div>
  </div>
 ) 
}

export default App;
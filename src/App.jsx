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
import footer_image from './assets/footer_image.png';
import { useState } from 'react';

const Card = ({ bgColor, title, desc, srcc }) => {
  return (
    <div className={`w-[90%] lg:h-[442px] flex lg:flex-row flex-col-reverse justify-between p-10 mx-auto`} style={{ backgroundColor: bgColor }}>
      <div className='flex flex-col my-auto text-white w-full'>
        <h1 className='font-bold text-4xl mb-5 mx-auto lg:mx-0'>{title}</h1>
        <h1 className='lg:w-200 w-full truncate lg:text-xl hidden lg:block'>{desc}</h1>
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
  className: "relative top-10 lg:top-40"
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
  <div className='mx-3 lg:mx-8 mt-6 scroll-smooth transition-all duration-500 ease-in'>
    {/* header */}
    <div className='lg:flex flex-row justify-between mb-5 '>
      <img src={logo_ti} alt="ti" />
      <div className='hidden lg:flex flex-row mt-3 gap-[122px]'>
        <a href="#">Home</a>
        <a href="#">Tools</a> 
        <a href="#project">Projects</a>
        <a href="#">Informasi Umum</a>
        <a href="#">Penutup</a>
      </div>
    </div>

    {/* hero */}
    <div className='mb-20'>
      <img src={hero_image} alt="image" className='w-full object-cover h-120' />
      <div className='relative'>
        <h1 className='font-gajraj text-4xl lg:text-[91px] lg:h-25'>LAPORAN PKL</h1>
        <div className='flex lg:flex-row flex-col'>
          <h1 className='lg:text-[48px] font-bold'>BTW Edutech</h1>
          <h1 className='lg:text-[20px] lg:mt-8'>By - Gede Jnana Wikan La Permana</h1>
        </div>
        <img src={arrow} alt="arrow" className='bg-gray-100 rounded-full absolute right-0 bottom-0 hover:bg-gray-300 top-0 lg:top-10 scale-50 transition-all duration-300 ease-in-out' />
      </div>
    </div>

    <div className='h-screen'>
      <h1 className='my-10 relative top-5'>Informasi Umum</h1>
      <div className='flex lg:flex-row flex-col gap-10'>
        <div className='lg:w-180 h-90 shrink-0 flex justify-center items-center bg-gray-400 lg:rounded-br-[45px] shadow-[inset_0_0px_10px_rgba(0,0,0,0.6)]'>
          <img src={logo} alt="logo" className='drop-shadow-xl/50 max-w-full max-h-full object-contain'/>
        </div>
        <div className='flex-1 gap-5 flex flex-col mb-10 lg:mb-0'>
          <h1 className='text-3xl font-bold'>Sejarah</h1>
          <h1 className='w-auto'>BTW berdiri di Denpasar tahun 2018 sebagai bimbel kedinasan, lalu ekspansi cabang sejak 2019 dan makin berkembang saat pandemi lewat platform digital Smart BTW yang kemudian menjadi BTW Edutech. Pada 2023 mereka beralih menjadi BTW Academy dengan fokus pelatihan teknologi dan terus menambah cabang serta sistem bagi hasil. Tahun 2025, BTW mulai menerapkan model waralaba dan membentuk AITDI untuk mewadahi instruktur teknologi digital di Indonesia.</h1>
        </div>
      </div>
      <div className='flex lg:flex-row-reverse flex-col gap-10'>
          <img src={visi_misi} alt="logo" className='object-cover w-180 h-100 lg:rounded-tl-[45px] shadow-[inset_0_0px_10px_rgba(0,0,0,0.6)]'/>
        <div className='flex-1 gap-5 flex flex-col lg:mt-10'>
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

    <div className='mb-30 px-4 mt-230 lg:mt-0'>
      <h1 className='lg:my-5 relative top-5'>Tools</h1>
      <Slider {...Settings}>
        {CardDetail.map((item, i) => (
          <Card key={i} {...item} />
        ))}
        
      </Slider>
    </div>

    <div className='w-full lg:h-screen mb-50 lg:mb-0 lg:mt-70'>
        <h1 className='lg:my-10 relative lg:top-5' id='project'>Projects</h1>
        
        <div className='flex justify-center relative -top-20 my-10'>
          <div className={`lg:w-200 w-70 h-50 lg:h-70 bg-linear-0 z-20 to-[#5ED8F9] from-[#039AC4] rounded-3xl mx-auto flex justify-center relative top-40 transition-all duration-300 ease-out ${open ? 'scale-120 translate-y-10' : 'scale-100'}`}>
            <button onClick={() => setOpen((!open))} className='absolute top-10 bg-[#0891D1] text-white text-xl lg:text-3xl px-12 py-3 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] font-bold'>Open</button>
          </div>
          <div className={`bg-red-500 absolute z-2 transition-all ease-out top-40 rounded-xl hover:scale-y-110  ${open ? '-translate-y-10 h-70 w-65 lg:w-220 duration-400' : 'opacity-0 h-0  w-30 duration-300'} `}></div>
          <div className={`bg-blue-500 absolute z-1 transition-al ease-out top-40 rounded-xl hover:scale-y-110  ${open ? '-translate-y-20 h-70 w-55 duration-500' : 'opacity-0 h-0 w-30 duration-300'} `}></div>
          <div className={`bg-green-500 absolute z-0 transition-all ease-out top-40  rounded-xl hover:scale-y-110 ${open ? '-translate-y-30 h-70 w-45 duration-600' : 'opacity-0 h-0 w-30 duration-300'} `}></div>
        </div>
    </div>

    {/* footer */}

    <div className=' bg-black w-full absolute left-0 p-10 flex flex-row justify-between'>
      <div className='text-white w-100 leading-7 flex flex-col gap-10'>
      <h1 className='relative'>Penutup</h1>
        <div>
          <h1 className='font-bold'>Kesan dan Pesan Selama PKL</h1>
          <p>
            Secara keseluruhan, program Praktik Kerja Lapangan ini sudah memberikan saya pengalaman kerja yang akan sangat berguna untuk kedepannya baik secara skill maupun mental. 

            Saya juga dapat bertemu dengan orang-orang hebat dan profesional dalam bidangnya masing-masing baik front-end maupun back-end
          </p>
        </div>
        <div>
          <h1 className='font-bold'>Kesimpulan</h1>
          <p>Dengan adanya pelaksanaan kerja praktek ini, memperoleh banyak manfaat yang mungkin tidak diperoleh dalam pelajaran di sekolah. Disini dalam dunia kerja yang sesungguhnya dituntut untuk mandiri sabar dan bertanggung jawab dalam menyelesaikan tugas. Dalam kerja praktek ini berkesempatan menerapkan ilmu yang didapatkan dalam dunia pelajaran di sekolah.</p>
        </div>
      </div>
      <div className='relative '>
        <div className='w-120 p-10 h-full relative z-10 bg-cover bg-center rounded-3xl lg:block hidden' style={{ backgroundImage: `url(${footer_image})` }}>
          <h1 className='text-white absolute bottom-0 w-[90%] -translate-x-1/2 left-1/2 right1/2'>{'BTW Edutech adalah ekosistem edukasi berbasis teknologi informasi dari PT. Bina Taruna Wiratama (BTW) yang berfokus pada bimbingan dan pelatihan seleksi masuk instansi pemerintah (ASN, TNI, Polri), perguruan tinggi kedinasan (PTK), dan perguruan tinggi negeri (PTN)'}</h1>
        </div>
      </div>
    </div>
  </div>
 ) 
}

export default App;
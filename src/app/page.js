'use client'
import { useState,useEffect } from 'react';

import { Dancing_Script } from '@next/font/google';
const dancingScript = Dancing_Script({ subsets: ['latin'] });
import localFont from '@next/font/local';
import './fontStyle.css'
const Veneer = localFont({ src: './fonts/Fontspring-DEMO-Veneer.otf' });

const Mistery = localFont({ src: './fonts/Mistery Brush.otf' });

export default function Home() {

  const [friends, setFriends] = useState([]);
  const [fontFile, setFontFile] = useState(null);

  // async function logItemToDb() {

  //   const friends = await db.friends
  //     .where("age")
  //     .between(18, 65)
  //     .toArray();

  //   setFriends(friends);
  // }

  const handleFileChange = (event) => {
    console.log('file')

    const file = event.target.files[0];
    console.log(file)
    setFontFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('event')
    console.log(event)
    // 在这里处理文件上传逻辑
    // 将字体文件保存到 public/fonts 目录下
    // 可以使用第三方库如 `multer` 处理文件上传
  };

  return (
    <>
      <style jsx global>{`
    .Veneer {
      font-family: ${Veneer.style.fontFamily};
    }
  `}</style>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1>上传自定义字体文件</h1>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange}  />
            <button type="submit">上传</button>
          </form>
          {fontFile && <p className='customFont'>已选择字体文件：{fontFile.name}</p>}
        </div>
        <div className={dancingScript.className + " z-10 w-full max-w-5xl items-center justify-between font-mono text-lg lg:flex"}>
          min-h-screen flex-col items-center justify-betw
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-lg lg:flex">
          min-h-screen flex-col items-center justify-betw
        </div>
        <div className={" z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"}>
          <p className={"Veneer"}>llection of high-quality web fonts for use on web projects. Additionally, all fonts can be downloaded for installation on local systems. Fonts are pulled into your website through Google’s content delivery network (CDN) and will load automatically once installed.、
            器开发人员工具面板和终端中看到返回的对象</p>
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          llection of high-quality web fonts for use on web projects. Additionally, all fonts can be downloaded for installation on local systems. Fonts are pulled into your website through Google’s content delivery network (CDN) and will load automatically once installed.
          器开发人员工具面板和终端中看到返回的对象
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-lg lg:flex">
          local字体 min-h-screen flex-col items-center justify-betw
        </div>
      
      </main>
    </>
  )
}

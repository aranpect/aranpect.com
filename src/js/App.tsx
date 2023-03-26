import React, { useEffect } from "react";
import Twitter from "../image/twitter.webp";
import Github from "../image/github.webp";
import Discord from "../image/discord.webp";
import Logo from "../image/logo.webp";
import { MobileView, BrowserView ,isMobile} from "react-device-detect";

export default function App() {
  return (
    <>
    <div className="bg">
      <div className="glass">
      <main className="relative">
        <div className="flex bg-green-200">
          <div className="w-4/6 flex mobile-top">
            <a href="https://aranpect.com"><img src={Logo} alt="Logo" className="logo-fix"></img></a>
            <p className="w-1/6 p-3 m-1 flex logo not-large"><a href="https://aranpect.com">Aranpect</a></p>
          </div>
          <div className="btn-top w-2/6 mobile-top-right right-div">
            <p className="p-3 m-1 p-header justify-around btn-top mobile-top-p">お問い合わせ</p>
            <p className="p-3 m-1 p-header justify-around btn-top mobile-top-p"><a href="https://github.com/aranpect">開発物</a></p>
            <p className="p-3 m-1 p-header justify-around btn-top mobile-top-p">ホーム</p>
          </div>
        </div>
        <section>
          <div className="flex">
            <div className="w-1/5 border-2 rounded-md p-3 m-1 bg-violet-600 div-up mobile-div">
              <p className="text-center text-3xl text-white mobile-p">LINK</p>
              <a href="https://twitter.com/aranpect"><img src={Twitter} alt="twitter" className="img-toto"></img></a>
              <p className="text-center text-white">Twitter</p>
              <a href="https://discord.com"><img src={Discord} alt="discord" className="img-toto"></img></a>
              <p className="text-center text-white">Discord</p>
              <a href="https://github.com/aranpect"><img src={Github} alt="github" className="img-toto"></img></a>
              <p className="text-center text-white">Github</p>
            </div>
            <div className="w-3/5 border-2 rounded-md p-3 m-1 bg-blue-600 div-up mobile-div">
              <h1 className="text-center text-white p-3">Aranpect</h1>
            </div>
            <div className="w-1/5 border-2 rounded-md p-3 m-1 bg-red-600 div-up mobile-div">
              <p className="text-center text-3xl text-white mobile-p">Service</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/5">
              
            </div>
            <div className="w-3/5 justify-center p-3 border-black go-white rounded-md div-up mobile-div">
              <p className="main-p border-2 rounded-md bg-green-100 text-3xl p-2">自己紹介</p>
              <div>
                <p className="text-center under-p">ガジェットが好きな学生</p>
                <p className="text-center under-p">たまにプログラミングをしています</p>
                <p className="text-center under-p">よろしくおねがいします！</p>
              </div>
            </div>
            <div className="w-1/5">
              
            </div>
          </div>
          <div className="flex">
            <div className="w-1/5">
              <p className="text-center">広告枠</p>
            </div>
            <div className="w-3/5 justify-center p-3 border-black go-white rounded-md div-up mobile-div">
              <p className="main-p border-2 rounded-md bg-green-100 text-3xl p-2">相互リンク</p>
              <div>
                <a href="https://takoserver.com"><p className="text-center a-large">takoserver</p></a>
                <a href="https://suzuneu.com"><p className="text-center a-large">すずねーう</p></a>
                <a href="https://natsukimc.com"><p className="text-center a-large">なつきmc</p></a>
                <a href="https://404kit.com"><p className="text-center a-large">404kit</p></a>
              </div>
            </div>
            <div className="w-1/5">
              <p className="text-center">広告枠</p>
            </div>
          </div>
        </section>
        <footer>
          <p className="text-center">Copyright © 2022-2023 Aranpect All Rights Reserved.</p>
        </footer>
      </main>
      </div>
    </div>
    </>
  );
};
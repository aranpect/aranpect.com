import React, { useEffect } from "react";
import Twitter from "../image/twitter.webp";
import Github from "../image/github.webp";
import Discord from "../image/discord.webp";
import { MobileView, BrowserView } from "react-device-detect";

export default function App() {
  return (
    <>
      <main className="relative">
        <div className="flex bg-green-200">
          <div className="w-4/6">
            <p className="w-2/6 p-3 flex"><a href="https://aranpect.com">Aranpect</a></p>
          </div>
          <div className="flex justify-end">
            <p className="p-3 m-1 p-header">ホーム</p>
            <p className="p-3 m-1 p-header"><a href="https://github.com/aranpect">開発物</a></p>
            <p className="p-3 m-1 p-header">お問い合わせ</p>
          </div>
        </div>
        <section>
          <div className="flex">
            <div className="w-1/5 border-2 rounded-md p-3 m-1 bg-violet-600 div-up">
              <p className="text-center text-3xl text-white">LINK</p>
              <a href="https://twitter.com/aranpect"><img src={Twitter} alt="twitter" className="img-toto"></img></a>
              <a href="https://discord.com"><img src={Discord} alt="discord" className="img-toto"></img></a>
              <a href="https://github.com/aranpect"><img src={Github} alt="github" className="img-toto"></img></a>
            </div>
            <div className="w-3/5 border-2 rounded-md p-3 m-1 bg-blue-600 div-up">
              <h1 className="text-center text-6xl text-white p-3">Aranpect</h1>
            </div>
            <div className="w-1/5 border-2 rounded-md p-3 m-1 bg-red-600 div-up">
              <p className="text-center text-3xl text-white">Service</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/5">
              
            </div>
            <div className="w-3/5 justify-center p-3 border-black go-white">
              <h2 className="text-center flex border-2 rounded-md bg-green-100 ">自己紹介</h2>
              <div>
                <p className="text-center">ガジェットが好きな学生</p>
                <p className="text-center">たまにプログラミングをしています</p>
              </div>
            </div>
            <div className="w-1/5">
              
            </div>
          </div>
          <div className="flex">
            <div className="w-1/5">
              <p className="text-center">広告枠</p>
            </div>
            <div className="w-3/5 justify-center p-3 border-black go-white">
              <h2 className="text-center flex border-2 rounded-md bg-green-100">相互リンク</h2>
              <div>
                <a href="https://takoserver.com"><p className="text-center">takoserver</p></a>
                <a href="https://suzuneu.com"><p className="text-center">すずねーう</p></a>
                <a href="https://natsukimc.com"><p className="text-center">なつきmc</p></a>
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
    </>
  );
};
import React, { useEffect } from "react";
import { MobileView, BrowserView } from "react-device-detect";
import Twitter from './twitter.webp';
import Github from './github.webp';
import Discord from './discord.webp';

export default function App() {
  return (
    <>
      <main className="relative">
        <div className="flex bg-green-200">
          <div className="w-4/6">
            <p className="w-2/6 p-3"><a href="https://aranpect.com">Aranpect</a></p>
          </div>
          <div className="flex">
            <p className="p-3">ホーム</p>
            <p className="p-3"><a href="https://github.com/aranpect">開発物</a></p>
            <p className="p-3">お問い合わせ</p>
          </div>
        </div>
        <section>
          <div className="flex">
            <div className="w-1/5 border-2 rounded-md p-3 m-1 bg-violet-600">
              <p className="text-center text-3xl">LINK</p>
              <a href="https://twitter.com/aranpect"><img src="Twitter" alt="twitter"></img></a>
              <a href="https://discord.com"><img src="Discord" alt="discord"></img></a>
              <a href="https://github.com/aranpect"><img src="Github" alt="github"></img></a>
            </div>
            <div className="w-3/5 border-2 rounded-md p-3 m-1 bg-blue-900">
              <h1 className="text-center text-6xl text-white">Aranpect</h1>
            </div>
            <div className="w-1/5 border-2 rounded-md p-3 m-1">
              <p className="text-center text-3xl">Service</p>
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
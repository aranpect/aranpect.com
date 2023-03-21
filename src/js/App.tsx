import React, { useEffect } from "react";
import { MobileView, BrowserView } from "react-device-detect";

export default function App() {
  return (
    <>
      <main className="relative">
        <div className="">
          <div>
            <p>Aranpect</p>
          </div>
          <div>
            <p>ホーム</p>
            <p>開発したもの</p>
          </div>
        </div>
      </main>
    </>
  );
};
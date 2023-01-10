"use client"; // this is a client component
import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";

function Reading() {
  const [word, setword] = useState([] as any);
  var progressvalue=word.length * 10;

  

  function selected(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    (e.target as Element).classList.toggle("bg-slate-50");
    (e.target as Element).classList.toggle("text-black");
    (e.target as Element).classList.toggle("bg-amber-500");
    (e.target as Element).classList.toggle("text-white");
    (e.target as Element).classList.toggle("active");

    // setword((prev,key)=>key)

    setword((prev:any) => (prev.includes((e.target as HTMLInputElement).value) ? prev.filter((el:any) => el !== (e.target as HTMLInputElement).value) : [...prev, (e.target as HTMLInputElement).value]));
    console.log(word);
  }

  return (
    <div className="h-auto  box-border text-center bg-zinc-100 font-sans text-slate-800 text-base">
      <header className=" text-centre pt-14 m-auto bg-zinc-100 ">
        <div className="inline">
          <Link href="/home">
            <img src="/cross.png" alt="" className="ml-10 w-4 h-4 float-left" />
          </Link>

          <h1 className="pb-4 justify-center text-lg font-medium">Grammer</h1>
        </div>
        <div className="flex justify-center">
        <ProgressBar
          customLabel=""
          className="m-5 h-1 md:w-2/4 lg:w-2/6"
          completed={progressvalue}
          height="10px"
          bgColor="#F59E0B"
          baseBgColor="#D3D3D3"
          isLabelVisible={false}
          borderRadius="20px"
        /></div>
      </header>

      <main>
        {/* output section */}
        <section id="output" className="bg-sky-50 py-12 rounded-t-3xl">
          <h2 className="text-xl mb-8">Translate this sentense</h2>

          <div className="bg-amber-50 p-16 rounded-3xl flex flex-wrap w-full justify-center md:w-2/4 m-auto lg:w-3/6">
            {/* <h1 className="">If you don't like your destiny, don't accept it</h1> */}
            {word.map((oneword:any) => (
              <p className="text-xl font-extrabold mx-2">{oneword}</p>
            ))}
          </div>
        </section>
        {/* input section */}
        <section id="input" className="rounded-t-3xl mt-8  bg-1inc-200 flext justify-center m-auto ">
          <div className="flex flex-wrap justify-around items-center rounded-md mt-10 px-10 py-5 w-full text-base md:w-2/4 lg:w-3/6 m-auto">
            <button className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg" value="if" key="1" onClick={selected}>
              If
            </button>
            <button className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg" value="you" key="2" onClick={selected}>
              you
            </button>
            <button
              className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg"
              value="do"
              key="3"
              onClick={selected}
            >
              do
            </button>
            <button
              className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg"
              value="not"
              key="4"
              onClick={selected}
            >
              not
            </button>
            <button className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg" value="like" key="5" onClick={selected}>
              like
            </button>
            <button className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg" value="your" key="6" onClick={selected}>
              your
            </button>
            <button
              className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg"
              value="destiny"
              key="7"
              onClick={selected}
            >
              destiny
            </button>
            <button
              className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg"
              value="then"
              key="8"
              onClick={selected}
            >
              then
            </button>
           
            <button
              className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg"
              value="change"
              key="9"
              onClick={selected}
            >
              change
            </button>
            <button className="m-2 py-2 px-4 font-medium bg-slate-50 text-black rounded-lg" value="it." key="10" onClick={selected}>
              it
            </button>
          </div>

          {/* final button */}
          <button className="bg-blue-600 shadow-md hover:bg-blue-700 mt-7 md:w-2/4 lg:w-2/6 text-white rounded-3xl p-6 w-3/4">Check it</button>
        </section>
      </main>
    </div>
  );
}

export default Reading;

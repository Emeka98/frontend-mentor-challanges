import React from "react";
import Logo from "./Logo";
import { useData } from "../../context/ThemeContext";
import Example from "./Example";
import ErrorPage from './ErrorPage'
import LoadingPage from "./LoadingPage";
function Content() {
  const { apiData , loading } = useData();
  const data = apiData ? apiData[0] : null;
  



  const handlePlay = async () => {
    if (data !== null) {
      const filledPhonetics = data.phonetics.filter(
        (phonetic) => !!phonetic.audio
      )[0].audio;
      const audio = new Audio(filledPhonetics);
      await audio.play();
    }
  };



  return (
    <>
       <>
      {loading ? (

      <LoadingPage />
      ) : data ? (
        // Veriler yüklendikten sonra içeriği göster
        <>
          <div className="mt-7 md:mt-12 flex justify-between items-center gap-2 md:gap-3">
            <div className="flex flex-col">
              <h2 className="font-bold text-[32px]">{data?.word}</h2>
              <p className="text-lg text-[#A445ED] font-normal">
                {data?.phonetic}
              </p>
            </div>
            <button onClick={handlePlay}>
              <Logo />
            </button>
          </div>
          <Example data={data} />
        </>
      ) : (
        // Hata durumunda error sayfasını göster
        <ErrorPage />
      )}
    </>
    </>
  );
}

export default Content;

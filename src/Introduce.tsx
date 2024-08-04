const Introduce = () => {
    return (
        <div className="h-[100vh] flex flex-col gap-[40px] text-black">
            <section className="absolute top-[48px] left-[48px] sidebar slider1 flex flex-col gap-[100px] items-center">
                <img src="side_trophy.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />
                <img src="side_infinite.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />
                <img src="side_stair.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />

                <img src="side_trophy.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />
                <img src="side_infinite.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />
                <img src="side_stair.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />
            </section>
            <div className="mt-[4rem] animate-appear-first">
                <img src="main_banner.png" alt="main_banner" />
                <img src="try_catch_band.png" alt="try_catch_band" className="mt-[12px]" />
            </div>
            <img src="gurumi.png" alt="gurumi" className="animate-appear-second max-w-[300px] self-center" />
            <button type="button" className="w-[220px] self-center bg-[#FF4433] p-0 text-white border-stone-900 border-[3px] font-semibold animate-appear-third hover:bg-[#FF443370]"><p className="text-[36px] m-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-border">신청하러 가기</p></button>
            <section className="absolute top-[48px] right-[48px] sidebar slider2 flex flex-col gap-[100px] items-center">
                <img src="side_trophy.png" alt="side_trophy"className="w-[16vw] max-w-[300px]" />
                <img src="side_infinite.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />
                <img src="side_stair.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />

                <img src="side_trophy.png" alt="side_trophy"className="w-[16vw] max-w-[300px]" />
                <img src="side_infinite.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />
                <img src="side_stair.png" alt="side_trophy" className="w-[16vw] max-w-[300px]" />
            </section>
        </div>
    )
}

export default Introduce;
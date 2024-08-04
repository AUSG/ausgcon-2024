const Introduce = () => {
    return <div className="h-[100vh] flex flex-col gap-[80px] text-white">
        <div className="mt-[8rem] animate-appear-first">
            <p className="text-[3rem] font-semibold">AUSGCON 2024</p>
            <p className="text-[2rem] font-semibold">: try-catch</p>
        </div>
        <img src="gurumi.png" alt="gurumi" className="animate-appear-second max-w-[400px] self-center" />
        <button type="button" className="w-[300px] self-center bg-white text-black rounded-[20px] font-semibold animate-appear-third border-none hover:bg-gray-900 hover:text-white">신청하러 가기</button>
    </div>
}

export default Introduce;
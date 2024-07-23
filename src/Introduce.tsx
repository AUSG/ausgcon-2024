const Introduce = () => {
    return <div className="h-[100vh] flex flex-col gap-[80px] text-white">
        <div className="mt-[8rem]">
            <p className="text-[3rem] font-semibold">AUSGCON 2024</p>
            <p className="text-[2rem] font-semibold">: try-catch</p>
        </div>
        <img src="cloud_1.png" alt="cloud_1" className="animate-appear" />
        <button type="button" className="bg-white text-black rounded-[20px] font-semibold">신청하러 가기</button>
    </div>
}

export default Introduce;
const Session = () => {
    return (
        <article className="flex flex-col justify-between gap-[20px] ">
            <div className="w-full flex justify-between items-center">
                <p className="text-[2rem] font-semibold">Hyeonggeun Oh</p>
                <div className="w-[4rem] bg-[#54B9C5] rounded-[20px] text-black flex justify-center items-center">A홀</div>
            </div>
            <span>Lorem Ipsum main content. Lorem Ipsum main content. Lorem Ipsum main content. Lorem Ipsum main content. Lorem Ipsum main content. Lorem Ipsum main content.Lorem Ipsum main content. Lorem Ipsum main content. Lorem Ipsum main content.</span>
            <div className="flex gap-[1rem]">
                <img alt="profile img" src="avatar.png" />
                <div className="flex flex-col justify-evenly">
                    <p className=" text-[1rem] font-medium">배진수</p>
                    <p className="text-gray-300">당근마켓</p>
                </div>
            </div>
        </article>
    )
}

const Timetable = () => {
    return <section className="p-[1rem] text-black min-h-[100vh] flex flex-col items-center gap-[40px]">
        <div className="w-full font-semibold text-white text-[4rem] py-[1rem] text-border-3 ">Time Table</div>
        <Session />
        <Session />
        <Session />
        <Session />
    </section>
}

export default Timetable
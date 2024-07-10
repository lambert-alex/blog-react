const HomeLayout = ({ children }: { children:React.ReactNode }) => {
    return (
        <div className={"dark:bg-slate-900 dark:text-white bg-slate-100 text-black pb-[20px] md:min-h-screen font-regular text-lg leading-relaxed"}>
            {children}
        </div>
    )
}

export default HomeLayout
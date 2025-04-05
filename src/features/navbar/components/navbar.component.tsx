
export function NavBar(){

    return (
        <div className=" grid grid-cols-3 gap-5 w-full h-20 place-items-center shadow-md  lg:h-24">
            <div className="flex gap-4 text-sm md:text-base lg:text-lg">
                <a>Buy</a>
                <a>Rent</a>
                <a>Sell</a>
            </div>
            <img src="src/assets/RedKat_Logo.png" alt="RedKat" className="size-20 md:size-24 lg:size-28"/>
            <div className="flex gap-4 text-sm md:text-base lg:text-lg">
            <a>Login</a>
            <a>Sign Up</a>
            </div>
        </div>
    )
}
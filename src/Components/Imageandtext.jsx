export default function Imageandtext()
{
return(
    <>
                {/* Image container */}
                <div className="w-1/2 sm:block hidden relative ">
                    <img src="login.jpg"
                        className="rounded-l-xl h-screen w-full inset-0 " alt="Login" />

                    {/* Text at the bottom of the image */}
                    <div className="absolute bottom-0 left-0 right-0 mb-9 flex items-center justify-center text-center p-7 text-white font-bold text-2xl">
                        Track your inventory levels,
                        <br />
                        sales trends and best-selling
                        <br />
                        products in real time
                    </div>
                </div>
                <div className="absolute top-0 left-0 p-4 text-orange-400 font-bold text-4xl ">
                    POSy
                </div>
    </>)

}
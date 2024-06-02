import Link from "next/link";


export default function index() {
  return (
    <section
      className="relative w-[100%] h-[63vh] md:h-[35vh]
      lg:h-[60vh] 2xl:h-[44vh]"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
      }}
    >
      {/* <Banner /> */}

      <section
        className="relative w-[100%] h-[100%] overflow-clip
          2xl:w-[65%] mx-auto"
      >
        <img
          src={
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
          }
          alt="Hero"
          className="absolute top-0 left-0 z-[-1] w-full h-[100%] 
            object-cover object-center rounded-none 2xl:rounded"
        />

        <div
          className="absolute z-0 top-0 left-0 h-[100%] w-full 
          bg-blur"
        />

        <div className="absolute top-[12%] left-[5%] lg:top-[20%] ">
          <h1
            className="text-white text-[2.5rem] md:text-[52px] font-SG
              leading-[40px] md:leading-[52px] w-[80%] md:w-[90%] "
          >
            Welcome to <span className="font-bold">Stinky tailor fashion</span>
          </h1>
          <p
            className="font-SG text-white text-base md:text-lg italic 
              w-[98%] md:w-[75%] leading-6 mt-5"
          >
            Where Unconventional meets the Unforgettable
          </p>
          <Link href="/collections">
            <button
              className="
          bg-transparent text-white my-4 py-2 px-4 rounded-full font-bold
          hover:bg-white  border-2 border-white hover:text-black"
            >
            Shop Now
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}

export const CoreValues = () => {
  const stats = [
    {
      data: "3K",
      title: "Customers",
    },
    {
      data: "5K+",
      title: "Projects",
    },
  
    {
      data: "9.8",
      title: "Rating",
    },
  ];

  return (
    <section className="py-14">
       <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block w-full md:w-3/5">
          <img
          src="pic1.46.jpeg"
            className="rounded-lg h-64 w-full object-cover sm:h-96 md:h-96 lg:h-96 xl:h-96"
            alt=""
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              We do our best to make customers always happy
            </h3>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <h4 className="text-4xl text-indigo-600 font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> 


      
    </section>
  );
};

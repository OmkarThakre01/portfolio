import React from 'react';

const data = [
  {
    title: "Ceramic Cup - Handmade",
    description: "Dishwasher safe and glass glazed",
    imageUrl: "https://images.unsplash.com/photo-1623211269755-569fec0536d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Wooden Bowl",
    description: "Eco-friendly and sustainably sourced",
    imageUrl: "https://images.unsplash.com/photo-1623211269755-569fec0536d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Glass Bottle",
    description: "Recyclable and BPA-free",
    imageUrl: "https://images.unsplash.com/photo-1623211269755-569fec0536d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Glass Bottle",
    description: "Recyclable and BPA-free",
    imageUrl: "https://images.unsplash.com/photo-1623211269755-569fec0536d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Project = () => {
  return (
    <section className="mb-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Recent Projects</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 mx-4 sm:mx-8 lg:mx-16 xl:mx-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="group w-full max-w-[18rem] mx-auto flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <a href="#" className="relative mx-3 mt-3 flex h-48 overflow-hidden rounded-lg">
              <img
                className="absolute top-0 right-0 h-full w-full object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
            </a>
            <div className="mt-4 px-4 pb-4">
              <a href="#">
                <h5 className="text-lg font-semibold text-gray-800">{item.title}</h5>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </a>
              <a
                href="#"
                className="mt-3 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
              >
                View Me
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

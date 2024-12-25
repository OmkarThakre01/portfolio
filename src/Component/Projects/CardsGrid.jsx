import React from "react";


    const CardsGrid = ({ title, description, imageUrl }) => {
        return (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          </div>
      
  );
};

export default CardsGrid;

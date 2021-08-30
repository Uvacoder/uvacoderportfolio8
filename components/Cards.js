const Cards = ({ header, img, text }) => {
  return (
    <div className="text-center border border-gray-200 bg-white rounded-md shadow-sm">
      <div className="flex flex-col items-center py-4">
        <img src={img} alt="" className="h-16" />
        <h1 className="font-mono text-xl border-b-2 border-indigo-500 py-1 mt-2">
          {header}
        </h1>
      </div>
      <div className="pb-6">
        <p className="text-lg lg:text-base font-thin text-gray-800">{text}</p>
      </div>
    </div>
  );
};

export default Cards;

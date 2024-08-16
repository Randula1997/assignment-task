import Image from "next/image";

const Card = ({ imageUrl, description, title, price }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={150}
            className="rounded"
          />
        )}
        <div className="mt-4">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-gray-700 text-base mt-2">{description}</p>
          <p className="text-black text-lg font-semibold mt-4">LKR. {price}.00</p>
        </div>
        <button className="p-2 w-50 h-10 bg-blue-500 rounded-sm mr-5 mt-4"><p className="text-white">Buy Now</p></button>
        <button className="p-2 w-50 h-10 bg-slate-200 rounded-sm mr-5 mt-4 border-l-black"><p className="text-black">Buy Now</p></button>
      </div>
    );
  };
  
  export default Card
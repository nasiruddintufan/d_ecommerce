import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`hidden md:block ${className} absolute top-1/2 -right-10  -translate-y-1/2 rounded-full w-20 h-20 bg-theme p-2.5`}
      onClick={onClick}
    >
      <div className="w-full h-full bg-[#F3F9FB] rounded-full flex justify-center items-center">
        <BiChevronRight className='w-10 h-10 text-brand'/>
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`hidden md:block ${className} absolute top-1/2 -left-10 z-50 -translate-y-1/2 rounded-full w-20 h-20 bg-theme p-2.5`}
      onClick={onClick}
    >
      <div className="w-full h-full bg-[#F3F9FB] rounded-full flex justify-center items-center">
        <BiChevronLeft className="w-10 h-10 text-brand" />
      </div>
    </div>
  );
}

export {NextArrow,PrevArrow};
import { Link } from "react-router-dom";

const EmptyState = ({message, address, label}) => {
    return (
        <div className="min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center pb-16">
            <p className="text-gray-600 gap-5 text-xl md:text-3xl">{message}</p>
            <Link to={address} className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-secondary group-hover:-rotate-180 ease"></span>
                <span className="relative">{label}</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
        </div>
    );
};

export default EmptyState;
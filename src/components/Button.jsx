const Button = ({ label, iconURL, className = "" }) => {
  return (
    <button
      className={`${className} flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ring-2 ring-offset-4 ring-coral-red/20 hover:ring-coral-red transition-all duration-300`}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;

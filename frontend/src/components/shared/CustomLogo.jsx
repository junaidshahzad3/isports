import logoFooter from "../../assets/isports-logo.png";

const CustomLogo = ({ color }) => {
  return (
    <div className={`flex items-center`}>
      <img src={logoFooter} alt="logo" className="w-[100px]" />
      {/* <div className="-ms-4 text-xl text-blue-900">ISports</div> */}
    </div>
  );
};

export default CustomLogo;

import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className="flex justify-between items-center w-5/6 md:w-4/5 mx-auto my-5 md:my-8">
      <h1 className='text-2xl md:text-4xl font-bold'>Knowledge Hub</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
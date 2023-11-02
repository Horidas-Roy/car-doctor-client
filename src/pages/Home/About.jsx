import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className='w-1/2 relative'>
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 rounded-lg border-8 border-white shadow-2xl absolute right-5 top-1/2"
        />
        </div>
        <div className='w-1/2 p-4'>
          <h2 className="text-xl text-[#FF3811] font-bold">About Us</h2>
          <p className="py-6 text-[#151515] font-bold text-5xl w-3/4">
          We are qualified & of experience in this field
          </p>
          <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className='text-[#737373] mt-5 mb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

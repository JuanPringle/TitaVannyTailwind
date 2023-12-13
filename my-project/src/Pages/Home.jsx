import Arrow from "../assets/down-arrow.png"

function Home() {
  return (
    <>
      <div className='min-h-screen bg-pasadena bg-no-repeat bg-fixed bg-cover flex items-center backdrop-invert' style={{ filter: 'hue-rotate(180deg)' }}>
        <div>
          <p className='text-white text-center text-5xl font-body block mb-2 ml-32 bg-black p-3 bg-opacity-80'>WELCOME</p>
          <p className='text-white text-center block text-xl font-body ml-32 bg-black p-4 bg-opacity-80'><img src={Arrow} className=" mr-2 invert animate-bounce h-6 inline-block"></img>Scroll Down <img src={Arrow} className=" ml-2 invert animate-bounce h-6 inline-block"></img></p>
        </div>
      </div>
      <div className="flex align-middle mt-10 m-10 ">
        <p className=" text-white text-center mb-10 inline-block text-2xl">
          At Career Advantage, we set ourselves apart from other employment agencies
          by focusing not just on education, training, skills, and experience, but
          also through an understanding of the culture and management style of the
          client – understanding EVERY aspect of the equation of “what makes a
          perfect fit.” Creating a perfect fit gives both the candidate and the
          employer the highest chance of a successful and fulfilling match.
        </p>
        <span className='text-blue-700 font-body mb-5 inline-block ml-10 text-3xl'>
          NEED A WORKING VISA
        </span>
        <p className=" ml-10 text-white text-center text-xl">
          We can help! Career Advantage
          has been placing Working Visa candidates with sponsoring companies for over 21 years.
          <a className=" font-body block text-blue-500 hover:text-blue-300 duration-200 text-center mt-3">
            CLICK HERE
          </a>
        </p>
      </div>
      <div>
        <p className='text-blue-500 font-body mb-5 inline-block ml-10 text-3xl'>
          Join Us
        </p>
        <p className='text-white text-center mb-10 inline-block text-2xl'>
          As we continue to build on our more than 20 years of business success,
          we are looking for top industry talent to help shape and drive us forward.
          Career Advantage is a growing and progressive staffing firm located in the heart
          of downtown Los Angeles. We are an organization driven by relationships. For
          this reason, finding the right type of people who fit with our team's mission
          is critical to our success. Our positive work environment and commitment to
          teamwork sets us apart from our competition
        </p>
        <a className=" font-body block text-blue-500 hover:text-blue-300 duration-200 text-center mb-2">
          SUBMIT RESUME
        </a>
      </div>
      <div className='min-h-screen bg-worker bg-no-repeat bg-fixed bg-cover flex items-center'>
        <div>
          <p className=' text-white text-center text-5xl font-body block mb-2 ml-32 bg-black p-3 bg-opacity-80'>Contact Info</p>
          <p className='text-white text-center block text-xl font-body ml-32 bg-black p-2 bg-opacity-80'>CAREER ADVANTAGE</p>
          <p className='text-white text-center block text-xl font-body ml-32 bg-black p-2 bg-opacity-80'>680 E. Colorado Blvd., Suite 180</p>
          <p className='text-white text-center block text-xl font-body ml-32 bg-black p-2 bg-opacity-80'> Pasadena, CA 91101</p>
        </div>
      </div>
    </>
  )
}

export default Home;

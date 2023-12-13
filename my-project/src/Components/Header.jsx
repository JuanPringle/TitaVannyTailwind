import LinkedInIcon from '../assets/linkedinIcon.png'
import MetaIcon from '../assets/metaIcon.png'


function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950 py-10 flex justify-between z-50 ">
      <div>
        <h1 className="ml-10 text-blue-500 text-4xl font-body">
          Career Advantage
        </h1>
        <h1 className="ml-10 text-blue-500 text-xl font-body">
          Professional Staffing Solutions
        </h1>
      </div>
      <div className=" mr-10">
        <div className="space-x-4">
          <a href='/submitResume' className="text-xl bg-blue-500 rounded p-4 hover:bg-blue-300 duration-200 font-body">
            Submit a Resume
          </a>
          <a href='/contact' className="text-xl bg-blue-500 rounded p-4 hover:bg-blue-300 duration-200 font-body">
            Fill a Position
          </a>
          <a href='https://www.linkedin.com/in/career-advantage-b89b49ba/'>
            <img
              title="Linkedin"
              data-te-placement="top" 
              data-te-toggle="tooltip"
              className="m-auto inline-block h-10 rounded hover:animate-bounce"
              src={LinkedInIcon}
              alt="LinkedIn Icon"
            ></img>
          </a>
          <a href='https://www.facebook.com/CareerAdvantage/'>
            <img
              title="Facebook"
              data-te-placement="top" 
              data-te-toggle="tooltip"
              className="m-auto inline-block h-10 rounded-full bg-white hover:animate-bounce duration-200"
              src={MetaIcon}
              alt="Meta Icon"
            ></img>
          </a>
        </div>
        <div className="space-x-8 mt-8 flex justify-around">
          <a href="/"className="text-zinc-50 hover:text-blue-500 duration-200">HOME</a>
          <a href="/services"className="text-zinc-50 hover:text-blue-500 duration-200">SERVICES</a>
          <a href="/jobSearch"className="text-zinc-50 hover:text-blue-500 duration-200">JOB SEARCH</a>
          <a href="/aboutUs"className="text-zinc-50 hover:text-blue-500 duration-200">ABOUT US</a>
          <a href="/contact"className="text-zinc-50 hover:text-blue-500 duration-200">CONTACT</a>
        </div>
      </div>
    </header>
  )
}

export default Header

import ServicePoint from "../Components/ServicePoint"

const Services = () => {
  return (
    <>
      <div className='min-h-screen bg-services bg-no-repeat bg-fixed bg-cover flex items-center'>
        <div>
          <p className='text-white text-center text-5xl font-body block mb-2 ml-32 bg-black p-3 bg-opacity-80'>Services</p>
          <p className='text-white text-center block text-xl font-body ml-32 bg-black p-2 bg-opacity-80'>Scroll Down</p>
        </div>
      </div>
      <div className=" mx-10">
        <p className="text-blue-500 text-4xl font-body pb-3 pt-6">
          Reliable. Resourceful. Responsive.
        </p>
        <p className=" text-white pb-3 text-2xl">
          We immerse ourselves in our clients’ businesses and our candidates’ careers to fully understand their priorities and goals. As a top staffing firm in Los Angeles, our reputation is built on consistently incorporating these priorities to make beneficial connections. We are more than just a staffing firm. We align talent with opportunity.  Career Advantage specializes in helping people find employment and helping businesses find staffing solutions. If your company doesn’t have the time or resources to fill positions, we can bring candidates to your door.
        </p>
      </div>
      <div className="flex mx-10 justify-around">
        <div>
          <p className="text-blue-500 text-4xl font-body pb-3 pt-6 text-center">
            TEMP/TEMP-TO-HIRE DIRECT HIRE
          </p>
          <p className=" text-white pb-3 text-2xl text-center">
            Whether your business is in need of coverage for the short term or long term, our qualified and experienced employees are carefully selected to hit the ground running so your business doesn’t miss a step.
          </p>
        </div>
        <div>
          <p className="text-blue-500 text-4xl font-body pb-3 pt-6 text-center">
            EXECUTIVE SEARCH
          </p>
          <p className=" text-white pb-3 text-2xl text-center mx-10">
            There are times when traditional recruiting methods simply can't satisfy a demanding position. Our staff will research the industry and develop a focused list of sources to contact and directly present the opportunity to qualified candidates that are not actively in the job market.
          </p>
        </div>
        <div>
          <p className="text-blue-500 text-4xl font-body pb-3 pt-6 text-center">
            WORKING VISA RECRUITMENT (H-1B)
          </p>
          <p className=" text-white pb-3 text-2xl text-center">
            When you just can't find what is required to satisfy that tough job to fill, we will recruit and refer Working Visa candidates that meet your needs. Many of the country’s major corporations take advantage of this government directed program to satisfy their toughest requirements. You can too!
          </p>
        </div>
      </div>
      <div className=" mx-10">
        <p className="text-blue-500 text-4xl font-body pb-3 pt-6 text-center">
          Working With Us
        </p>
        <p className=" text-white pb-3 text-2xl text-center">
          From the moment you call us, you will speak with an actual recruiter. No call centers, or menu trees, it’s that simple. Our partnership with you begins with us gaining a complete understanding of your requirements and priorities. We will use this knowledge to design a custom recruiting and service process that meets your specific needs.
        </p>
        <p className="text-blue-500 text-4xl font-body pb-3 pt-6 text-center">
          Guaranteed Compliance
        </p>
        <p className=" text-white pb-3 text-2xl text-center">
          Career Advantage adheres to all federal, state and local laws governing the employment of our personnel. We maintain all required employment records and handle the payment of wages, payroll and unemployment taxes, workers’ compensation insurance, and proper payroll deductions on behalf of our employees.
          We are an equal opportunity employer and fully abide by all EEO laws.
        </p>
        <p className="text-blue-500 text-4xl font-body pb-3 pt-6 text-center">
          Screening & Interviews
        </p>
        <p className=" text-white pb-3 text-2xl text-center">
          First, we scource our sources for matching candidates. Next, we vigorously vet those candidates by conducting thorough interviews, background checks (including drug screening, criminal checks, and reference calls).
        </p>
      </div>
    </>
  )
}

export default Services
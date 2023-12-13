import ServicePoint from "../Components/ServicePoint"

const Services = () => {
  return (
    <>
      <div className='min-h-screen bg-pasadena bg-no-repeat bg-fixed bg-cover flex items-center backdrop-invert' style={{ filter: 'hue-rotate(180deg)' }}>
        <div>
          <p className='text-white text-center text-5xl font-body block mb-2 ml-32 bg-black p-3 bg-opacity-80'>“The right people can drive your business, influence your culture and inspire those around them. This is why your hiring needs can't be left to chance.”</p>
        </div>
      </div>
      <div className="align-middle mt-10 m-10 ">
        <p className=" text-red-500 align-center mb-10 inline-block text-2xl">Reliable. Resourceful. Responsive.</p>
        <p className=" text-white text-center mb-10 inline-block text-2xl">
        We immerse ourselves in our clients’ businesses and our candidates’ careers to fully understand their priorities and goals. 
        As a top staffing firm in Los Angeles, our reputation is built on consistently incorporating these priorities to make beneficial 
        connections. We are more than just a staffing firm. We align talent with opportunity.  Career Advantage specializes in helping 
        people find employment and helping businesses find staffing solutions. If your company doesn’t have the time or resources 
        to fill positions, we can bring candidates to your door.
        </p>
      </div>
      <div className="container columns-3">
        <div>
          <ServicePoint
            title="TEMP/TEMP-TO-HIRE DIRECT HIRE"
            desc="Whether your business is in need of coverage for the short term or long term, our qualified and 
            experienced employees are carefully selected to hit the ground running so your business doesn't miss a step."
          />
          <ul className="text-white list-disc">
            <li> Accounting & Finance</li>
            <li> Administrative/Office</li>
            <li> Engineering & Technical</li>
            <li> Information Technology</li>
            <li> Medical/Health</li>
          </ul>
        </div>
        
        <ServicePoint
          title="EXECUTIVE SEARCH"
          desc="There are times when traditional recruiting methods simply can't satisfy a demanding position. 
          Our staff will research the industry and develop a focused list of sources to contact and directly 
          present the opportunity to qualified candidates that are not actively in the job market."
        />
        <ServicePoint
          title="WORKING VISA RECRUITMENT (H-1B)"
          desc="When you just can't find what is required to satisfy that tough job to fill, we will recruit 
          and refer Working Visa candidates that meet your needs. Many of the country's major corporations 
          take advantage of this government directed program to satisfy their toughest requirements. You can too!"
        />
        
      </div>
    </>
  )
}

export default Services
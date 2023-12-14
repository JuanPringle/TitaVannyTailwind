import JobListing from "../Components/JobListing";
import JobData from "../JobData.json";

function JobSearch(){
    
    return (  
        <div className="min-h-screen bg-pasadena bg-no-repeat bg-fixed bg-cover  backdrop-invert">
            <h1 className="text-white text-center text-5xl font-body block mb-2 ml-52 mr-52 bg-black p-3 bg-opacity-80 my-50 pt-72 text-white">JOB LISTINGS</h1>
            <div className='p-2 pt-14 relative columns-3 columns-lg  gap-x-5  '>
            <JobListing data={JobData} />
            </div>
        </div>
        
    );
}
export default JobSearch;
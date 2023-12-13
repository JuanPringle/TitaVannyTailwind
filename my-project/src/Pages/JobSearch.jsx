import JobListing from "../Components/JobListing";
import JobData from "../JobData.json";

function JobSearch(){
    
    return (  
        <div>
            <h1>Job Listings</h1>
            <div className='p-2 pt-52 grid grid-cols-3  gap-x-1 gap-y-5 min-h-screen block bg-pasadena bg-no-repeat bg-fixed bg-cover flex  backdrop-invert'>
            <JobListing data={JobData} />
            </div>
        </div>
        
    );
}
export default JobSearch;
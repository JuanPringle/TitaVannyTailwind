import Job from "../Components/Job";

function JobSearch(){
    return (  
        <>
        <div className='p-14 pt-52 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-1 gap-y-5 min-h-screen block bg-pasadena bg-no-repeat bg-fixed bg-cover flex items-center backdrop-invert'>
            
            
            <Job></Job>
            <Job></Job>
            <Job></Job>
            <Job></Job>
            <Job></Job>
            <Job></Job>
            <Job></Job>
            
        </div>
        </>
    );
}
export default JobSearch;
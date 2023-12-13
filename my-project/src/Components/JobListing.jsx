import Job from "./Job";
const JobListing = ({ data }) => {
    return(
        <>
        {data.map((job, index) => (
            <Job props={job} />
        ))}
        </>
    );
}
export default JobListing;
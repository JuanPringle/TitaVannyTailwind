const Job = ({props}) => {
    return (  
    <>
        <div className="w-full mx-2 break-inside-avoid-column">
            <div className="bg-slate-700 bg-opacity-90 p-10 rounded-lg shadow-md break-words">
                <h2 className="text-2xl font-bold mb-2 text-white">{props.title == null ? "Job Title" : props.title}</h2>
                <p className="text-white pb-3"><span className="text-white font-semibold">Location: </span>{props.location == null ? "TBD" : props.location}</p>
                <div
                class="rounded-t-lg border  ">
                <h2 class="mb-0" id="headingOne">
                <button
                    class="group relative flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white  [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    Description
                    <span
                    class=" rounded-xl ml-auto h-5 w-5 shrink-0 rotate-[-180deg]  transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
                    
                    </span>
                </button>
                </h2>
                <div
                id="collapseOne"
                class="!visible"
                data-te-collapse-item
                data-te-collapse-show
                aria-labelledby="headingOne"
                data-te-parent="#accordionExample">
                <div class="rounded-xl px-5 py-4 text-white">
                {props.description == null ? "TBD" : props.description}
                </div>
                </div>
            </div>
                <a href="/submitResume">
                    <button className="mt-5 bg-blue-700 text-white rounded p-2 font-bold">Apply Now </button>
                </a>
            </div>
        </div>
    </>
    );
}
export default Job;
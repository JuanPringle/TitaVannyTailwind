const ServicePoint = (props) => {
    return (  
        <>
            <div className="bg-slate-700 bg-opacity-90 p-16 rounded-lg shadow-md break-words">
                {props.title}
            </div>
            <p className="text-white">{props.desc}</p>
        </>
    );
}
export default ServicePoint;
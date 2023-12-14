const Contact = () => {
  return (
    <>
      <div className='min-h-screen bg-callUs bg-no-repeat bg-fixed bg-cover flex items-center'>
        <div>
          <p className='text-white text-center text-5xl font-body block mb-2 ml-32 bg-black p-3 bg-opacity-80'>CONTACT US</p>
          <p className='text-white text-center block text-xl font-body ml-32 bg-black p-2 bg-opacity-80'>Scroll Down</p>
        </div>
      </div>
      <div className="my-10 mx-10 columns-2">
        <div className="">
          <p className="text-blue-500 text-4xl font-body pb-3 pt-6 flex-grow">
            CAREER ADVANTAGE, INC.
          </p>
          <p className="text-white text-xl font-body pb-3 ">
            <div>
              <h4>3460 Wilshire Blvd.,</h4>
              <h4>Suite 1126</h4>
              <h4>Los Angeles, CA 90010</h4>
            </div>
                
          </p>
          <p className="text-blue-500 text-3xl font-body pb-3 pt-6">
            PHONE
          </p>
          <p className="text-white text-xl font-body pb-3 ">
            (213) 380-4410
          </p>
          <p className="text-blue-500 text-3xl font-body pb-3 pt-6">
            FAX
          </p>
          <p className="text-white text-xl font-body pb-3 ">
            (213) 380-4421
          </p>
          <p className="text-blue-500 text-3xl font-body pb-3 pt-6">
            EMAIL
          </p>
        </div>
        <div>
        <div className="border-2 border-double rounded border-slate-100 py-12 px-5 bg-slate-800 opacity-90">
      <label className="text-white block text-left">
        Name
      </label>
      <input type="text" name="file"  className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
      <label className="pt-5 text-white block text-left">
        Phone Number
      </label>
      <input type="text" name="file" className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
      <label className="pt-5 text-white block text-left">
        Email
      </label>
      <input type="text" name="file" className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
      <label className="pt-5 text-white block text-left">
        Message
      </label>
      <textarea type="text" name="file" className="pr-20 text-black hover:bg-slate-300 text-left rounded" id="" cols="22" rows="4"></textarea>
      <button className="border-black mt-5 bg-slate-100 hover:bg-slate-400 text-slate-700 hover:text-black rounded p-1 px-2 font-bold">Submit </button>
        
    </div>
        </div>        
        

        
      </div>
      <div>
        <p className="text-blue-500 text-3xl font-body pb-3 pt-6 text-center">
            GET DIRECTION
        </p>
      </div>
    </>
  )
}

export default Contact;
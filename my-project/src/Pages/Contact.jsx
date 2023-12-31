const Contact = () => {
  return (
    <>
      <div className='min-h-screen bg-callUs bg-no-repeat bg-fixed bg-cover flex items-center'>
        <div>
          <p className='text-white text-center text-5xl font-body block mb-2 ml-32 bg-black p-3 bg-opacity-80'>CONTACT US</p>
          <p className='text-white text-center block text-xl font-body ml-32 bg-black p-2 bg-opacity-80'>Scroll Down</p>
        </div>
      </div>
      <div className="my-10 mx-10 sm:mx-10 md:mx-32 lg:mx-52 sm:columns-1 md:columns-1 lg:columns-2">
        <div>
          <p className="text-blue-500 text-4xl font-body pb-3 pt-6 ">
            CAREER ADVANTAGE, INC.
          </p>
          <p className="text-white text-2xl font-body pb-3 ">
            <div>
              <h4>680 E. Colorado Blvd.,</h4>
              <h4>Suite 180</h4>
              <h4>Pasadena, CA 91101</h4>
            </div> 
                
          </p>
          <p className="text-blue-500 text-3xl font-body pt-5">
            PHONE
          </p>
          <p className="text-white text-2xl font-body pb-3 ">
            (213) 380-4410
          </p>
          <p className="text-blue-500 text-3xl font-body  pt-5">
            FAX
          </p>
          <p className="text-white text-2xl font-body pb-3 ">
            (213) 380-4421
          </p>
          <p className="text-blue-500 text-3xl font-body  pt-5">
            EMAIL
          </p>
          <p className="text-white text-2xl font-body pb-3 ">
            hr@caistaffing.com
          </p>
          <p className="text-blue-500 text-3xl font-body  pt-5">
            PAYMENTS
          </p>
          
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input className="pb-6" type="image" width="200" src="https://www.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif"/>
          </form>
        </div>
        <div>
          <div className="border-2 border-double rounded border-slate-100 py-6 px-5 bg-slate-800 opacity-90">
            <p className="text-white text-4xl font-body pb-1">
              SEND US A MESSAGE!
            </p>
            <p className="text-white text-lg font-bold pb-3">
              All fields required unless noted
            </p>
              
            <label className="pb-1 text-white block text-left">
              Name
            </label>
            <input type="text" name="NAME"  id="edit_15" className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
            <label className="pt-5 pb-1 text-white block text-left">
              Phone Number (optional)
            </label>
            <input  type="text" name="Phone" id="edit_14" className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
            <label className="pt-5 pb-1 text-white block text-left">
              Email
            </label>
            <input type="text" name="EMAIL" id="edit_2" className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
            <label className="pt-5 pb-1 text-white block text-left">
              Message
            </label>
            <textarea type="text" name="COMMENT" id="text_1" className="pr-20 text-black hover:bg-slate-300 text-left rounded"  cols="22" rows="4"></textarea>
            <button className="block text-left border-black mt-5 bg-slate-100 hover:bg-slate-400 text-slate-700 hover:text-black rounded my-9 p-1 px-2 font-bold">Submit </button>
            
          </div>
        </div>     
        
        
        
        
      </div>
      <div>
        <p className="text-blue-500 text-3xl font-body pb-3 pt-6 text-center">
            GET DIRECTION
        </p>
        {null &&
          <div className="google-maps">
          <iframe
            src=""
            width="600"
            height="  450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          </div>   
        }
      </div>
    </>
  )
}

export default Contact;
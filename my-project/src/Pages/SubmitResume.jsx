
function SubmitResume() {
  return (
    <>
  <div className="flex align-middle min-h-screen items-center justify-center bg-submitResume">
  <div className=" border-slate-100 py-32 px-5 ">
      
      
    </div>
    <div className="mt-20 border-2 border-double rounded border-slate-100 py-12 px-5 bg-slate-800 opacity-90">
      <label className="text-white block text-left">
        Name
      </label>
      <input type="text" name="NAME" id="edit_1" className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
      <label className="pt-5 text-white block text-left">
        Phone Number
      </label>
      <input type="text" name="Phone" id="edit_2" className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
      <label className="pt-5 text-white block text-left">
        Email
      </label>
      <input type="text" name="Email" id="edit_3" className="pr-20 text-black hover:bg-slate-300 text-left rounded" />
      <label className="pt-5 text-white block text-left">
        Comments
      </label>
      <textarea type="text" name="Comments" id="text_2" className="pr-20 text-black hover:bg-slate-300 text-left rounded"  cols="22" rows="4"></textarea>
      <label className="pt-5 text-white block text-left">
        Drop Resume here
      </label>
      <input type="file" name="UPLOAD" id="file_1" className="text-white text-center rounded" />
      <button className="block text-left border-black mt-5 bg-slate-100 hover:bg-slate-400 text-slate-700 hover:text-black rounded my-2 p-1 px-4 font-bold">Submit </button>
    </div>
  </div>
</>
  )
}

export default SubmitResume

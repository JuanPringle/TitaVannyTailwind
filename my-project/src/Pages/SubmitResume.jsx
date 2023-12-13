
function SubmitResume() {
  return (
    <>
  <div className="flex align-middle min-h-screen items-center justify-center bg-submitResume">
  <div className=" border-slate-100 py-32 px-5 ">
      
      
    </div>
    <div className="border-2 border-double rounded border-slate-100 py-12 px-5 bg-slate-800 opacity-90">
    <label className="text-white block text-center">
        Name
      </label>
      <input type="text" name="file"  className="pr-20 text-black hover:bg-slate-300 text-center rounded" />
      <label className="pt-5 text-white block text-center">
        Phone
      </label>
      <input type="text" name="file" className="pr-20 text-black hover:bg-slate-300 text-center rounded" />
      <label className="pt-5 text-white block text-center">
        Email
      </label>
      <input type="text" name="file" className="pr-20 text-black hover:bg-slate-300 text-center rounded" />
      <label className="pt-5 text-white block text-center">
        Comments
      </label>
      <textarea name="body" id="" cols="30" rows="4"></textarea>
      <label className="pt-5 text-white block text-center">
        Drop Resume here
      </label>
      <input type="file" name="file" className="text-white text-center rounded" />
    </div>
  </div>
</>
  )
}

export default SubmitResume

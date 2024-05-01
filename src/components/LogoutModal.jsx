import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";


const LogoutModal = forwardRef(function LogoutModal({ hideModal }, ref) {

 const backtoLogin =  useNavigate()

 const redirecttoLogin  = ()=>{
  backtoLogin('/')
 }

  return (
    <dialog ref={ref} className="mx-auto my-5 p-4 rounded">
      <div className="d-flex flex-column  mt-2">
        Do you Want to log Out
        <div className="px-4 d-flex justify-content-between">
          <button className="px-3 py-1 rounded" onClick={redirecttoLogin}>Yes</button>
          <button className="px-3 py-1 rounded" onClick={hideModal}>No</button>
        </div>
      </div>
    </dialog>
  );
});

export default LogoutModal;

import React,{useState} from "react";
import "../style.css";

function FeedBack(props){
    const [data,setData]=useState([]);
    const [show,setShow]=useState(true);

    const handleData=(e)=>{
        e.preventDefault();
        const values={
            name:e.target.name.value,
            dept:e.target.dept.value,
            rating:e.target.rate.value,
        };
        setData([...data,values]);
        e.target.reset();
        setShow(false);
    }

    const back=()=>{
        setShow(true);
    }

    return (
        <div>
            <h1>Employee FeedBack Form</h1>
            {show ? (
            <form onSubmit={handleData}>
                <label className="txt">Name : </label>
                <input type="text" name="name" placeholder="Enter ename" className="name" required/>
                <br/>
                <label className="txt">Department : </label>
                <input type="text" name="dept" placeholder="Dept..." className="dept" />
                <br/>
                <label className="txt">Rating:</label>
                <input type="number"  name="rate" placeholder="please rate us.." className="rate" /><br/>
                <button className="submitbtn">Submit</button>
            </form>
            )
            : (
            <div>
                <div className="box">
                    {data.map((x,i)=>(
                        <h4 className="details" key={i}>Name : {x.name} | Dept : {x.dept} | Rating : {x.rating}</h4>
                    ))}
                </div>
                <button className="backBtn" onClick={back}>Go Back</button>
            </div>
            )}
        </div>
    )
}

export default FeedBack;


// <div>
//             <h1>Employee FeedBack Form</h1>
//             {!show && (
//             <form onSubmit={handleData}>
//                 <label className="txt">Name : </label>
//                 <input type="text" name="name" placeholder="Enter ename" className="name" required/>
//                 <br/>
//                 <label className="txt">Department : </label>
//                 <input type="text" name="dept" placeholder="Dept..." className="dept" />
//                 <br/>
//                 <label className="txt">Rating:</label>
//                 <input type="number"  name="rate" placeholder="please rate us.." className="rate" /><br/>
//                 <button className="submitbtn">Submit</button>
//             </form>
//             )}
//             {show &&(
//             <div>
//                 <div className="box">
//                     {data.map((x,i)=>(
//                         <h4 className="details" key={i}>Name : {x.name} | Dept : {x.dept} | Rating : {x.rating}</h4>
//                     ))}
//                 </div>
//                 <button className="backBtn" onClick={back}>Go Back</button>
//             </div>
//             )}
//         </div>
//     )
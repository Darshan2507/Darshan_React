import { useEffect, useState } from "react"

export default function Add() {
    
    const [data,setData] = useState({});    
    const [isDisabled,setIsDisabled]=useState(false);
    const [msg, setMsg] = useState(false);
    function send(e){
            e.preventDefault();

            setIsDisabled(true);
            fetch('http://localhost:2000/user/add',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
                
            }).then((res)=>{
                res.json();
            }).then((res)=>{
                setIsDisabled(false)
                setMsg(true);
                console.log(res);
            }).catch((err)=>{
                console.log(err);
                
            })
    }
    
    return (
        <>
            <div className="row justify-content-center my-5">
                <div className="col-md-6 col-lg-4 col-sm-8 col-11 bg-dark text-white p-5 rounded">

                    <h1 className="mb-5">Add Entry</h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" aria-describedby="emailHelp" onChange={(e)=>{
                            setData({
                                ...data,"name":e.target.value
                            });
                            console.log(data);
                            
                        }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Date</label>
                        <input type="date" class="form-control" onChange={
                            (e)=>{
                                setData({
                                    ...data,"date":e.target.value
                                });
                                console.log(data);
                                
                            }
                        }/>
                    </div>
                    <div class="mb-3 ">
                        <label class="form-label" for="exampleCheck1">Expense</label>
                        <input type="text" class="form-control" onChange={
                            (e)=>{
                                setData({
                                    ...data,"expense":e.target.value
                                });
                                console.log(data);
                                
                            }
                        }/>
                    </div>
                    <div class="mb-3 ">
                        <label class="form-label" for="exampleCheck1">Earning</label>
                        <input type="text" class="form-control" onChange={
                            (e)=>{
                                setData({
                                    ...data,"earning":e.target.value
                                });
                                console.log(data);
                                
                            }
                        }/>
                    </div>
                    <button onClick={send} class="btn btn-light" disabled={isDisabled}>Add</button>
                    <br />
                    {msg?<label className="m-2 text-success "> Added Successful ! </label>:<></>}
                </form>
                </div>
            </div>
        </>
    )
}
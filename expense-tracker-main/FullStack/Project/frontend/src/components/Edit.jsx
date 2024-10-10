import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    const {id} = useParams();
    console.log(id);
    
    const [data,setData] = useState({});
     const [users,setUsers] = useState([]);   
    useEffect(() => {
        const api = 'http://localhost:2000/user/show'
        fetch(api).then((res) => res.json()
        ).then((res) => {
            setUsers(res.entries);
            console.log(res.entries);

        }).catch((err) => {
            console.log(err);

        })
    }, [id,])
    useEffect(()=>{
        users.map((u)=>{
            if(u.id==id){
                setData(u);
            }
        })
    },[users])
    
    const navigate = useNavigate()
    

    function send(e){
            e.preventDefault();
            fetch('http://localhost:2000/user/edit/'+id,{
                method:'PATCH',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
                
            }).then((res)=>{
                res.json();
            }).then((res)=>{
                console.log(res);
                navigate('/overview')
                
            }).catch((err)=>{
                console.log(err);
                
            })
    }
    
    return (
        <>
            <div className="row justify-content-center my-5">
                <div className="col-md-6 col-lg-4 col-sm-8 col-11 bg-dark text-white p-5 rounded">
                <h1 className="mb-5">Edit</h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" aria-describedby="emailHelp" value={data.name}  onChange={(e)=>{
                            setData({
                                ...data,"name":e.target.value
                            });
                            console.log(data);
                            
                        }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Date</label>
                        <input type="date" class="form-control"  defaultValue={data.date?data.date.toString().substring(0,10):''}  onChange={
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
                        <input type="text" class="form-control" value={data.expense} onChange={
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
                        <input type="text" class="form-control" value={data.earning} onChange={
                            (e)=>{
                                setData({
                                    ...data,"earning":e.target.value
                                });
                                console.log(data);
                                
                            }
                        }/>
                    </div>
                    <button onClick={send} class="btn btn-light">save</button>
                </form>
                </div>
            </div>
            
        </>
    )
}
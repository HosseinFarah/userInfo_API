import  Axios  from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router"

export const Mytest = ()=>{
    const navigate = useNavigate()
    const {id} = useParams()
    const [test,setTest]=useState([])
    const {data} = useQuery(["n"],()=>{
        return Axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>setTest(res.data))
    })
    return(
        <div>
        {test.map((res,index)=>{
            if(res.id === parseInt(id)) return         (
          <div className="card">
          <div classname="card-body">
            <h5 className="card-title"> Title :{res.title}</h5>
              <h6 className="card-text">Tetx: {res.body}</h6>
          </div>
          </div>
        )
        else return false
      })}
      <button onClick={()=>navigate("/test")}>Back</button>
        </div>
    )
}
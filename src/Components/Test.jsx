import Axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export const Test = () => {
  const [page, setPage] = useState(1);
  const [user, setUser] = useState([]);
  const { refetch } = useQuery(["1"], async () => {
    const res = await Axios.get(`https://randomuser.me/api?page=${page}`);
    return setUser(res.data.results);
  });
  const nextUser = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    refetch();
  }, [page]);
  return (
    <>
      <div className="alert alert-dark" role="alert">
       useQuery and Axios, Change User with useState, refetch Api in useEffect
       <h6><Link to={"https://randomuser.me/api?page="} target="_blank">Api Address</Link></h6>
      </div>
      <div className="card">
        {user.map((data,index) => {
          return (
            <div className="card-body" key={`d_1${index}`}>
              <img
                className="card-img-top"
                style={{ height: 150, width: 150 }}
                src={data.picture.large}
                alt="img"
              />
              <h6 className="card-title">
                Fullname: {data.name.title} {data.name.first} {data.name.last}
              </h6>
              <h6 className="card-text">
                Location Detail's: {data.location.country} {data.location.city}:
                {data.location.state}
              </h6>
              <h5 className="card-text">
                Contact Detail's:{data.email} : {data.phone}
              </h5>
            </div>
          );
        })}
      </div>
      <button onClick={nextUser} className="btn btn-outline-warning">Next</button>
      <h5>User Num:{page}</h5>
    </>
  );
};

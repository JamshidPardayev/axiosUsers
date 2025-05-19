import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users`)
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  }, []);

  return <div>
    <h1>hero</h1>
    {
        data?.users?.map((user) => (
            <div key={user.id} className="max-w-[350px] text-center" >
                <img src="./men.jpg" alt={user.firstName} className="w-[250x] h-[250x]"/>
                <p><span>Full Name:</span>{user.firstName} {user.lastName} {user.maidenName}</p>
                <p><span>BirthDate:</span>{user.birthDate} {user.age} years</p>
                <p><span>Email:</span>{user.email}</p>
                <p><span>hone Number:</span>{user.phone}</p>
                <p><span>Address"</span>{user.address.address} {user.address.city} {user.address.state}, {user.address.country}</p>
                <p><span>Universuty"</span>{user.university}</p>
                <p><span>Gender:</span>{user.gender}</p>
            </div>
        ))
    }
  </div>;
};

export default React.memo(Users);

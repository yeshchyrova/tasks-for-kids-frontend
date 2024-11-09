import React, { useEffect, useState } from "react";
import { request } from "../redux/auth/auth-operations";
// todo: use NavLink for navigation (with navlink you can add special styles if current url is same as value of prop 'to')
// todo: use useParams() to access to the parent/child id(dynamic parametr)
// use useSearchParams() to access query parameters (like ?color='red'&type='house' etc.) https://www.edu.goit.global/uk/learn/8016001/31183/31256/training?blockId=20180006

export const HomePage = () => {
  // request
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   request("GET", "/parents", {}).then((response) => {
  //     setData(response.data);
  //     console.log(response);
  //   });
  // }, []);
  return (
    <main>
      <p>Dashboard</p>
      {/* {data.length !== 0 && (
        <ul>
          {data.map((child) => (
            <li key={child.id}>
              <p>{child.name}</p>
            </li>
          ))}
        </ul>
      )} */}
    </main>
  );
};


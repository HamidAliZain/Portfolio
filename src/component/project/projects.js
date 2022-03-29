import * as React from "react";
import { Navbar } from "../navbar/navbar";
import "./projects.css";

let project = [
  {
    id: 1,
    name: "Clock App ",
    url: "https://timer-web-appli.netlify.app",
    des: "A timer web app ",

  },
  {
    id: 2,
    name: "List App",
    url: "https://list-setup-com.netlify.app",
    des: "Make a list with  list app" ,

  },
  {
    id: 3,
    name: "Contact App",
    url: "https://loving-shaw-765607.netlify.app",
    des: "Save your contacts  " ,

  },
  {
    id: 4,
    name: "Covid 19 Tracker",
    url: "https://romantic-kirch-c9947e.netlify.app",
    des: "Watch how many people are effected with Corona   " ,

  },
 
];
export const Projects = () => {
  return (
    <>
      <h1 className="projectHeading">Some of my projects </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col ">#</th>
            <th scope="col ">Name</th>
            <th scope="col">About</th>
            <th scope="col">View Project </th>
          </tr>
        </thead>
        <tbody>
          {project.map((item) => {
            return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td className="text-dark h " >{item.name}</td>
                  <td className="text-dark h6">{item.des}</td>
                  
                  <td>
                    <button  className=" button">
                      <a href={item.url} className="link1">
                        
                        Visit
                      </a>
                    </button>
                  </td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

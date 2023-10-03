import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Feeds() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const addreport = async () => {
      const response = await fetch("http://localhost:8080/feed/get/");

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);
      setPosts(data);
      setIsLoading(false);
    };

    addreport();
  }, []);

  return (
    <>
      <Link to={"/input"}>
        <button>Add Input</button>
      </Link>

      {isLoading && <h1>Loading</h1>}

      {!isLoading &&
        posts.map((title) => {
          return (
            <div key={title._id}>
              <h3>{title.title}</h3>
              <div>
                <Link to={`view/${title._id}`}>View</Link>
                <Link to={`edit/${title._id}`}>Edit</Link>
                <Link to={`delete/${title._id}`}>Delete</Link>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Feeds;

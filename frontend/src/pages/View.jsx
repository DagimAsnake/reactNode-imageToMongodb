import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const addreport = async () => {
      const response = await fetch(`http://localhost:8080/feed/get/${id}`);

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);
      setPost(data);
      setIsLoading(false);
    };

    addreport();
  }, [id]);
  return (
    <>
      {isLoading && <h1>Loading</h1>}

      {!isLoading && (
        <div>
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
        </div>
      )}
    </>
  );
}

export default View;

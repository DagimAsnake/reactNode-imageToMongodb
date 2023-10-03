import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeleteFeed() {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const addreport = async () => {
      const response = await fetch(`http://localhost:8080/feed/post/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);

      if (data.message === "Deleted post.") {
        navigate("/");
      }
    };

    addreport();
  }, [id, navigate]);

  return (
    <>
      <div>Deleteing.......</div>
    </>
  );
}

export default DeleteFeed;

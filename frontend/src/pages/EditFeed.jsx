import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditFeed() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const addreport = async () => {
      const response = await fetch(`http://localhost:8080/feed/post/${id}`);

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);
      setTitle(data.post.title);
      setImage(data.post.imageUrl);
      setIsLoading(false);
    };

    addreport();
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    const addreport = async () => {
      const response = await fetch(`http://localhost:8080/feed/post/${id}`, {
        method: "PUT",
        body: formData,
      });
      console.log(response);
      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);

      if (data.message === "Post updated!") {
        navigate("/");
      }
    };

    addreport();
  };

  return (
    <>
      {isLoading && <h1>Loading</h1>}

      {!isLoading && (
        <form onSubmit={submitHandler}>
          <div>
            <h4>Title</h4>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <h4>Image</h4>
            <input
              type="file"
              name="image"
              //   value={image}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      )}
    </>
  );
}

export default EditFeed;

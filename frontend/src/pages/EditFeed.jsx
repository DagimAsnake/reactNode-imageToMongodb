import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FileBase64 from 'react-file-base64';

function EditFeed() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const addreport = async () => {
      const response = await fetch(`http://localhost:8080/feed/get/${id}`);

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);
      setTitle(data.title);
      setImage(data.image);
      setIsLoading(false);
    };

    addreport();
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      title: title,
      image: image
    }

    const addreport = async () => {
      const response = await fetch(`http://localhost:8080/feed/post/${id}`, {
        method: "PUT",  headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
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
            <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setImage(base64)}
          />
          </div>
          <div>
          <img src={image} alt="" />
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from 'react-file-base64';

function InputFeeds() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      title: title,
      image: image
    }

    const addreport = async () => {
      const response = await fetch("http://localhost:8080/feed/post/", {
        method: "POST",
        headers: {
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

      if (data.message === "Post created successfully!") {
        navigate("/");
      }
    };

    addreport();
  };

  return (
    <>
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
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default InputFeeds;

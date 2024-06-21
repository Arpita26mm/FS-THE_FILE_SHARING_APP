import { useState, useEffect, useRef } from "react";
import { uploadFile } from "./service/api";
import backgroundImage from "./bg_img1.png";
import "./App.css";

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData(); //browser p formData bnaya........ data object bnaya
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data); //uploadFile(data): data ko FE se BE bejega...it is await here when called...to jaha define hora hoga vha async hoga
        setOutput(response.path);
        console.log("response", response);
      }
    };
    getImage();
  }, [file]); //I want app rerender when file change

  console.log(file);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div
        className="main-wrapper"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="container">
          <div className="wrapper">
            <h1>The FS File Sharing App!</h1>
            <p>upload and Share the download link</p>
            <button onClick={() => onUploadClick()}>Upload</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <a href={output}>{output}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

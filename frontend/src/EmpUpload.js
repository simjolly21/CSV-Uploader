import axios from "axios";
import React, { useState } from "react";

const EmpUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [csvData, setCsvData] = useState([]);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("data-file", selectedFile, selectedFile.name);

    console.log(selectedFile);

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

    axios
      .post("http://127.0.0.1:8000/create/", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // Now read the CSV file
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const parsedData = parseCSV(text);
      setCsvData(parsedData);
    };
    reader.readAsText(selectedFile);
  };

  const parseCSV = (data) => {
    const rows = data.split("\n");
    const result = rows.map((row) => row.split(",")); // Adjust the delimiter if needed
    return result;
  };

  const fileData = () => {
    if (!selectedFile) {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
    return null; // Otherwise return nothing
  };

  const displayTable = () => {
    if (csvData.length === 0) {
      return null;
    }

    return (
      <table className="table table-bordered" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            {csvData[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      {/* Updated button with Bootstrap classes */}
      <button
        className="btn btn-primary"
        onClick={onFileUpload}
        disabled={!selectedFile} // Disable if no file is selected
      >
        Upload!
      </button>
      {fileData()}
      {displayTable()} {/* Call the displayTable function here */}
    </div>
  );
};

export default EmpUpload;

import React, { useState } from 'react';
import axios from 'axios';
import './ImageUploader.scss';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await axios.post('/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      setError('Error processing image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-uploader-container">
      <div className="content">
        <h2>Upload Image</h2>
        <div className="input-container">
          <input type="file" onChange={handleFileChange} />
        </div>
        <button onClick={handleSubmit} disabled={!selectedFile || loading}>
          Submit
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {prediction && (
          <div>
            <h3>Prediction:</h3>
            <p>{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;

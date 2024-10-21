// WebcamScanner.js
import React, { useState, useEffect, useRef } from 'react';
import {useNavigate } from 'react-router-dom';


const WebcamScanner = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = {
      video: {
        facingMode: 'environment',
      },
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error accessing the camera: ", err);
      });

    let timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          navigate('/SignUp3');
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (video && context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1>ID Card Scanning</h1>
      <canvas ref={canvasRef} width="300" height="200" style={styles.canvas}></canvas>
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
      </div>
      <video ref={videoRef} style={styles.hiddenVideo}></video>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  canvas: {
    marginBottom: '20px',
  },
  progressBarContainer: {
    width: '300px',
    height: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#76c7c0',
    transition: 'width 0.1s',
  },
  hiddenVideo: {
    display: 'none',
  },
};
export default WebcamScanner;
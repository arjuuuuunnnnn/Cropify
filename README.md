# Cropify
Cropify is a web application built with React that aims to assist farmers in optimizing their crop yield and diagnosing plant diseases. By leveraging machine learning models such as Convolutional Neural Networks (CNN), Light Gradient Boosting Machine (Light GBM), and Decision Trees, Cropify offers predictive insights to farmers based on input data, including images of plant leaves

### Features:
- Crop Yield Estimation
- Fertilizer recommendation
- Suitable Crop Recommendation
- Leaf disease Detection

# Project Organization
------------

    ├── README.md        
          
    ├── data
    │   ├── processed      
    │   └── raw            
    │
    ├── models   
    │   ├── crop_yield_model      
    │   ├── crop_est_model
    |   ├── fertilizer_rec_model
    |   └── leaf_disease_detect_model
    │
    ├── research          
    │
    ├── ML           
    │   ├── crop_yield        
    │   ├── crop_est
    |   ├── fertilizer_rec
    |   └── leaf_disease_detect
    |
    ├── requirements.txt   
    │
    ├── src                
    │   ├── Components                
    │   │
    │   ├── App.js           
    │   │    
    │   └── Index.js       
    │
    ├── server.py
    |
    ├── json_files
    |
    └── data2.csv

# Readme

## Intro

Deep learning is a subset of machine learning that involves neural networks with many layers (hence "deep"). These networks are capable of learning complex patterns in large amounts of data, making them highly effective for tasks like image and speech recognition, natural language processing, and more. The key advantage of deep learning over traditional machine learning is its ability to automatically feature extract from raw data, which reduces the need for manual feature engineering.
Find more:
https://www.deeplearningbook.org/
## Classification 
LINK of introduction videos
% here is an introduction of how to classify with deep learning
% examples with models and evaluation standard
% MLP, CNN, or ViT
Classification in deep learning involves training a model to categorize inputs into predefined classes. This is widely used in tasks such as image classification, text classification, and spam detection. 
### Models for Classification
- **Multi-Layer Perceptron (MLP)**: A basic type of neural network with fully connected layers.
- **Convolutional Neural Network (CNN)**: Designed to process data with grid-like topology (e.g., images). CNNs use convolutional layers to automatically extract features from the input data.
- **Vision Transformer (ViT)**: A recent innovation using transformer architecture, initially designed for NLP tasks, but now effectively applied to image classification.


## Regression
LINK of introduction videos
%here is an introduction of how to regress with deep learning
%examples with models and evaluation standard
Regression in deep learning involves training a model to predict a continuous output. Common applications include predicting stock prices, estimating home values, and forecasting weather.
### Models for Regression
- **Multi-Layer Perceptron (MLP)**: Can be used for regression tasks by adjusting the loss function and output layer.
- **Recurrent Neural Network (RNN)**: Suitable for time-series forecasting where temporal dependencies are critical.
- **Convolutional Neural Network (CNN)**: Can also be adapted for regression, particularly for tasks involving spatial data (e.g., predicting house prices from images).

## Example
LINK to a jupyter notebook here

## appendix 
% How to prepare you data for deep learning
### How to Prepare Your Data for Deep Learning
Data Collection: Gather a sufficient amount of data relevant to your problem.
Data Cleaning: Remove duplicates, handle missing values, and correct inconsistencies.
Data Preprocessing: Normalize or standardize numerical features, encode categorical variables, and split your data into training, validation, and test sets.
Data Augmentation: For image data, apply transformations like rotation, flipping, and scaling to artificially increase the size of your dataset.
% How to prepare you training environment
### How to Prepare Your Training Environment
Hardware: Use GPUs or TPUs for faster training, especially for large models.
Software: Install deep learning frameworks such as TensorFlow or PyTorch.
Dependencies: Ensure you have all necessary libraries installed (e.g., NumPy, pandas, scikit-learn).
Environment Management: Use virtual environments or Docker containers to manage dependencies and ensure reproducibility.

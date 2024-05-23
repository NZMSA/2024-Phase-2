# Part 3 - Deep Learning

> "Deep learning is a powerful tool for understanding the world and solving problems. It has the potential to transform many industries and improve people's lives." --**Andrew Ng**

Deep Learning, a subset of machine learning, has revolutionized the way we approach complex problems in various fields such as image recognition, natural language processing, and autonomous driving. As computing power has exponentially increased, so has the potential for neural networks—computational models inspired by the human brain—to solve tasks that were once considered beyond the reach of machines.

## The Essence of Deep Learning

Deep learning refers to the use of neural networks with multiple layers (hence "deep") that are capable of learning high-level features from data in an incremental manner. This approach is fundamentally different from traditional machine learning, which often relies on hand-crafted features and linear models. Deep learning automates the extraction of intricate patterns in data, transforming raw inputs into a hierarchy of increasingly refined and abstract representations.

### Key Concepts and Components

- Neural Networks:At the core of deep learning are neural networks, structured in layers consisting of interconnected nodes or "neurons", each of which performs a simple computation. Data passes through these networks, undergoing transformations through weights and biases, refined by training.
- Activation Functions: These are crucial for introducing non-linear dynamics into the network, enabling it to learn complex patterns. Common examples include ReLU, Sigmoid, and Tanh functions.
- Backpropagation: This is the backbone of neural network training, a method for adjusting the weights of the network by calculating the gradient of the loss function (a measure of prediction error) with respect to each weight. It effectively guides the network on how to change its weights to reduce error.
- Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs): CNNs are particularly good at parsing visual data, while RNNs are designed to handle sequential data like text or speech. Both architectures tweak the basic neural network structure to better suit their respective tasks.

To find more about those key concepts and components, these videos may help you:
[3blue1brown: Neural Networks](https://www.3blue1brown.com/topics/neural-networks)

## Training and Evaluation
Training a deep learning model involves feeding it large amounts of data and allowing it to adjust its weights through backpropagation. This process requires significant computational resources, especially as models and datasets grow in size.

- Data Splitting: Similar to traditional ML, data is split into training, validation, and test sets. The model learns from the training data, its performance is tuned using the validation data, and it is evaluated on the unseen test data to gauge its real-world performance.

- Overfitting and Regularization: Overfitting is a common issue where a model learns the training data too well, including the noise and errors, at the expense of its ability to generalize. Techniques like dropout, early stopping, and L2 regularization are used to prevent this.

- Optimization Algorithms: These algorithms, such as Adam and SGD, help minimize the loss function during training. They play a critical role in how quickly and effectively a model can be trained.

## Classification 

% here is an introduction of how to classify with deep learning
% examples with models and evaluation standard
% MLP, CNN, or ViT
Classification in deep learning involves training a model to categorize inputs into predefined classes. This is widely used in tasks such as image classification, text classification, and spam detection. 
### Models for Classification
- **Multi-Layer Perceptron (MLP)**: A basic type of neural network with fully connected layers.
- **Convolutional Neural Network (CNN)**: Designed to process data with grid-like topology (e.g., images). CNNs use convolutional layers to automatically extract features from the input data.
- **Vision Transformer (ViT)**: A recent innovation using transformer architecture, initially designed for NLP tasks, but now effectively applied to image classification.


## Example


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

### Online Resources
https://www.deeplearningbook.org/
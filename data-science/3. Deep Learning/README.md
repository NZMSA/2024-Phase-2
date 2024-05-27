# Part 3 - Deep Learning

> "Deep learning is a powerful tool for understanding the world and solving problems. It has the potential to transform many industries and improve people's lives." --**Andrew Ng**

Deep Learning (DL), as a subset of Machine Learning (ML), focuses on teaching a machine to think in a way that mimics the human brain's neural networks. While the principles of neural networks have been around for decades, advancements in computational power and data availability have recently propelled DL to the forefront of AI research and applications. This surge in popularity is due to the reduced barriers to entry, with everyday computers now equipped to handle the complex calculations required for deep learning models. This is beneficial as it democratizes access to powerful algorithms that can solve intricate real-world problems. However, it also poses risks, as more individuals might use these tools without fully understanding their mechanics, potentially leading to incorrect conclusions and applications.

It's crucial not only to know how to use deep learning models but also to understand why specific methods are applied. Consider the analogy of a doctor diagnosing a patient. If the doctor prescribes treatments without understanding the underlying conditions or the workings of the medications, the consequences could be detrimental. Similarly, a data scientist must grasp the intricacies of deep learning models to ensure accurate results and avoid negative impacts on their projects, employers, and end-users. The importance of using the right tools and techniques cannot be overstated.

Deep learning, with its ability to model complex patterns and relationships, holds immense potential across various fields, from healthcare to finance to autonomous systems. However, this power comes with the responsibility to understand and apply these models correctly. By mastering both the how and the why of deep learning, data scientists and engineers can unlock new possibilities while mitigating risks, ultimately driving innovation and progress responsibly.

Like machine learning(ML), deep learning also can handle many categories of problems(even more than ML), but in the phase 2 of MSA, we are only going to focus on image classification as an introduction of the world of deep learning. 

To learn more about the field of deep learning, we recommend that you visit websites such as [Hugging Face](https://huggingface.co/) and [Papers With Code](https://paperswithcode.com/). On these sites, you can read the latest papers, get state-of-the-art (SOTA) models, access additional training datasets, and interact and share with others. You can also follow relevant bloggers on social networks to stay updated with the latest developments. Additionally, you can follow AI and deep learning influencers on social media platforms like Twitter to keep up with the latest news and trends.

## The Essence of Deep Learning

Deep learning refers to the use of neural networks with multiple layers (hence "deep") that are capable of learning high-level features from data in an incremental manner. This approach is fundamentally different from traditional machine learning, which often relies on hand-crafted features and linear models. Deep learning automates the extraction of intricate patterns in data, transforming raw inputs into a hierarchy of increasingly refined and abstract representations.

### Key Concepts and Components

- Neural Networks:At the core of deep learning are neural networks, structured in layers consisting of interconnected nodes or "neurons", each of which performs a simple computation. Data passes through these networks, undergoing transformations through weights and biases, refined by training.
- Activation Functions: These are crucial for introducing non-linear dynamics into the network, enabling it to learn complex patterns. Common examples include ReLU(hidden layers), Sigmoid(binary classification), Softmax(multiclass classification) and Tanh(Exploding Gradients) functions.
- Backpropagation: This is the backbone of neural network training, a method for adjusting the weights of the network by calculating the gradient of the loss function (a measure of prediction error) with respect to each weight. It effectively guides the network on how to change its weights to reduce error.
- Optimization Algorithms: These algorithms, such as Adam and SGD, help minimize the loss function during training. They play a critical role in how quickly and effectively a model can be trained.
- Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs): CNNs are particularly good at parsing visual data, while RNNs are designed to handle sequential data like text or speech. Both architectures tweak the basic neural network structure to better suit their respective tasks.
- Overfitting and Regularization: Overfitting is a common issue where a model learns the training data too well, including the noise and errors, at the expense of its ability to generalize. Techniques like dropout, early stopping, and L2 regularization are used to prevent this.

To find more about those key concepts and components, these videos may help you:  
[3blue1brown: Neural Networks](https://www.3blue1brown.com/topics/neural-networks)

### Deep Learning Frameworks

Just as scikit-learn spares you the hassle of implementing a decision tree from scratch every time you want to use one, there are several common deep learning frameworks that help you address similar issues in the realm of neural networks. These frameworks provide built-in functions and modules that simplify the process of developing and training deep learning models, allowing you to focus on the architecture and training of your models rather than the underlying computational details. Here's a simple introduction to some popular deep learning frameworks:

- [Tensorflow](https://www.tensorflow.org/) : Developed by the Google Brain team, TensorFlow is one of the most widely used deep learning frameworks. It's known for its flexibility and ability to run on various platforms, from servers to mobile devices. Key Features: Easy to use, supports a wide range of neural network architectures, and has a large community and ecosystem.

- [PyTorch](https://pytorch.org/) : Developed by Facebook's AI Research lab, is valued for its dynamic computation graph, which allows for more intuitive and flexible model building.
Key Features: Dynamic graph construction, simple and easy to debug, and widely used in research and industry.

There are many other well-known frameworks, like Keras, MXNet, Caffe, etc. You can use any framework you prefer in part 3 - deep learning!

## Dealing with Images

Unlike handling numbers and texts, an image contain more information, thus more computing resources is needed. Preparing an image dataset for deep learning model training involves several steps to ensure the data is in the right format, properly labeled, and augmented to improve model generalization. Here's a step-by-step guide:

- Image Preprocess(you may find Python packages like OpenCV, PIL, OS helpful here): 
    - Resizing: Deep learning models require a fixed input size. Resize all images to the dimensions expected by the model. 
    - Color Space Conversion: Convert images to the appropriate color space, typically RGB, unless the model is designed to work with another format like grayscale.
    - Normalization: Scale pixel values to a range that is suitable for model training, often [0, 1] or [-1, 1]. This can be done by dividing by 255 (for [0, 1]) or 256 (for [-1, 1]).
    - Data Augmentation: To increase the diversity of the dataset and prevent overfitting, apply random transformations such as rotation, scaling, cropping, flipping, and color variation.

- Data Splitting: Similar to traditional ML, data is split into training, validation, and test sets. The model learns from the training data, its performance is tuned using the validation data, and it is evaluated on the unseen test data to gauge its real-world performance.

With deep learning frameworks, those process could be integrated into a image-processing streamline. Here is a simple example with PyTorch:

```python
from torchvision import datasets, transforms
from torch.utils.data import DataLoader

# Define transformations
transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# Load and transform the dataset
dataset = datasets.ImageFolder(root='path_to_dataset', transform=transform)
# ...more steps may be needed

# Create data loaders
train_loader = DataLoader(dataset, batch_size=32, shuffle=True)
test_loader = DataLoader(dataset, batch_size=32, shuffle=False)
# set a proper batch_size here, or you will find GPU out of memory
```
Before start your training, ensure that all necessary metadata and annotations are correctly associated with each image. This might include file paths, labels, bounding box coordinates(for detection tasks), etc.

## Classification 

Classification in deep learning involves training a model to categorize inputs into predefined classes. This is widely used in tasks such as image classification, text classification, and spam detection. 

### Models for Classification

- **Multi-Layer Perceptron (MLP)**: A simple feedforward neural network can be used for basic classification tasks. While not as powerful as CNNs or ViTs for image or text data, MLPs can be effective for smaller datasets or simpler problems.
- **Convolutional Neural Network (CNN)**: Designed to process data with grid-like topology (e.g., images). CNNs use convolutional layers to automatically extract features from the input data. Example: The AlexNet, VGG, ResNet, and EfficientNet
- **Vision Transformer (ViT)**: A recent innovation using transformer architecture, initially designed for NLP tasks, but now effectively applied to image classification.
- **SOTA Models**:YOLO (You Only Look Once), SSD (Single Shot MultiBox Detector), and Mask R-CNN

You can choose any model you prefer for the task below; there are no limitations to selecting a model and framework.


## Task
To complete the deep learning part of the second phase, you need to participate in a Kaggle competition. [Kaggle Competition Portal](https://www.kaggle.com/c/nzmsa-2024)

Train your deep learning image classification model with the dataset(CIFAR-10) we provide and submit your prediction on Kaggle! 

Kaggle submission format:
```
ID, TARGET
0,0
1,4
2,2
etc.
```

"Though the path be broken and uncertain,claim you place as Kaggle Lord!"

## Submission

To complete this part, please include the following items in your repository:

1. A Jupyter notebook (.ipynb) containing your training and evaluation work for your image classification task
2. Submit your prediction on Kaggle and send us a copy of your submission
3. A summary (a Markdown cell in each notebook you create, .txt, .pdf, or in another readable format)
    - Think of this as a TL;DR for your notebooks.
    - While there is no word limit, we may penalise summaries that are more than 500 words long (we have a lot of submissions to get through, so the more concise you can be, the better!), or do not provide a sufficient overview of everything you have done. A key skill to master in data science is your ability to communicate technical concepts in a clear way.

## Marking Criteria

### Task Completion

For each task, we will be making sure that you have met the criteria below.

- Load and split preprocessed data
    - You have loaded in and split your dataset appropriately
        - We suggest using a random state of 101 with a train-validation-test split (validation is a necessary here)
- Choose an algorithm
    - You have chosen an appropriate algorithm for the CIFAR-10 dataset
- Train and test a model
    - You have trained and tested your models appropriately
    - You have reported the accuracy of your models on the training and test sets
    - You have printed a simple metric for each model's predictions
- Evaluate the model
    - You have used evaluation metrics for each model, including (but not limited to) confusion matrix, precision, recall, F1-score, overall accuary
    - You have have interpreted your confusion matrices, F1-scores etc. correctly via comments inside your notebook explaining what your specific metrics mean
    - You have graphically evaluated the performance of each model using ROC curves or otherwise
- Summary
    - You have summarised what you have found during training and evaluation
    - You have concisely described the training and evaluation steps you have taken for each of your chosen datasets
    - You have included possible next steps that you could take to improve your models

### Presentation
- Your notebook/s and the code within them must be well-commented so that someone looking at your notebook/s for the first time can easily understand and follow along with what you did
    - Note that "well-commented" means that you have provided easily understandable explanations for what the results of your code mean or what you have inferred from them
    - We may penalise notebooks that only contain code and nothing else
- Your comments clearly explain the training and evaluation steps you have taken and justify why you took those steps

## Tips
- To help you get a preliminary understanding of the process of using deep learning for image classification tasks, here is an example of running the latest YOLO model on [AzureML](https://docs.ultralytics.com/guides/azureml-quickstart/#create-a-new-ipython-kernel). 

- Note that any training environment is allowed in this task, but it is highly recommended to use online notebooks, hence this will save lots of time spent in Nvidia drive updating, CUDA installing, and framework configuring. This doesn't mean that we don't want to see you learn to train deep learning models on your computer. Instead, we want you to channel the initial passion for deep learning into more meaningful training practices, rather than painfully resolving dependency and version issues in the command line window.  


## Appendix 

### How to Tune The Hyperparameters
Hyperparameter tuning is very time consuming and sometimes you can not make sure this will actually work. We strongly suggest that pay more attention on model selecting and data preprocessing, so you can start with a strong baseline model. If your baseline model is not working at all, tuning is not a good idea to solve your problem. 

If you do have a baseline model and you want to spend some time making it proformance better, here are the fundamentals of hyperparameter tuning. Note that tuning is an art that requires a lot of experience, so don't be discouraged even if you don't get great results when you first start tuning.

- Understand Hyperparameters
    - Learning Rate: The step size at each iteration while moving toward a minimum of a loss function.
    - Batch Size: The number of training examples utilized to calculate the gradient and update the model's weights.
    - Number of Epochs: The number of times the learning algorithm will work through the entire training dataset.
    - Optimizer: The algorithm (like SGD, Adam, RMSprop) used to adjust the learning rate and update weights.
    - Network Architecture: The structure of the neural network, including the number and size of layers.
    - Regularization: Techniques like dropout, L1/L2 regularization to prevent overfitting.

- Tuning Methods:
    - Grid Search:Systematically explore a range of hyperparameter values. Grid search tests a combination of all specified hyperparameter values. Example: GridSearchCV in scikit-learn or using KFold cross-validation with grid search in TensorFlow or PyTorch.
    - Random Search: Instead of trying all possible combinations, randomly sample the hyperparameter space. Often more efficient than grid search, especially when the number of hyperparameters is large.
    - Bayesian Optimization: Use probabilistic models to predict good combinations of hyperparameters based on past results. Libraries like Hyperopt or Spearmint can be used for Bayesian optimization.

- Tricks:
    - Leverage Learning Rate Schedulers: Adjust the learning rate dynamically during training (e.g., reduce it when the loss plateaus).
    - Use Early Stopping: Stop training when the performance on the validation set starts to worsen, indicating overfitting.
    - Hyperparameter Tuning Libraries and Services: Utilize services like AWS SageMaker, Google Cloud HyperTune, or frameworks like Ray Tune for more sophisticated hyperparameter tuning.
    - Automated Machine Learning (AutoML): Use AutoML platforms that automatically tune hyperparameters for you, such as Google Cloud's AutoML or H2O.ai.

BE AWARE of YOUR BUDGET! Hyperparameter tuning can be computationally expensive; balance the need for tuning with available resources. 

### How to Prepare Your Training Environment on Your Own PC
Hardware: Use GPUs or TPUs for faster training, especially for large models. [Nvidia CUDA install guide](https://docs.nvidia.com/cuda/cuda-quick-start-guide/index.html)
Software: Install deep learning frameworks such as TensorFlow or PyTorch.
Dependencies: Ensure you have all necessary libraries installed (e.g., NumPy, pandas, scikit-learn).
Environment Management: Use virtual environments or Docker containers to manage dependencies and ensure reproducibility.

### Online Resources
[Hugging Face](https://huggingface.co/)  
[Papers With Code](https://paperswithcode.com/)  
[3blue1brown: Neural Networks](https://www.3blue1brown.com/topics/neural-networks)  
[Deep Learning Book](https://www.deeplearningbook.org/)  
[Neural Network and Deep Learning](http://neuralnetworksanddeeplearning.com/chap1.html)  
[Colah's blog](https://colah.github.io/)  
[Andrew Ng's Coursera Deep Learning Course](https://www.coursera.org/specializations/deep-learning)  
[Fast AI Practical Deep Learning](https://course.fast.ai/)  
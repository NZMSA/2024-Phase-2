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
- Activation Functions: These are crucial for introducing non-linear dynamics into the network, enabling it to learn complex patterns. Common examples include ReLU, Sigmoid, and Tanh functions.
- Backpropagation: This is the backbone of neural network training, a method for adjusting the weights of the network by calculating the gradient of the loss function (a measure of prediction error) with respect to each weight. It effectively guides the network on how to change its weights to reduce error.
- Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs): CNNs are particularly good at parsing visual data, while RNNs are designed to handle sequential data like text or speech. Both architectures tweak the basic neural network structure to better suit their respective tasks.

To find more about those key concepts and components, these videos may help you:
[3blue1brown: Neural Networks](https://www.3blue1brown.com/topics/neural-networks)

### Deep Learning Frameworks
Just as scikit-learn spares you the hassle of implementing a decision tree from scratch every time you want to use one, there are several common deep learning frameworks that help you address similar issues in the realm of neural networks. These frameworks provide built-in functions and modules that simplify the process of developing and training deep learning models, allowing you to focus on the architecture and training of your models rather than the underlying computational details. Here's a simple introduction to some popular deep learning frameworks:

- [Tensorflow](https://www.tensorflow.org/) : Developed by the Google Brain team, TensorFlow is one of the most widely used deep learning frameworks. It's known for its flexibility and ability to run on various platforms, from servers to mobile devices. Key Features: Easy to use, supports a wide range of neural network architectures, and has a large community and ecosystem.

- [PyTorch](https://pytorch.org/) : Developed by Facebook's AI Research lab, is valued for its dynamic computation graph, which allows for more intuitive and flexible model building.
Key Features: Dynamic graph construction, simple and easy to debug, and widely used in research and industry.

There are many other well-known frameworks, like Keras, MXNet, Caffe, etc. You can use any framework you prefer in part 3 - deep learning!

## Dealing with Images
Unlike handling numbers and texts, 

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


## Tasks
To complete the deep learning part of the second phase, you need to participate in a Kaggle competition. [Kaggle Competition Portal](https://www.kaggle.com/c/nzmsa-2024)

"Though the path be broken and uncertain,claim you place as Kaggle Lord!"

## Submission

To complete this part, please include the following items in your repository:

1. A Jupyter notebook (.ipynb) containing your training and evaluation work for your chosen classification dataset
2. A Jupyter notebook (.ipynb) containing your training and evaluation work for your chosen regression dataset
3. A summary (a Markdown cell in each notebook you create, .txt, .pdf, or in another readable format)
    - Think of this as a TL;DR for your notebooks.
    - While there is no word limit, we may penalise summaries that are more than 500 words long (we have a lot of submissions to get through, so the more concise you can be, the better!), or do not provide a sufficient overview of everything you have done. A key skill to master in data science is your ability to communicate technical concepts in a clear way.

## Marking Criteria

1. Task Completion

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
    - You have used evaluation metrics for each model, including (but not limited to) confusion matrix, precision, recall, F1-score
    - You have have interpreted your confusion matrices, F1-scores etc. correctly via comments inside your notebook explaining what your specific metrics mean
    - You have graphically evaluated the performance of each model using ROC curves or otherwise
- Summary
    - You have summarised what you have found during training and evaluation
    - You have concisely described the training and evaluation steps you have taken for each of your chosen datasets
    - You have included possible next steps that you could take to improve your models

2. Presentation
    - Your notebook/s and the code within them must be well-commented so that someone looking at your notebook/s for the first time can easily understand and follow along with what you did
        - Note that "well-commented" means that you have provided easily understandable explanations for what the results of your code mean or what you have inferred from them
        - We may penalise notebooks that only contain code and nothing else
    - Your comments clearly explain the training and evaluation steps you have taken and justify why you took those steps

## Tips
- To help you get a preliminary understanding of the process of using deep learning for image classification tasks, here is an example of running the latest YOLO model on [AzureML](https://docs.ultralytics.com/guides/azureml-quickstart/#create-a-new-ipython-kernel). 

- Note that any training environment is allowed in this task, but it is highly recommended to use online notebooks, hence this will save lots of time spent in Nvidia drive updating, CUDA installing, and framework configuring. This doesn't mean that we don't want to see you learn to train deep learning models on your computer. Instead, we want you to channel the initial passion for deep learning into more meaningful training practices, rather than painfully resolving dependency and version issues in the command line window.  


## appendix 

### How to Prepare Your Training Environment on Your Own PC
Hardware: Use GPUs or TPUs for faster training, especially for large models.
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
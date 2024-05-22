# 2024 Phase 2 - Data Science

## TODO:
Make a new branch and work on that if you are working on the repo. That way, we can track who's on what. One rule is that when you create a PR, make sure someone else merges it.

**Xiaoyu**

- You will be working on task 2. Have a read at task 1. I read it and I think most (or even everything) can stay as is
- The readmes for the new metrics and the regression dataset should go in `0. Resources`

**Shuo Feng**

- You need to get the reading material ready for 3. Deep Learning. Before you do that, make sure to communicate with @Bill and @Jingrui on what metric we will be using to evaluate the models for CIFAR-10 (also submission and the details)

**Bill**

- You will need to create the competition for task 3. This will involve uploading the CIFAR-10 dataset and setting up the competition readmes on Kaggle

**Jingrui**

- You will need to make the skeleton notebook for the competition on Kaggle. Have a look at `3. Deep Learning` for a dummy notebook that we used last year

The tasks shouldn't be too hard (except for maybe, Xiaoyu and Shuo Feng). Please let me know if you need help or if you have any questions!


## For this page:
- @Sadat - Update the links and READMEs after all the modules are set up and polished
- @Xiaoyu - Update the Getting Started part
- @ShuoFeng - Update the Deep Learning section at the end of this readme

## Start
This year, Phase 2 of the Data Science stream has been split into three parts:

1. [Analysis and Preprocessing](https://github.com/NZMSA/2024-Phase-2/tree/main/data-science/1.%20Analysis%20and%20Preprocessing)
2. [Training and Evaluation](https://github.com/NZMSA/2024-Phase-2/tree/main/data-science/2.%20Training%20and%20Evaluation)
3. [Deep Learning](https://github.com/NZMSA/2024-Phase-2/tree/ds/initial-setup/data-science/3.%20Deep%20Learning)

## Getting Started

To get started with Phase 2 of the Data Science stream:
1. Go to the README in the [Resources folder](https://github.com/NZMSA/2024-Phase-2/tree/main/data-science/0.%20Resources) and @Xiaoyu ~~choose **two** datasets (one for classification, one for regression) - you will use these two datasets for all three parts.~~ 
2. Create and activate a virtual environment to use for all three parts using the provided `requirements.txt` file with the following recommended packages:
    - Numpy and Pandas: data manipulation and processing
    - Matplotlib and Seaborn: plotting and visualisation
    - Scikit-learn: model training and evaluation
3. Start the first part and continue until you have completed the third part

## Tips

- Before beginning Phase 2, ensure that you:
    - Can create and activate a virtual environment using a `requirements.txt` file with venv and pip:
        - Shell commands:
            - `python -m venv venv` (Windows) or `python3 -m venv venv` (MacOS)
            - `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (MacOS)
            - `cd data-science`
            - `pip install -r requirements.txt`
        - Please refer to [this Week 1 module](https://learn.microsoft.com/en-us/training/modules/python-create-manage-projects/2-set-up-project) for more information
    - Can use a virtual environment with a Jupyter notebook in Visual Studio Code
    - Are comfortable using packages like Numpy, Pandas, Matplotlib, Seaborn, and Scikit-learn

- In this repository, we have used terminology like instances/samples, classes/labels/targets, features/attributes/variables/predictors, model/algorithm under the assumption that you are familiar with them and which ones are synonymous to each other. These have been covered across the Microsoft Learn modules for the Data Science stream in Phase 1. Hence, we recommend that whenever you come across an unfamiliar term or concept, go through the Microsoft Learn modules or any other external resources that you find useful. Please do this before asking the MSA team for help.

- Don't be overwhelmed by everything you have to do! We don't expect most people to complete absolutely everything within the given timeframe, so do as much as you can across all 3 parts!

- The bonus tasks are your time to shine and show us what you have learned, so create something you can be proud of and include in your portfolio! Don't worry if you can't get to these though, keep in mind that we're marking students across a wide range of years, degrees, and skill levels, so we'll take your personal circumstances into consideration!

- There are many good notebooks in [Kaggle](https://www.kaggle.com/competitions?hostSegmentIdFilter=5) such as [this one](https://www.kaggle.com/code/odins0n/spaceship-titanic-eda-27-different-models) that you can take inspiration from. You can do this by selecting one of the datasets in the first link above, going to Code, then going through the most voted notebooks. You can learn a lot by reading these notebooks and get a sense of what a good notebook looks like.

- Have a look at [this past submission](https://github.com/NZMSA/2020-Phase-1/blob/master/Data%20Science%20and%20Machine%20Learning/SampleReport.pdf) to see what you could write about in your notebooks and how to write about it.

- Lastly, if the Microsoft Learn modules weren't enough for you, feel free to watch any of these workshops that we've made over the years that have detailed explanations and examples!
    - Introduction to Artifical Intelligence, Machine Learning, and Data Science
        - [Video 1 - first half](https://www.youtube.com/watch?v=N7dmGJfHS6M)
        - [Video 2](https://www.youtube.com/watch?v=DlwDKzbt7PA)
        - [Video 3](https://www.youtube.com/watch?v=pgl5Y1Olq4A)
    - Exploratory Data Analysis
        - [Video 1 - second half](https://www.youtube.com/watch?v=N7dmGJfHS6M)
        - [Video 2](https://www.youtube.com/watch?v=9p8c0edPBXI)
        - [Video 3 - first third](https://www.youtube.com/watch?v=K_EFlXDMkvA)
        - [Video 4](https://www.youtube.com/watch?v=5wyIAAtaRbI)
        - [Video 5 - second half](https://www.youtube.com/watch?v=dvZxu2PjOW8)
    - Training and Evaluation
        - [Video 1 - second two thirds](https://www.youtube.com/watch?v=K_EFlXDMkvA)
    - Deep Learning @ShuoFeng
    - ~~Microsoft Azure~~
        - ~~[Video 1](https://www.youtube.com/watch?v=XVhQNmMFaHQ)~~

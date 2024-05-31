# Evaluating Regression Models

Evaluating leads directly on from testing your model. A good accuracy on your test set is not enough to say that your model is useful! Your model could be overfitting on the test set, your dataset may contain lots of samples that are within a small range of values, and your regression model could simply be choosing a value within that range which would automatically yield a high accuracy without any "learning" taking place.

We would like you to evaluate your model using the following model evaluation techniques for your regression model/s:

1. Coefficient of determination ($R^{2}$)
    - Calculate and print this value, explaining what it means
2. RMSE
    - Calculate and print this value, explaining what it means
3. MAE
    - Calculate and print this value, explaining what it means
4. SMAPE
   - Calculate and print this value, explaining what it means
5. MAPE
   - Calculate and print this value, explaining what it means
    

## 1. Coefficient of determination ($R^{2}$)

The [coefficient of determination](https://en.wikipedia.org/wiki/Coefficient_of_determination) measures the strength and direction of the relationship between two variables (for our purposes, the model predictions (predicted y values) and the ground truth (actual y values)). A value of $-1$ or $1$ means that the variables have a strong negative or positive correlation, respectively, whereas a value of $0$ means that they have no correlation.

$R^{2}$ can be calculated as shown below:
```python
from sklearn.metrics import r2_score
r2 = r2_score(y_test, predictions)
```

## 2. Root mean squared error (RMSE)

RMSE tells us how far off our predictions are from ground truth (lower is better):
$$RMSE = \sqrt{\sum_{i=1}^{D}(y_{true}-y_{pred})^2}$$

RMSE can be calculated as shown below:
```python
from sklearn.metrics import mean_squared_error
rmse = mean_squared_error(y_true, y_pred, squared=False)
```

## 3. Mean absolute error (MAE)

MAE also tells how far off our predictions are from ground truth (lower is better), but we only take the absolute value of the errors without squaring or rooting them like with RMSE:
$$MAE = \sum_{i=1}^{D}|y_{true}-y_{pred}|$$

MAE can be calculated as shown below:
```python
from sklearn.metrics import mean_absolute_error
mae = mean_absolute_error(y_test, predictions)
```


## 4. Symmetric mean absolute percentage error (SMAPE or sMAPE)

SMAPE (Symmetric Mean Absolute Percentage Error) is a metric used to measure the accuracy of a forecasting model. It is an accuracy measure based on percentage (or relative) errors. SMAPE provides a symmetric and more balanced view of the forecasting error by considering both the actual and forecasted values in its denominator.It usually defined as:

$$
\text{SMAPE} = \frac{100\%}{n} \sum_{i=1}^{n} \frac{|y_{true} - y_{pred}|}{\frac{|y_{pred}| + |y_{true}|}{2}}
$$

SMAPE can be calculated as shown below:
```python
import numpy as np
def smape(y_true, y_pred):
    # Ensure inputs are numpy arrays
    y_true = np.array(y_true)
    y_pred = np.array(y_pred)
    # Calculate the numerator (absolute difference)
    numerator = np.abs(y_true - y_pred)
    # Calculate the denominator (average of absolute actual and predicted values)
    denominator = (np.abs(y_true) + np.abs(y_pred)) / 2
    # Calculate SMAPE
    smape_value = np.mean(numerator / denominator) * 100
return smape_value
```


## 5. Mean absolute percentage error (MAPE)
MAPE (Mean Absolute Percentage Error) is a measure used in forecasting to determine the accuracy of a forecasted model. It usually expresses the accuracy as a ratio defined by the formula:

$$
\text{MAPE} = \frac{100\%}{n} \sum_{i=1}^{n} \left| \frac{y_{true} - y_{pred}}{y_{true}} \right|
$$

MAPE can be calculated as shown below:
```python
  mape_value = np.mean(np.abs((y_true - y_pred) / y_true)) * 100
  return mape_value
```

## Useful Link
[Evaluating point forecast accuracy](https://otexts.com/fpp3/accuracy.html)



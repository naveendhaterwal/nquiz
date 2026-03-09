# Ultimate Machine Learning Coding Cheat Sheet

This comprehensive guide provides ready-to-use Python snippets for every stage of the Machine Learning pipeline, from data preprocessing to model evaluation.

---

## 1. Environment Setup

### Import Essential Libraries
Load the core libraries for data manipulation, visualization, and machine learning.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split, cross_val_score, KFold
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder, OneHotEncoder
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.metrics import precision_score, recall_score, f1_score
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

from imblearn.over_sampling import SMOTE
```

---

## 2. Data Exploration

### Load Dataset
Read data from a CSV file and perform an initial inspection.

```python
df = pd.read_csv("data.csv")

# Inspection methods
df.head()       # View first 5 rows
df.tail()       # View last 5 rows
df.shape        # (rows, columns)
df.columns      # List column names
df.info()       # Data types and non-null counts
df.describe()   # Summary statistics
```

### Basic Statistics
Calculate key statistical measures for specific columns.

```python
# Central Tendency
df["column"].mean()
df["column"].median()
df["column"].mode()[0]

# Dispersion
df["column"].min()
df["column"].max()
df["column"].std()
```

---

## 3. Data Preprocessing & Cleaning

### Handling Missing Values
Identify and fill gaps in your data using statistical measures.

```python
# Check for nulls
df.isnull().sum()

# Imputation strategies
df["column"] = df["column"].fillna(df["column"].mean())
df["column"] = df["column"].fillna(df["column"].median())
df["column"] = df["column"].fillna(df["column"].mode()[0])
```

### Remove Duplicates
Ensure data integrity by removing redundant rows.

```python
df = df.drop_duplicates()
```

---

## 4. Feature Engineering

### Data Encoding
Convert categorical text data into numerical format for model compatibility.

#### Label Encoding
Assigns a unique integer to each category.
```python
le = LabelEncoder()
df["Gender"] = le.fit_transform(df["Gender"])
```

#### One-Hot Encoding
Creates binary columns for each category (use for non-ordinal data).
```python
df = pd.get_dummies(df, columns=["City"])
```

### Feature Scaling
Normalize or standardize numerical features to ensure they contribute equally to the model.

#### Standard Scaling (Z-score normalization)
```python
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

#### Min-Max Scaling (Range normalization)
```python
scaler = MinMaxScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

---

## 5. Model Preparation

### Feature and Target Split
Separate independent variables ($X$) from the dependent variable ($y$).

```python
X = df.drop("target", axis=1)
y = df["target"]
```

### Train-Test Split
Divide data into training and testing sets to evaluate model performance on unseen data.

```python
X_train, X_test, y_train, y_test = train_test_split(
    X, 
    y, 
    test_size=0.2, 
    random_state=42
)
```

### Handle Class Imbalance (SMOTE)
Synthetic Minority Over-sampling Technique to balance skewed classes in training data.

```python
smote = SMOTE(random_state=42)
X_train_resampled, y_train_resampled = smote.fit_resample(
    X_train, 
    y_train
)
```

---

## 6. Supervised Learning Algorithms

### Linear Regression
Used for predicting continuous numerical values.

```python
model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
```

### Logistic Regression
A classification algorithm used to predict the probability of a binary outcome.

```python
log_model = LogisticRegression()
log_model.fit(X_train, y_train)
y_pred = log_model.predict(X_test)

# Probability prediction
prob = log_model.predict_proba(X_test)
```

### Decision Tree Classifier
Predicts categories based on decision rules learned from features.

```python
tree = DecisionTreeClassifier(
    criterion="gini", 
    max_depth=5, 
    random_state=42
)
tree.fit(X_train, y_train)
y_pred = tree.predict(X_test)
```

### Decision Tree Regression
Applies tree-based logic for continuous value prediction.

```python
tree_reg = DecisionTreeRegressor(
    max_depth=5, 
    random_state=42
)
tree_reg.fit(X_train, y_train)
y_pred = tree_reg.predict(X_test)
```

### Sigmoid Function
The core mathematical function behind Logistic Regression updates.

```python
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Example usage
z = np.array([-2, -1, 0, 1, 2])
print(sigmoid(z))
```

---

## 7. Model Evaluation & Validation

### Classification Metrics
Evaluation tools for discrete target variables.

```python
# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print(cm)

# Individual Metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

# Comprehensive Report
print(classification_report(y_test, y_pred))
```

### Regression Metrics
Evaluation tools for continuous target variables.

```python
mae = mean_absolute_error(y_test, y_pred) # Mean Absolute Error
mse = mean_squared_error(y_test, y_pred)   # Mean Squared Error
rmse = np.sqrt(mse)                      # Root Mean Squared Error
r2 = r2_score(y_test, y_pred)            # R-Squared (Variance Explained)
```

### Cross-Validation
Validating model stability across different subsets of data.

```python
# Simple Cross-Validation
scores = cross_val_score(model, X, y, cv=5)
print(f"Mean Score: {scores.mean()}")

# K-Fold Cross Validation
kfold = KFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=kfold)
```

---

## 8. Interpretability & Visualization

### Decision Tree Feature Importance
Identifying which features contribute most to the model's decisions.

```python
importances = tree.feature_importances_
sorted_indices = np.argsort(importances)[::-1]

feature_importances = {X.columns[i]: importances[i] for i in sorted_indices}
print(feature_importances)
```

### Key Visualizations
Visualizing data relationships and model parameters.

```python
# Correlation Heatmap
sns.heatmap(df.corr(), annot=True)
plt.show()

# Feature Importance Plot
plt.bar(range(len(importances)), importances[sorted_indices])
plt.xticks(range(len(importances)), X.columns[sorted_indices], rotation=90)
plt.title("Feature Importance")
plt.show()
```

---

## 9. Deployment & Inference

### Predict on New Data
Applying your trained model to unseen samples.

```python
new_data = [[value1, value2, value3]]
prediction = model.predict(new_data)
print(f"Prediction: {prediction}")
```

---
**End of Machine Learning Exam Cheat Sheet**
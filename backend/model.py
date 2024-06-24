import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.impute import SimpleImputer
import pickle

# read dataset
df = pd.read_csv("water_potability.csv")


df_selected = df.copy()

selected_features = ['ph', 'Solids', 'Turbidity', 'Potability']

df_selected = df_selected[selected_features]
df_null_values = df_selected.isnull().sum() #ph ada 491 null valuese

print(df_selected.sample(5))
print(df_null_values)
# df.info()

# cek histogram pH
sns.histplot(df['ph'].dropna(), kde=True)
plt.show()

imputer = SimpleImputer(strategy='mean')
df_selected['ph'] = imputer.fit_transform(df_selected[['ph']])

df_null_values = df_selected.isnull().sum()
print(df_null_values)

X = df_selected.drop(['Potability'], axis=1)
y = df_selected['Potability']

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size= 0.2, random_state=42)

# Standarisasi fitur
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# K-Nearest Neighbors
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train_scaled, y_train)
y_pred_knn = knn.predict(X_test_scaled)
print("K-Nearest Neighbors")
print(classification_report(y_test, y_pred_knn))
print("Accuracy:", accuracy_score(y_test, y_pred_knn))

# Support Vector Machine
svm = SVC(kernel='rbf')
svm.fit(X_train_scaled, y_train)
y_pred_svm = svm.predict(X_test_scaled)
print("\nSupport Vector Machine")
print(classification_report(y_test, y_pred_svm))
print("Accuracy:", accuracy_score(y_test, y_pred_svm))

# Random Forest
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
y_pred_rf = rf.predict(X_test)
print("\nRandom Forest")
print(classification_report(y_test, y_pred_rf))
print("Accuracy:", accuracy_score(y_test, y_pred_rf))

# Plot feature importances for Random Forest
importances = rf.feature_importances_
features = X.columns
indices = np.argsort(importances)[::-1]

plt.figure(figsize=(10, 6))
plt.title("Feature Importances - Random Forest")
plt.bar(range(X.shape[1]), importances[indices], align='center')
plt.xticks(range(X.shape[1]), features[indices], rotation=90)
plt.tight_layout()
plt.show()

pickle.dump(svm, open('ml_model.pkl', 'wb'))




# Final_Project

##Goal
The goal of our Final Project is to create and train a model that accurately predicts loan interest rates a user would receive based on various features.

#1. Data Collection
Source for Data:
Raw data was derived from LendingTree website.
The dataset included various features involved in calculating loan approval and interest rates which included but is not limited to the following:
Loan Amount, Funded Amount, Term, Interest rate, Installments, Annual income, etc.

#2. Data Preprocessing
Cleaning: Data was cleaned and typecasted through SQL. We then exported a SQL database and a CSV of the clean data which was later used in our model.


#3. Choose Machine Learning Model
After careful consideration of the various machine learning models available, we decided to use a Decision Tree Model.
This is due to the model's ease of understanding numerical and categorical data as well as its ability to predict continuous data.



#5. Model Training and Validation
Split the data into training and test sets.
Train the model on the training set.
Validate the model on the validation set and tune hyperparameters using GridSearchCV.
  * Our optimum parameter: max_depth:7, min_samples_leaf: 2, min_samples_split: 2
  * Mean Squared Error of 0.00064332
  * The following features held the most weight in determining interest rates:
term_ 60 months                    0.367418
revol_util                         0.334756
installment                        0.123857
delinq_2yrs                        0.053053
inq_last_6mths                     0.028110

#Tools and Technologies
Programming Languages: Python
Libraries: Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch.
Database Tools: MySQL, PostgreSQL.
Data Visualization: JavaScript Plotly, PowerPoint.



Project Goals:

Input factors: Loan amount, purpose of loan, annual income, and potentially other factors to determine the rate that a person may get for their loan

Interactive Display on JavaScript Plotly Dashboard

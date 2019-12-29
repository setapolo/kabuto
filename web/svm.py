import sys
from sklearn.svm import SVC
from sklearn import svm
import numpy as np
import copy
import matplotlib.pyplot as plt
from sklearn.model_selection import GridSearchCV
from sklearn.kernel_ridge import KernelRidge
from sklearn.metrics.pairwise import rbf_kernel
from sklearn.linear_model import Ridge


args = sys.argv


def regression_main():
     # model = svm.SVR(kernel='rbf', C=1e3, gamma=0.1)
      data=[]
      with open(args[1],"r") as f:
           data=[e.replace("\n", "") for e in f.readlines()]
           data=[[float(e) for e in e.split(",")] for e in copy.deepcopy(data) ]

      in_data=[e[:-1] for e in data]
      label_data=[e[-1] for e in data]

      print(in_data,label_data)

      tuned_parameters = [
#        {'kernel': ['rbf'], 'C': [3]}#,
        {'kernel': ['rbf'], 'gamma': [10**i for i in range(-6, 6)], 'C': [3]}#,
#        {'kernel': ['linear'], 'C': [1, 10, 100, 1000]}
      ]

#      model = GridSearchCV(svm.SVR(), tuned_parameters,  verbose=1,cv=5, scoring="mean_squared_error")
      model =svm.SVR(kernel='rbf',gamma=0.00001,C=1e3)
#      model =svm.SVR(kernel='rbf')


      model.fit(in_data,label_data)


      plt.scatter([e[0] for e in in_data], [e for e in label_data])
      test_in_data=[[e] for e in range(int(min([e[0] for e in in_data])),int(max([e[0] for e in in_data])),1)]
#      test_in_data=[[e] for e in range(2100)]
      plt.plot([e[0] for e in test_in_data], model.predict(test_in_data))
      plt.show()

      while True:
          user_input=input("end?>")
          if user_input=="end":break
          user_in_data=[]
          for i in range(len(in_data[0])):
               t=float(input(">"))
               user_in_data.append(t)

          print(model.predict([user_in_data])[0])



def main():
#     print("1:label\n2:regression_main")
#     n=int(input(">"))     
#     if n==1:
         #label_main()
#     if n==2:
    regression_main()

main()

## DOM
- Dom Stands for document object model.
-  Dom is a structural representation of  an html element as an object
-  This is used to manipulate the html element.
-  Once the webpage is loaded to the browser ,browser will create object for every html element.
-  Once the dom tree is created inside browser we can access the elements by using js and manipulate it.
-  DOm manipulations are
          a. we  can create the html element dynamically.
          b.we can change the  content of elements dynamically.
          c. we can apply css styles dynamically.
          d. we can add or remove html elemnt attributes dynamically.
###  Differene between htmlCollection and nodelist
- htmlCollection won't return forEach and any array methods.
- nodelist return only forEach methods.
- To iterate over htmlcpllection element we havr to convert it  to array.
#### conversion of nodelist aand htmlCollection to Array
 Array.from(variablename)
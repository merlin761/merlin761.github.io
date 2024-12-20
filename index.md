---
layout: default
---

The reason i added this project was because I liked the project since we had to add whatever we wanted to make the design of the code better, which I think I did a pretty good job however I felt like I could have done a better job in the security aspect, and I think I can change that now that I’m given the opportunity. It has been improved by improving security by creating a database to store names and passwords. i as well Hashed the password and added it to the database so it could be safe. I faced a lot of challenges while doing this project however I was able to create a database on MongoDB where I was able to store the password and users. There were many challenges like I had said before. I was having issues with the libraries on VS however, I was able to solve the issue. I learned to keep trying I felt like I was not going to be able to do it and I felt like I choose bigger project than I could handle however instead I divided into little pieces so I could better do the projects without feeling like I wasn’t going to be able to do it, I leaned how to install libraires like mongodb and openssl. 

for this project i used mongodb compass wich it was easy to use and where i inserted the data into mongodb through a JSON file. I created two files ine as employee and the other one as a customer, where the employees where able to log in with the credential and use the hashed password and login into to the system so they can access the customers and their data.


```
//[
  {
    "id": 100,
    "name": "merlin martinez",
    "DOB": "09/11/2000",
    "Role": "Administrator",
    "Access": "All access"
   
  }
]

  ```

after i added this data as a JSON file i decide i wanted to add the encripted password so i went to the mongodb shell and added the follwing code to hash the password.
```
db.Employe.insert({"name":"merlin", "password": "YUbe18@"});
db.Employe.insert({"name":"merlin", "password": fromStringToHash("YUbe18@")});
```
for the customers JSON file i added the following.
```
[
  {
    "id": 1,
    "name": "Bob Jones",
    "DOB": "09/17/1988",
    "Role": "Client"
  },
  {
    "id": 2,
    "name": "Sarah Davis",
    "DOB": "04/17/2008",
    "Role": "Client"
  },
  {
    "id": 3,
    "name": "Amy Friendly",
    "DOB": "03/15/1998",
    "Role": "Client"
  },
  {
    "id": 4,
    "name": "Johnny Smith",
    "DOB": "05/07/1978",
    "Role": "Client"
  },
  {
    "id": 5,
    "name": "Carol Spears",
    "DOB": "08/12/1988",
    "Role": "Client"
  }
]
```
By doing these steps i was able to create a new database to store private data and hash the password so it can be safe and harder to acesss. later on on the main.cpp file i deleted the user and password that was written on the code so i could keep eveything safe.

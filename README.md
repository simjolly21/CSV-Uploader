# CSV uploder
Upload and save csv files with django and react

***

## Frontend
> - cd frontend
> - npm install
> - npm start


> - Select and upload csv file through the frontend.
> - The csv file should contain four fields - name, oneclass, school, state

## Backend
Products model has four fields - name, oneclass, school, state

> - cd backend
> - pip install -r requirements.txt
> - python manage.py migrate
> - python manage.py runserver

> - Once the file is received through a post request,it is parsed inside the **ProductCreateView**. 
> - The new Product objects are created and then stored in the database



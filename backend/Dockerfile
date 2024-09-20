# Use an official Python runtime as a parent image
FROM python:3.12

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory to the src folder inside the backend
WORKDIR /backend/src

# Copy the requirements file into the working directory
COPY requirements.txt /backend/src/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code into the working directory
COPY . /backend/src/

# Expose port 8000
EXPOSE 8000

# Run Django development server from src folder
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

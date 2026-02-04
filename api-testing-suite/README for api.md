# API Testing Suite with Postman

Professional API testing collection for JSONPlaceholder REST API demonstrating comprehensive testing methodologies.

## 🚀 Overview
This collection includes 6 API test cases covering CRUD operations, data validation, error handling, and performance testing using Postman.

## 📊 Test Cases Included

### 1. GET All Posts
- Validates status code (200), response time (<1000ms), and data structure
- Checks all posts have required fields (userId, id, title, body)

### 2. GET Single Post
- Tests retrieving specific resource (ID: 1)
- Validates response structure and data types

### 3. POST Create New Post
- Tests creating new resources with JSON payload
- Validates response (201 Created) matches request data
- Checks generated ID and response time

### 4. PUT Update Post
- Tests updating existing resources
- Validates update success and response structure

### 5. DELETE Post
- Tests resource deletion
- Validates status code and response body

### 6. Negative Testing (404 Error)
- Tests error handling for non-existent resources
- Validates appropriate error response

## 🛠️ Technologies Used
- **Postman** - API testing platform
- **JavaScript** - Test script validation
- **JSONPlaceholder** - Fake REST API for testing
- **GitHub** - Version control and documentation

## 👨‍💻 Author
**Pranav Tamore**
- GitHub: [@Mugiwara25](https://github.com/Mugiwara25)
- LinkedIn: [linkedin.com/in/pranav-tamore-84a96b21b](https://linkedin.com/in/pranav-tamore-84a96b21b)
- Portfolio: https://Mugiwara25.github.io/testing-portfolio/api-testing.html
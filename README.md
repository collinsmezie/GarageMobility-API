# Garage Mobility - Blog API


# API Documentation

This documentation outlines the usage of the Blog REST API. The API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of posts stored in a MongoDB database.

## API Base URL

The base URL for all API endpoints is https://garagemobility-api.onrender.com
Send Requests from your favorite API clients like Postman and Thunderclient

## Standard Formats for Requests and Responses

**Request Format:** The API accepts JSON-formatted requests.

**Response Format:** The API responds with JSON-formatted data.

## Endpoints


### 1. Get All Posts

- **Endpoint:** `GET api/posts/all`
- **Responses:**
  - `200 OK`: The list of posts was fetched successfully.

    ```json
    {
  
      {
        "_id": "66563953cef6d2349dc67d82",
        "title": "MySQL First Post",
        "author": "femi J",
        "content": "Server is running on port 10000 Connected to SQL server Successfully",
        "creation_Date": "23-01-2024 14:23:22",
        "__v": 0
      },
      {
        "_id": "66563a96cef6d2349dc67d88",
        "title": "MongoDB second Post",
        "author": "Mary Janes",
        "content": "Server is running on port 10000 Connected to MongoDB Successfully",
        "creation_Date": "23-01-2024 14:24:22",
        "__v": 0
      },
      {
        "_id": "665640fc7035a9efe28f0ae6",
        "title": "Garage Mobility",
        "author": "Jerry Kumahlor",
        "content": "useNewUrlParser is a deprecated option",
        "creation_Date": "23-01-2024 14:26:22",
        "__v": 0
      }
    }
    ```

  - `500 Internal Server Error`: An error occurred while fetching the posts.


  ### 2. Get Post by ID

- **Endpoint:** `GET /api/posts/:postId/one`
- **Responses:**
  - `200 OK`: The post was found successfully. The response includes the post data.

    ```json
    {
      "_id": "66563a96cef6d2349dc67d88",
      "title": "MongoDB First Post",
      "author": "Jady J",
      "content": "Server is running on port 10000 Connected to MongoDB Successfully",
      "creation_Date": "23-01-2024 14:20:22",
      "__v": 0
    }
    ```

  - `404 Not Found`: The post with the specified ID was not found.

    ```json
    {
      "error": "No Post with that ID was found"
    }
    ```

  - `500 Internal Server Error`: An error occurred while fetching the post.



 ### 3. Create New Post

- **Endpoint:** `POST /api/posts/create`
- **Request Body:** The post data 
```json
    {
      "title": "Fantasy Grill",
      "author": "Mirage", 
      "content": "Once upon a time... The end"
    }

```
- **Responses:**
  - `201 OK`: The post was created successfully. The response includes the newly created post data.

    ```json
    {
      "title": "Fantasy Grill",
      "author": "Mirage",
      "content": "Once upon a time... The end",
      "creation_Date": "23-01-2024 14:20:22",
      "_id": "65afbd163b93aa94cd67cadc"
    }
    ```
  - `500 Internal Server Error`: An error occurred while creating the Post.


### 4. Update Post by ID

- **Endpoint:** `PUT /api/posts/:postId/update`
- **Request Body:** The updated post fields.
```json
{
  "author": "Mirage Sonya"
}

```
- **Responses:**
  - `200 OK`: The Post was updated successfully.

    ```json
    {
      "_id": "65afbd163b93aa94cd67cadc",
      "title": "Fantasy Grill",
      "author": "Mirage Sonya",
      "content": "Once upon a time... The end",
      "creation_Date": "23-01-2024 14:20:22",
      "__v": 0
    }
    ```


  - `404 Not Found`: The Post with the specified ID does not exist.


    ```json
    {
      "error": "No Post with that ID found"
    }
    ```
  - `500 Internal Server Error`: An error occurred while updating the Post.

### 5. Delete Post by ID

- **Endpoint:** `DELETE /api/posts/:postId/delete`
- **Responses:**
  - `200 OK`: The post was deleted successfully.

    ```json
    {
      "message": "Post deleted successfully"
    }
    ```

  - `404 Not Found`: The Post with the specified ID does not exist.

    ```json
    {
      "error": "Post not found - Check input ID"
    }
    ```
  - `500 Internal Server Error`: An error occurred while deleting the Post.




## Known Limitations and Assumptions

- The initial loading time may take longer due to occasional server spin down (Free hosting plan)
- The API assumes a MongoDB database is set up and running.


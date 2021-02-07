# MCS API

## Overview

MCS API is a api that allows CS students @ UIUC to search scores statistics of courses. 

**Show All Courses**
----
    Return json data about all CS courses.

* **URL**
    https://mcsapi.herokuapp.com/courses

* **Method:**
    `GET`

*  **URL Params**
    None

* **Data Params**
    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```json
    [
        {
            "_id":"601e39e39cb5ed1380521d72",
            "year":2020,
            "term":"Spring",
            "number":101,
            "title":"Intro Computing: Engrg & Sci","Aplus":104,
            "A":468,
            "Aminus":0,
            "Bplus":0,
            "B":54,
            "Bminus":0,
            "Cplus":0,
            "C":15,
            "Cminus":0,
            "Dplus":0,
            "D":6,
            "Dminus":0,
            "F":6,
            "W":0,
            "instructor":"Davis, Neal E",
            "__v":0
        },
        ...
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No courses was found." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "https://mcsapi.herokuapp.com/courses",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Search Courses By Course Number**
----
    Return json data about CS courses with specific course number.

* **URL**
    https://mcsapi.herokuapp.com/courses/:courseNumber

* **Method:**
    `GET`

*  **URL Params**
    **Required:**
 
   `courseNumber=[integer]`

* **Data Params**
    None

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "https://mcsapi.herokuapp.com/courses/498",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```json
    [
        {"_id":"601e39e39cb5ed1380521d91",
        "year":2020,
        "term":"Spring",
        "number":498,
        "title":"Applied Machine Learning",
        "Aplus":0,
        "A":70,
        "Aminus":0,
        "Bplus":11,
        "B":4,"Bminus":0,
        "Cplus":0,
        "C":0,
        "Cminus":1,
        "Dplus":0,
        "D":0,
        "Dminus":0,
        "F":0,
        "W":0,
        "instructor":"Forsyth, David A",
        "__v":0},
        ...
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No courses matching that number was found." }`

  
**Search Courses By Course Name**
----
    Return json data about CS courses *contains* a specific course name(case-insensitive).

* **URL**
    https://mcsapi.herokuapp.com/courses/:courseName

* **Method:**
    `GET`

*  **URL Params**
    **Required:**
 
   `courseName=[string]`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "https://mcsapi.herokuapp.com/courses/machine learning",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```json
    [
        {"_id":"601e39e39cb5ed1380521d91",
        "year":2020,
        "term":"Spring",
        "number":498,
        "title":"Applied Machine Learning",
        "Aplus":0,
        "A":70,
        "Aminus":0,
        "Bplus":11,
        "B":4,
        "Bminus":0,
        "Cplus":0,
        "C":0,
        "Cminus":1,
        "Dplus":0,
        "D":0,
        "Dminus":0,
        "F":0,
        "W":0,
        "instructor":"Forsyth, David A",
        "__v":0},
        ...
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Courses name doesn't exist." }`


**Search Courses By Year and Term**
----
    Return a list of json data about CS courses according to a year and term. (e.g. spring 2019), term is case-insensitive.

* **URL**
    https://mcsapi.herokuapp.com/:year/:term

* **Method:**
    `GET`

*  **URL Params**
    **Required:**
 
   `year=[integer]`
   `term=[string]`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "https://mcsapi.herokuapp.com/2019/spring",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```json
    [
        {"_id":"601e39e39cb5ed1380521dee",
        "year":2019,
        "term":"Spring",
        "number":101,
        "title":"Intro Computing: Engrg & Sci",
        "Aplus":320,
        "A":158,
        "Aminus":75,
        "Bplus":42,
        "B":22,
        "Bminus":20,
        "Cplus":12,
        "C":7,
        "Cminus":11,
        "Dplus":2,
        "D":8,
        "Dminus":7,
        "F":8,
        "W":1,
        "instructor":"Davis, Neal E",
        "__v":0},
        ...
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Can't find any course in this year." }`


**Search Courses By Year**
----
    Return a list of json data about CS courses according to a year.

* **URL**
    https://mcsapi.herokuapp.com/:year

* **Method:**
    `GET`

*  **URL Params**
    **Required:**
 
   `year=[integer]`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "https://mcsapi.herokuapp.com/2019",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```json
    [
        {"_id":"601e39e39cb5ed1380521dae",
        "year":2019,
        "term":"Fall",
        "number":100,
        "title":"Freshman Orientation",
        "Aplus":0,
        "A":214,
        "Aminus":22,
        "Bplus":1,
        "B":37,
        "Bminus":4,
        "Cplus":29,
        "C":12,
        "Cminus":10,
        "Dplus":4,
        "D":2,
        "Dminus":2,
        "F":2,
        "W":0,
        "instructor":"Gunter, Elsa",
        "__v":0
        },
        ...
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Can't find any course." }`


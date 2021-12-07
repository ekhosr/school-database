# School Database



## Table of Contents

1. [User Story](#userStory)

1. [Description](#description)

1. [Screenshot](#screenshot)

1. [Installation](#installation)

1. [Usage](#usage)

1. [License](#license)

1. [Contact](#contact)

1. [Link to Deployed App](#sample)

## <a id="userStory"></a>User Story

```md
AS A school manager
I WANT to manage teachers and assign students to teachers
SO THAT I can add or delete students from teacher's profiles
```

## <a id="description"></a>Description

Using school database users can see teachers and students of a school. There will be total three views.

- View 1: List of All Teachers (name, education)
- View 2: View a single Teacher (all information)
- View 3: Log In (Teacher Only)
- View 4: Add a Student (Protected)

## <a id="screenshot"></a>Screenshot

![Screenshot of Main Page](/client/src/images/mainPage.png)

![Screenshot of App](/client/src/images/teacherPage.png)

![Screenshot of App](/client/src/images/studentPage.png)

![Screenshot of App](/client/src/images/addStudent.png)


## <a id="installation"></a>Installation

### Starting Server

- Install dependencies in server folder using `npm i`
- Run the server using `node server.js`

### Generating Data

- To test the app you can fill the database by running `node load-data.js` in the server folder

### Starting the App
- Install dependencies in client folder using `npm i`
- Run the client using `npm run start`


## <a id="usage"></a>Usage

- The repo can be forked and then the required modules installed as per above. 

## <a id="license"></a>License

- ISC

## <a id="contact"></a>Contact


  [Ehsan Ravi](https://github.com/ekhosr)


## <a id="sample"></a>Link to Heroku Deployment

- [Experience School Database](https://ehsan-school-database.herokuapp.com/)

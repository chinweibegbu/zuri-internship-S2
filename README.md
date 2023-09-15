# Zuri HNG Internship - Stage 2

## Project Details
### Task Description
This is a REST API with basic CRUD operations on a resource called "Person".

<img style="text-align: center" src="./images/UML%20Entity-Relationship%20Diagram%20(ERD).png">
<p align=center>Fig. 1: API Resource Entity-Relationship Diagram (ERD)</p>

### Technologies Used
*API development*:
&nbsp;&nbsp;
[NodeJS](https://nodejs.org/en), [ExpressJS](https://expressjs.com/), [PostgreSQL](https://www.postgresql.org/)

*API testing*:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[Postman](https://www.postman.com/)

*API hosting*:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[Render](https://render.com/)

## API Usage
### API Details
API Documentation: https://documenter.getpostman.com/view/18067684/2s9YC5zYYD
API Link: https://zuri-chinwe-stage2.onrender.com/

### API Endpoints
| Endpoint      | HTTP Method   | Function                 |
| ------------- | :-----------: | ------------------------ |
| `/api`        | `GET`         | Get all **Person**s      |
| `/api`        | `POST`        | Create **Person**        |
| `/api/:id`    | `GET`         | Get **Person** by ID     |
| `/api/:id`    | `PATCH`       | Update **Person** by ID  |
| `/api/:id`    | `DELETE`      | Delete **Person** by ID  |

### API Setup
#### Remote API Setup
1. Fork the repository
2. Create an account on https://www.render.com
3. On the **"Dashboard"** tab, create a new web service by selecting **"Web Service"** from the **"New"** dropdown options
4. Choose the **"Build and deploy from a Git repository"** option
5. Connect to your GitHub account
6. In the GitHub configuration page, select **"Only select repositories"** under the **"Repository access"** 
7. Select the forked repository to the selected repositories in the same section
8. Back on https://www.render.com, click on the **"Connect"** button beside the repository you added
9. On the web service configuration page, specify a unique name
10. Set the following details as specified below and leave all other default settings:
       * Runtime: `Node`
       * Build Command: `npm install`
       * Start Command: `node index.js`
11. Click on the **"Create Web Service"** button
12. On the web service dashboard, click on the link generated to use the API

#### Local API Setup
1. Clone this repository to your local machine
2. Download [NodeJS](https://nodejs.org/en)
3. Open your command-line terminal of choice
4. Navigate to the directory of the cloned repository
5. Run `node --version` to ensure that NodeJS has been installed properly
6. Run `npm init -y` to initialise the project as a NodeJS project with the default values
7. Run `npm install` in the root directory to install all the necessary NPM packages
8. Run `npm start` to start the API on a local ExpressJS web server
9. Navigate to http://localhost:3001 to use the API in your browser or API testing tool of your choice

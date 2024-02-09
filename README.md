<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Restaurant Finder</h3>

  <p align="center">
    Fullstack PERN app that allows lists resturants and allows users to see information about that resturant as well as reviews. Users can add reviews to resturants and rate them out of 5. Users can also create, update and delete restaurants. 
    <br />
    <br />
    <a href="https://patchalv.github.io/restaurant-finder/">View Live</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>




<!-- ABOUT THE PROJECT -->
## About The Project
[![Product Name Screen Shot][product-screenshot]]()

Restaurant is a full-stack web application which uses PERN (Postgres, Express js, React and Node js). The home page lists different restaurants and lists their location, price range and average ratings (based on user reviews) similar to YELP. 

Users can create new restaurants, or update/delete exising ones. They also add reviews to their resturant of choice by clicking on that restaurant. 

If you want to check out a live version, the frontend and backend are deployed on vercel and the database on supabase. You can check it out here: https://vercel.com/patrick-alvarezs-projects/restaurant-finder-frontend

### Built With
[![React][React.js]][React-url]
[![Bootstrap][Bootstrap.com]][Bootstrap-url]
[![PostgreSQL][postgresql]][postgresql-url]
[![Express][Express.js]][Express-url]
[![Node][Node.js]][Node-url]
[![JavaScript][JavaScript]][JavaScript-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

You can check out the project live at: https://vercel.com/patrick-alvarezs-projects/restaurant-finder-frontend

If you want to use it locally you will need to:
1. Clone the repo
   ```sh
   git clone https://github.com/Patchalv/restaurant-finder.git
   ```
2. Install NPM packages in both the client and server folders
   ```sh
   npm install
   ```
3. Create .env files for the client and server directories. You can see the examples provided.
4. Create a postgresSQL database. See the visualization below aswell as instructions in server/db
5. Start server, then start client.
 ```sh
   npm start
   ``` 
[![Entity Relational Diagram][ERD]]()


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Patrick Alvarez Eades - p.alvarezeades@gmail.com

Project Link: [https://github.com/Patchalv/restaurant-finder](https://github.com/Patchalv/restaurant-finder)

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Patchalv/restaurant-finder.svg?style=for-the-badge
[contributors-url]: https://github.com/Patchalv/restaurant-finder/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Patchalv/restaurant-finder.svg?style=for-the-badge
[forks-url]: https://github.com/Patchalv/restaurant-finder/network/members
[stars-shield]: https://img.shields.io/github/stars/Patchalv/restaurant-finder.svg?style=for-the-badge
[stars-url]: https://github.com/Patchalv/restaurant-finder/stargazers
[issues-shield]: https://img.shields.io/github/issues/Patchalv/restaurant-finder.svg?style=for-the-badge
[issues-url]: https://github.com/Patchalv/restaurant-finder/issues
[license-shield]: https://img.shields.io/github/license/Patchalv/restaurant-finder?label=license&style=for-the-badge
[license-url]: https://github.com/Patchalv/restaurant-finder/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/patrickalvarezeades/


[swagger]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/
[postgresql]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=nextdotjs&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://react-bootstrap.netlify.app/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: #
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: #
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: #


[product-screenshot]: ./resources/screenshot.png
[ERD]: ./resources/db_visual.png

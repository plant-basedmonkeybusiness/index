#Green Room

Cms system using the trefle.io API to search and get scientific and common names of plants. 
And then displaying the information on a frontpage.

##Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.



###Prerequisites

What things you need to install the software and how to install them

1.First you need to clone the repository from our github account into your terminal. Take the url address of the repository and write in your terminal: git clone "github url address".

2. Install yarn and other applications in the terminal:
``` yarn ```
``` yarn init ```
``` yarn add express ```
``` yarn add cors ```
``` yarn add node-fetch ```

3. Go to trefle.io and register to get your API key. Copy your API key and paste it into "index.js" line 10 like so;

```fetch("https://trefle.io/api/plants?token= YOUR API KEY& q=" + req.query.plant) ```

###Deployment

Adding updated code to your github repository by typing in the terminal: 

git add .
git commit -m "insert comment" (A comment is necessary to complete this command)
git push -u origin master 

##Built With

Github - To manage and update code.
Firebase - To manage and display data.
Code editor - To author/write code.
Yarn - Package manager to install dependencies.
Express - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
Cors - A request for a resource (like an image or a font) outside of the origin is known as a cross-origin request. CORS (cross-origin resource sharing) manages cross-origin requests. The CORS standard is needed because it allows servers to specify not just who can access its assets, but also how the assets can be accessed.
Node.js - Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

##Contributing

Please clone your own branch of our git repository and push your code into that.

##Versioning

By pushing new updates into your github repository, you create new versions of the project.

##Authors

Guðmundur Helgi Rósuson
Hákon Arnar Sigurðsson
Sigrún Líf Erlingsdóttir 
Sunna Pétursdóttir
Æsa Ingólfsdóttir 

##Acknowledgments

Shout out to Mr.Ellert Smári Kristbergsson ..
and Mr.Pedro Netto ..

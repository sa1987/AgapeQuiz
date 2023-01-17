## Getting started with using the Javascript based quiz and certificate generator

Agape quiz is a java script based online quiz hosted through GitHub, as a part of the Agape initiative. You can create your own quiz and certificates using the Agape quiz template.
The quiz has multiple choice questions, timer and certificate generator. The certificate generator feature become accessible only of you meet the cut-off score(at least 90%) and you can customize the certificate by adding your name. Each certificate comes with a unique id and the score, unique ID and name is saved only in your local cache. 

Some of the features of the quiz are :
Score system
Highscore board
Dynamic progress bar
Restart and clear button
Customizable certificate generator

To start, you'll need a (free) [GitHub account](https://github.com/join).

You can achieve the minimal customization required by following this guide. However, a minimal knowledge of the coding or javascript is useful for more detailed customization . For a great basic primer on GitHub, check out [Hello World](https://guides.github.com/activities/hello-world/) and the [GitHub Term Glossary](https://docs.github.com/en/github/getting-started-with-github/github-glossary). If you get stuck at any point in the setup process, head to our [community forum](linktobeupdated) and someone can help you out!

This guide is a minimal documentation for building your quiz using our template with minimal coding knowledge. The authors are ametuer coders hence this may not be the most efficient code and may have errors.

Designing of the course is primarily guided by two available templates:

1.  Quiz template provided by [James Q Quick](https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript).

2.  Certificate generator template provided by [Rohan Patel](https://github.com/patelrohan750/certificate_generator).

    You can edit the template once you copied it your account through github directly or on your local set up using editors like Visual studio editor.

## Required Setup

Once you're logged in to GitHub, the first step of creating a quiz is to copy ( "fork") the quiz folder ( "repository") from agape's account to yours. This will make an identical copy of this quiz and its content in your account library. (Making your own repo is essentially a matter of editing out our content and customizing it with your own.)

### 1. Copy this template

To start, head to [agape quiz repo](https://github.com/sa1987/AgapeQuiz) and click "Fork" in the top right, or simply click the button below:

[Fork this repository on GitHub](https://github.com/sa1987/AgapeQuiz/fork)

#### OR

Login to your github account and navigate to the quiz [repo](https://github.com/sa1987/AgapeQuiz). Click the green "Use this template" button above. Choose a descriptive name for your repo based on your content. (Unlike when you fork a repo, you get to choose the name. If you change your mind before you do any work, delete your new repo and start over.)

The short quiz [template](https://github.com/sa1987/agapeOSQuiz) has the similar configuration configuration without the certificate and timer configuration and you can refer to this guide for modifying the short quiz template too.

### Minimum Configurations Required

Minimum changes required to use the template for your purpose are discussed here. More detailed customization steps are provided in the next section.

The minimum changes required for creating your own quiz are

1.  Modify the questions
2.  Modify the certificate

### How to update the questions

The questions are available in the [questions.json](https://github.com/sa1987/AgapeQuiz/blob/main/assets/questions.json) file. You need to follow the similar pattern for your questions too (A question with 4 options and has one right answer) otherwise you may encounter error. If you change the number of questions, you may need to refer to the '2.3 Item score' section to make additional changes to update the high score.

### How to create a certificate template

In order to activate the certificate option the participant needs to score above 90% in the exam. To modify the cut off, update the assets/end.js from 90 to your desired value.

`function createCertificate(totalScore,maxScore) {`

`if (((totalScore/maxScore)*100) >= 90){`

`certificate.classList.remove("hide");`

`form.classList.add("hide");`

`yesCert.classList.remove("hide");`

`noCert.classList.add("hide");`

`}}`

You can modify the instructions regarding the certificate in the assets/certificate.html file.

The current certificate template is available in the assets [folder](https://github.com/sa1987/AgapeQuiz/blob/main/assets/Certificate.pdf). Similar certificates can be created and downloaded using the free templates available in the [canva](https://www.canva.com/) website. The quiz template only support the pdf format. You can change the alignment and format of the certificate in the certificate.js file. More details on certificate creation resources in the Resources section.

If you like to use a simple short quiz [template](https://github.com/sa1987/agapeOSQuiz) without a timer and certificate, check out the following link.

### Optional changes

Here in this section, you can find the optional configuration changes to customize the template.

#### 1 Setting up the meta data

1.1 Update the title in the index.html

`<title>Agape Quiz</title>`

1.2 You can customize the favicon for your quiz in 3 steps:

1\. Create a favicon using a favicon generator link using this [link](https://favicon.io/)

1.  Upload it to the `assets` folder.

3\. Update the image file location in the index.html file

Current configuration is `<link rel="icon" type="image/png" href="assets/agapefavicon.ico"/>`

html files in the assets folder also has similar entries. You can make the same modifications in the those html files too.

### 2. Quiz configuration

#### 2.1 Quiz timer

You can customize the quiz time and scores by

1.  Modify the timer variable values in the assets/game.html file.

The current configuration

 `<h1 style="color:#FF0000" class="hud-main-text" id="timer">`

`300`

1.  Next, modify the corresponding variable in the assets/game.js The current configuration `var timeLeft = 300;`

You may encounter error if the time is not identical in all related files.

#### 2.2 Quiz response banner

You can modify the the respose for the right and wrong answers in the assets/game.html file.

Current configuration is

 `<h3 id="rightAns">Brilliant, Your answer is right! </h3>`

`<h3 id="wrongAns"> Oops!, it was the wrong answer. </h3>`

#### 2.3 Item score

As per current configuration, each correct score earns 10 points, to modify that update

1.  Update the bonus variable in the in the assets/game.html file.

    Current configuration is

    `const CORRECT_BONUS = 10;`

    1.  Update the maxscore variable in the assets/end.js file. Max score is calculated by total number of questions \* score earned per right answer (e.g. 16 \* 10)

    `const maxScore = 160;`

    If you change the number of questions or the individual score, then you need to make the corresponding values of the variable 'maxScore' too.

### Edit README

Once you've completed these steps, update the content of this **README** and add a short description of your project with a link to the course URL.If you liked the template, please give a star 😆.

*We would highly appreciate if you also mention the agape repo as a reference/source material!*

The configuration details of the quiz and certificate generator will be published separately.

### Authors

Aswathi S - [User profile](https://osf.io/t5vem/) (Author)

Cassandra Murphy - [User profile](https://orcid.org/0000-0003-1332-359X) (Editor & Reviewer)

Nina Trubanová - [User profile](https://orcid.org/0000-0001-8156-3304) (Editor & Reviewer)

<p align="right">

(<a href="#readme-top">back to top</a>)

</p>

## Reference

Authors referred to multiple how to guides and readme files while preparing this document. Please give a shout out to them too!

Quiz template provided by [James Q Quick](https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript).

Certificate generator template provided by [Rohan Patel](https://github.com/patelrohan750/certificate_generator).

## Join Us

Be a part of the Agape Community by joining our [Mattermost](https://agape.cloud.mattermost.com/) community channel. Here you can discuss about the project or ask any other queries and there will be a lot of folks to help.

Start the learning by checking out our <a href="https://agape-openscience-blog.netlify.app"><strong> agape blog »</strong></a> or <a href="https://sa1987.github.io/OpenDoorProject/"><strong> agape open science introductory  course »</strong></a> 

#### Disclaimer

Any views or opinions represented in this course belong solely to the Agape team and do not represent those people, institutions, or organizations that the authors may or may not be associated with in a professional or personal capacity unless explicitly stated.

The information in this course is provided without warranty. The authors and Agape team have neither liability nor responsibility to any person or entity related to any loss or damages arising from the information contained in this course.

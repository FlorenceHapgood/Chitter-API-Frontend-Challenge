# Chitter-API-Frontend-Challenge

Makers Tech-test practise.

Someone has already built a backend API and hosted it on Heroku. API documentation is here: https://github.com/makersacademy/chitter_api_backend

The task is to build a front-end single-page-app to interface with this API.

## Goals

- The goals was the learn how to stub an API in Javascript, which I achieved.

## Features

- User signup and login
- User can read peeps
- User can post peeps

## To do

- Test the error message on unsuccessful Post, for example if the user is not signed in.
- Refactor tests

### Possible future interactions:

- Viewing individual Peeps
- Deleting Peeps
- Liking Peeps
- Unliking Peeps



## To run locally

Clone the repo and:
```
$ bundle install
```

To view the app at localhost:8080:

```
$ node node_modules/http-server/bin/http-server

```

![Screen Shot 2019-03-10 at 21 34 45](https://user-images.githubusercontent.com/42243785/54091810-83ef1400-437c-11e9-8d54-220b1790ab04.png)


## Test

- Features Testing is with Cypress.

To run all the feature tests:

First, keep the server running. Then:
```
$ npx Cypress run
```

...will print out the tests in the terminal. Or:

```
$ npx Cypress open
```
and then click on each test, or on 'Run all Specs'. This will allow you to see the tests with images

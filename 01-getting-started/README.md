# 01 - Getting Started

## What is React?

ReactJS => a javascript library for building user interfaces

mobile apps give great highly reactive user experience, things happen instantly and don't wait for new page to load

in traditional websites, the requests sent to the server and new html page was sent back to the browser. so we need to wait the page load.

javascript can break request-response cycle, since it is a programming language that runs in browser, it can manipulates DOM and can control what the users see without fetching new html page.

ReactJS is a client-side javascript library, all about building modern reactive user interfaces for web

## why do we need React?

Although javascript can control the DOM, it reaches its own limitations for building complex user interfaces. In javascript, we have to write every single step of the actions. It is so-called imperative approach. With only javascript, we have to write low-level codes for manipulating DOM so code can be difficult to maintain in larger application.

For react, it is all about components. It is all about splitting application into small building blocks (components) which has clear tasks to do so code is maintainable and manageable. In react, we don't define step by step instructions. We just declare what we want to do and React takes care all the low-level instructions for DOM manipulation. It means React gives the developers an abstraction layer to build complex user interfaces easily. React uses declarative and component-focused approach.

## Usage of React (SPA)

React can be used to control parts of html pages of entire pages. Widget approach on a multi-page application, some pages are still rendered and served by a server.

React can also be used to control entire frontend of web application. This is so-called SPA (single-page application) approach. Server only sends one empty html page on initial request and react takes over and controls the UI.

## Alternative to ReactJS

ReactJS - lean and focused component based UI library. Certain features (eg. routing) are added via community packages

AngularJS - complete component based UI framework, packed with features, use typescript, can be overkill for smaller projects

VueJS - in between of React and Angular, component based UI framework, includes most core features

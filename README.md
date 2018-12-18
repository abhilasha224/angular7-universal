# Angular7 Universal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Getting Started
`git clone https://github.com/abhilasha224/angular7-universal.git`

`cd angular7-universal`

`npm install`

`npm run build:ssr && npm run serve:ssr`

## Server Side Rendering
Angular Universal generates static application pages on the server through a process called server-side rendering (SSR). With angular it can be found under the package @angular/platform-server. It Improves performance of angular applications and Facilitate web crawlers (SEO).
Without using Universal the application creates bundle files which will not expose any HTML, in turn no meta tags would be visible to crawlers.


 ![image](https://user-images.githubusercontent.com/9134167/50135896-d8be4980-02bb-11e9-88c0-1f241a28857e.png)
 
 
 Using Universal(SSR)
 
 
 ![image](https://user-images.githubusercontent.com/9134167/50137654-dc54cf00-02c1-11e9-9791-b4ba32445da0.png)

 

## Development server

Run `ng serve` for a universal dev server. Navigate to `http://localhost:4200/`.

## Universal Development server

Run `npm run build:ssr && npm run serve:ssr` for a universal dev server. Navigate to `http://localhost:4000/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

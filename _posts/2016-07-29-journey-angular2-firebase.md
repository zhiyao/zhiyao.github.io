---
layout: post
title: My journey into Angular 2, Angular-CLI, Firebase + AngularFire2
date:   2016-07-29 17:58:00 +0800
categories: javascript angular2 angular-cli firebase angularfire2
---

Having developed a project in Angular 1.5, I was naturally curious what Angular 2 has to offer.
So after hearing much of the pitch from Google IO 2016. I decided to get my hands dirty.

Here is a simple tutorial on how to get setup using Angular2, Firebase, AngularFire 2 using angular cli. It's aim is to target programmers who also wanted to dive into the cool new firebase and angular2. This tutorial assumes that you know how to setup a computer with node.js

## Is Angular2 ready for prime time?
I still have a little doubt at the moment of my writing. While working on this, I had spend a good deal of hours, fighting with the angular2, firebase and angularfire2 to play nice to each other.
Perhaps in a couple of weeks, things might settle down, fingers cross.

I am developing this on a windows machine just because I have send my MacBook Pro Retina to Apple for the stain gate issue. But on mac should be relatively simple to setup.

## Requirements
If you are unsure what editor to use, I would recommend using [vscode](https://code.visualstudio.com). Reason being that it is cross platform and it plays really well with typescript, which is used extensively on Angular2.

If you already have [node.js](https://nodejs.org/en/download/) installed *[(for window noobs)](http://blog.teamtreehouse.com/install-node-js-npm-windows)*, install the `angular-cli` and `typings` using command line with node package manager(npm):

        npm install -g angular-cli typings

## Getting Started

1. Create a new project

        ng new <project_name>
        cd <project_name>

2. Install AngularFire2 and Firebase

        npm install angularfire2 firebase --save

    what this does essentially is to install the `angularfire2` and `firebase` library, and the changes will be reflected in the `package.json` and `/node_modules` folder

3. Adding angularfire2 and firebase into `angular-cli-build.js`

    Any time that you have added a library from npm, you would need to include them in this file so that angular-cli will know how to bring them from `/node_modules` to the `/dist` folder

        //angular-cli-build.js
        /* global require, module */

        var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

        module.exports = function(defaults) {
        return new Angular2App(defaults, {
            vendorNpmFiles: [
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'zone.js/dist/**/*.+(js|js.map)',
            'es6-shim/es6-shim.js',
            'reflect-metadata/**/*.+(ts|js|js.map)',
            'rxjs/**/*.+(js|js.map)',
            '@angular/**/*.+(js|js.map)',

            // add this 2 lines in
            'angularfire2/**/*.js',
            'firebase/*.js'
            ]
        });
        };

4. Build

    Run `ng build` and check the /dist/vendor` folder for the `angularfire2` and `firebase` folders.

        ng build 

5. Configure `src/system-config.ts`

    Now we need to add `angularfire2` and `firebase` into SystemJS (The dynamic module loader) Update the file with the followings

        //src/system-config.ts
        /** Map relative paths to URLs. */
        const map: any = {
        'firebase': 'vendor/firebase/firebase.js',
        'angularfire2': 'vendor/angularfire2'
        };

        /** User packages configuration. */
        const packages: any = {
        angularfire2: {
            defaultExtension: 'js',
            main: 'angularfire2.js'
        }
        };

6. Configure firebase typescript support

    To get the firebase typescript support go to `src/tsconfig.json` and add the following line

        //src/tsconfig.ts
        "files": [
            "main.ts",
            "typings.d.ts",
            "node_modules/angularfire2/firebase3.d.ts"
        ]

7. Setup your firebase account 

    *This is the part that gets change often and most tutorial seems to ignore. Hopefully the steps listed here are comprehensive enough. If not leave a comment and I will try updating this.*

    Go to [firebase](firebase.google.com), once you are setup go create a new project
    
    Locate your project-name 
    
    ![locate project name](http://zenlab.me/images/projectname.png)
    
    To locate the api-key: https://console.developers.google.com/apis/credentials?project=YOUR-PROJECT

8. Setup Firebase Database Auth Rules

    Navigate to the rules of the firebase database, and set the read to true. I know it isn't ideal but for the purpose of this tutorial the objective is to get you setup as simple as possible.

    ![navigate to change firebase database](http://zenlab.me/images/databaseauth.png)

9. Seed Firebase Database

    Seed the firebase database with the following content

    ![seeding firebase database](http://zenlab.me/images/database-seed.png)
    Or just import the following [json file](http://zenlab.me/images/angular-firebase-export.json)

8. Inject AngularFire

    Open `src/app/main.ts` and inject Firebase providers and specify your default Firebase:

        import { FIREBASE_PROVIDERS, 
        defaultFirebase } from 'angularfire2';

        bootstrap(AppComponent, [
            FIREBASE_PROVIDERS,
            defaultFirebase({
                apiKey: "api-key",
                authDomain: "<firebase_project_name>.firebaseapp.com",
                databaseURL: "https://<firebase_project_name>.firebaseio.com/",
                storageBucket: "gs://<firebase_project_name>.appspot.com"
            })
        ]);

9. Use AngularFire and bind to a items list

    Open `src/app/app.component.ts`

        import { Component } from '@angular/core';
        import { AngularFire, FirebaseListObservable } from 'angularfire2';

        @Component({
        moduleId: module.id,
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
        })

        export class AppComponent {
        items: FirebaseListObservable<any[]>;

        constructor(af: AngularFire) {
            this.items = af.database.list('items')
        }

10. Update app.component.html

        <ul>
            <li *ngFor="let item of items | async">
                {{item.name}}
            </li>
        </ul>

11. Start the server

        ng server
    
    And finally we have magic~

## Conclusion

So far my journey with angular2 has taught me the following

1. Typescript that helps minimize ambiguity in javascript by introducing typed superset of javascript
2. Angular-cli is a command line tool that helps to build a scaffolding, inspired by ember-cli which in terms is inspired by rails.
3. Component first approach which was much inspired by react.js. 
4. Firebase real time database.

I hope that you have fun going through with this tutorial.
As the pace of development is fast, I am pretty certain this might not work within several months from date of this post.
 
Moving on next, you might want to check out the following

- [angular-cli wiki](https://github.com/angular/angular-cli/wiki)
- [firebase docs](https://firebase.google.com/docs/)
- [ngAir 71](https://www.youtube.com/watch?v=8E-dueHCd2o)

Happy hacking Angular2
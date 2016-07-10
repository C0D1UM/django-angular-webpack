import "angular";

import {StarComponent} from "./components/star/StarComponent";
import {TwitterApplicationComponent} from "./components/twitterApplication/TwitterApplicationComponent";
import {HelloWorldComponent} from "./components/HelloWorld/HelloWorldComponent";
angular.module("app.application", [])
    .component("twitterApplication", new TwitterApplicationComponent())
    .component("helloWorld", new HelloWorldComponent())
    .component("star",  new StarComponent());




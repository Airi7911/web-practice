import $ from "jquery";
import { clickEvent } from "./button/event";

import './Sass/main.scss';
import './Sass/_variables.scss';
import './Sass/_mixin.scss';

$(".button").on("click", clickEvent);
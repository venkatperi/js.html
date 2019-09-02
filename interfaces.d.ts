import { Config } from "js-dsl"
import { Attributes, Primitive } from "./dist/HtmlBuilder"

declare global {
    export function html(attr: Attributes, config?: Config): any;
    export function html(config?: Config): any;

    export function head(attr: Attributes, config: Config): any;
    export function head(config: Config): any;

    function title(attr: Attributes, value: Primitive): any;
    function title(value: Primitive): any;

    function base(attr: Attributes): any;

    function meta(attr: Attributes): any;

    function link(attr: Attributes): any;

    function style(attr: Attributes, value: Primitive): any;
    function style(value: Primitive): any;

    function body(attr: Attributes, config: Config): any;
    function body(config: Config): any;

    function text(attr: Attributes, value: Primitive, config?: Config): any;
    function text(attr: Attributes, config?: Config): any;
    function text(value?: Primitive, config?: Config): any;
    function text(config?: Config): any;

    function comment(attr: Attributes, value: Primitive, config?: Config): any;
    function comment(attr: Attributes, config?: Config): any;
    function comment(value?: Primitive, config?: Config): any;
    function comment(config?: Config): any;

    function address(attr: Attributes, value: Primitive, config?: Config): any;
    function address(attr: Attributes, config?: Config): any;
    function address(value?: Primitive, config?: Config): any;
    function address(config?: Config): any;


    function article(attr: Attributes, value: Primitive, config?: Config): any;
    function article(attr: Attributes, config?: Config): any;
    function article(value?: Primitive, config?: Config): any;
    function article(config?: Config): any;


    function aside(attr: Attributes, value: Primitive, config?: Config): any;
    function aside(attr: Attributes, config?: Config): any;
    function aside(value?: Primitive, config?: Config): any;
    function aside(config?: Config): any;


    function footer(attr: Attributes, value: Primitive, config?: Config): any;
    function footer(attr: Attributes, config?: Config): any;
    function footer(value?: Primitive, config?: Config): any;
    function footer(config?: Config): any;


    function header(attr: Attributes, value: Primitive, config?: Config): any;
    function header(attr: Attributes, config?: Config): any;
    function header(value?: Primitive, config?: Config): any;
    function header(config?: Config): any;


    function h1(attr: Attributes, value: Primitive, config?: Config): any;
    function h1(attr: Attributes, config?: Config): any;
    function h1(value?: Primitive, config?: Config): any;
    function h1(config?: Config): any;


    function h2(attr: Attributes, value: Primitive, config?: Config): any;
    function h2(attr: Attributes, config?: Config): any;
    function h2(value?: Primitive, config?: Config): any;
    function h2(config?: Config): any;


    function h3(attr: Attributes, value: Primitive, config?: Config): any;
    function h3(attr: Attributes, config?: Config): any;
    function h3(value?: Primitive, config?: Config): any;
    function h3(config?: Config): any;


    function h4(attr: Attributes, value: Primitive, config?: Config): any;
    function h4(attr: Attributes, config?: Config): any;
    function h4(value?: Primitive, config?: Config): any;
    function h4(config?: Config): any;


    function h5(attr: Attributes, value: Primitive, config?: Config): any;
    function h5(attr: Attributes, config?: Config): any;
    function h5(value?: Primitive, config?: Config): any;
    function h5(config?: Config): any;


    function h6(attr: Attributes, value: Primitive, config?: Config): any;
    function h6(attr: Attributes, config?: Config): any;
    function h6(value?: Primitive, config?: Config): any;
    function h6(config?: Config): any;


    function hgroup(attr: Attributes, value: Primitive, config?: Config): any;
    function hgroup(attr: Attributes, config?: Config): any;
    function hgroup(value?: Primitive, config?: Config): any;
    function hgroup(config?: Config): any;


    function main(attr: Attributes, value: Primitive, config?: Config): any;
    function main(attr: Attributes, config?: Config): any;
    function main(value?: Primitive, config?: Config): any;
    function main(config?: Config): any;


    function nav(attr: Attributes, value: Primitive, config?: Config): any;
    function nav(attr: Attributes, config?: Config): any;
    function nav(value?: Primitive, config?: Config): any;
    function nav(config?: Config): any;


    function section(attr: Attributes, value: Primitive, config?: Config): any;
    function section(attr: Attributes, config?: Config): any;
    function section(value?: Primitive, config?: Config): any;
    function section(config?: Config): any;


    function blockquote(attr: Attributes, value: Primitive,
        config?: Config): any;
    function blockquote(attr: Attributes, config?: Config): any;
    function blockquote(value?: Primitive, config?: Config): any;
    function blockquote(config?: Config): any;


    function dd(attr: Attributes, value: Primitive, config?: Config): any;
    function dd(attr: Attributes, config?: Config): any;
    function dd(value?: Primitive, config?: Config): any;
    function dd(config?: Config): any;


    function dir(attr: Attributes, value: Primitive, config?: Config): any;
    function dir(attr: Attributes, config?: Config): any;
    function dir(value?: Primitive, config?: Config): any;
    function dir(config?: Config): any;


    function div(attr: Attributes, value: Primitive, config?: Config): any;
    function div(attr: Attributes, config?: Config): any;
    function div(value?: Primitive, config?: Config): any;
    function div(config?: Config): any;


    function dl(attr: Attributes, value: Primitive, config?: Config): any;
    function dl(attr: Attributes, config?: Config): any;
    function dl(value?: Primitive, config?: Config): any;
    function dl(config?: Config): any;


    function dt(attr: Attributes, value: Primitive, config?: Config): any;
    function dt(attr: Attributes, config?: Config): any;
    function dt(value?: Primitive, config?: Config): any;
    function dt(config?: Config): any;


    function figcaption(attr: Attributes, value: Primitive,
        config?: Config): any;
    function figcaption(attr: Attributes, config?: Config): any;
    function figcaption(value?: Primitive, config?: Config): any;
    function figcaption(config?: Config): any;


    function figure(attr: Attributes, value: Primitive, config?: Config): any;
    function figure(attr: Attributes, config?: Config): any;
    function figure(value?: Primitive, config?: Config): any;
    function figure(config?: Config): any;


    function hr(attr: Attributes, value: Primitive, config?: Config): any;
    function hr(attr: Attributes, config?: Config): any;
    function hr(value?: Primitive, config?: Config): any;
    function hr(config?: Config): any;


    function li(attr: Attributes, value: Primitive, config?: Config): any;
    function li(attr: Attributes, config?: Config): any;
    function li(value?: Primitive, config?: Config): any;
    function li(config?: Config): any;


    function ol(attr: Attributes, value: Primitive, config?: Config): any;
    function ol(attr: Attributes, config?: Config): any;
    function ol(value?: Primitive, config?: Config): any;
    function ol(config?: Config): any;


    function p(attr: Attributes, value: Primitive, config?: Config): any;
    function p(attr: Attributes, config?: Config): any;
    function p(value?: Primitive, config?: Config): any;
    function p(config?: Config): any;


    function pre(attr: Attributes, value: Primitive, config?: Config): any;
    function pre(attr: Attributes, config?: Config): any;
    function pre(value?: Primitive, config?: Config): any;
    function pre(config?: Config): any;


    function ul(attr: Attributes, value: Primitive, config?: Config): any;
    function ul(attr: Attributes, config?: Config): any;
    function ul(value?: Primitive, config?: Config): any;
    function ul(config?: Config): any;


    function a(attr: Attributes, value: Primitive, config?: Config): any;
    function a(attr: Attributes, config?: Config): any;
    function a(value?: Primitive, config?: Config): any;
    function a(config?: Config): any;


    function abbr(attr: Attributes, value: Primitive, config?: Config): any;
    function abbr(attr: Attributes, config?: Config): any;
    function abbr(value?: Primitive, config?: Config): any;
    function abbr(config?: Config): any;


    function b(attr: Attributes, value: Primitive, config?: Config): any;
    function b(attr: Attributes, config?: Config): any;
    function b(value?: Primitive, config?: Config): any;
    function b(config?: Config): any;


    function bdi(attr: Attributes, value: Primitive, config?: Config): any;
    function bdi(attr: Attributes, config?: Config): any;
    function bdi(value?: Primitive, config?: Config): any;
    function bdi(config?: Config): any;


    function bdo(attr: Attributes, value: Primitive, config?: Config): any;
    function bdo(attr: Attributes, config?: Config): any;
    function bdo(value?: Primitive, config?: Config): any;
    function bdo(config?: Config): any;


    function br(attr: Attributes, value: Primitive, config?: Config): any;
    function br(attr: Attributes, config?: Config): any;
    function br(value?: Primitive, config?: Config): any;
    function br(config?: Config): any;


    function cite(attr: Attributes, value: Primitive, config?: Config): any;
    function cite(attr: Attributes, config?: Config): any;
    function cite(value?: Primitive, config?: Config): any;
    function cite(config?: Config): any;


    function code(attr: Attributes, value: Primitive, config?: Config): any;
    function code(attr: Attributes, config?: Config): any;
    function code(value?: Primitive, config?: Config): any;
    function code(config?: Config): any;


    function data(attr: Attributes, value: Primitive, config?: Config): any;
    function data(attr: Attributes, config?: Config): any;
    function data(value?: Primitive, config?: Config): any;
    function data(config?: Config): any;


    function dfn(attr: Attributes, value: Primitive, config?: Config): any;
    function dfn(attr: Attributes, config?: Config): any;
    function dfn(value?: Primitive, config?: Config): any;
    function dfn(config?: Config): any;


    function em(attr: Attributes, value: Primitive, config?: Config): any;
    function em(attr: Attributes, config?: Config): any;
    function em(value?: Primitive, config?: Config): any;
    function em(config?: Config): any;


    function i(attr: Attributes, value: Primitive, config?: Config): any;
    function i(attr: Attributes, config?: Config): any;
    function i(value?: Primitive, config?: Config): any;
    function i(config?: Config): any;


    function kbd(attr: Attributes, value: Primitive, config?: Config): any;
    function kbd(attr: Attributes, config?: Config): any;
    function kbd(value?: Primitive, config?: Config): any;
    function kbd(config?: Config): any;


    function mark(attr: Attributes, value: Primitive, config?: Config): any;
    function mark(attr: Attributes, config?: Config): any;
    function mark(value?: Primitive, config?: Config): any;
    function mark(config?: Config): any;


    function q(attr: Attributes, value: Primitive, config?: Config): any;
    function q(attr: Attributes, config?: Config): any;
    function q(value?: Primitive, config?: Config): any;
    function q(config?: Config): any;


    function rb(attr: Attributes, value: Primitive, config?: Config): any;
    function rb(attr: Attributes, config?: Config): any;
    function rb(value?: Primitive, config?: Config): any;
    function rb(config?: Config): any;


    function rp(attr: Attributes, value: Primitive, config?: Config): any;
    function rp(attr: Attributes, config?: Config): any;
    function rp(value?: Primitive, config?: Config): any;
    function rp(config?: Config): any;


    function rt(attr: Attributes, value: Primitive, config?: Config): any;
    function rt(attr: Attributes, config?: Config): any;
    function rt(value?: Primitive, config?: Config): any;
    function rt(config?: Config): any;


    function rtc(attr: Attributes, value: Primitive, config?: Config): any;
    function rtc(attr: Attributes, config?: Config): any;
    function rtc(value?: Primitive, config?: Config): any;
    function rtc(config?: Config): any;


    function ruby(attr: Attributes, value: Primitive, config?: Config): any;
    function ruby(attr: Attributes, config?: Config): any;
    function ruby(value?: Primitive, config?: Config): any;
    function ruby(config?: Config): any;


    function s(attr: Attributes, value: Primitive, config?: Config): any;
    function s(attr: Attributes, config?: Config): any;
    function s(value?: Primitive, config?: Config): any;
    function s(config?: Config): any;


    function samp(attr: Attributes, value: Primitive, config?: Config): any;
    function samp(attr: Attributes, config?: Config): any;
    function samp(value?: Primitive, config?: Config): any;
    function samp(config?: Config): any;


    function small(attr: Attributes, value: Primitive, config?: Config): any;
    function small(attr: Attributes, config?: Config): any;
    function small(value?: Primitive, config?: Config): any;
    function small(config?: Config): any;


    function span(attr: Attributes, value: Primitive, config?: Config): any;
    function span(attr: Attributes, config?: Config): any;
    function span(value?: Primitive, config?: Config): any;
    function span(config?: Config): any;


    function strong(attr: Attributes, value: Primitive, config?: Config): any;
    function strong(attr: Attributes, config?: Config): any;
    function strong(value?: Primitive, config?: Config): any;
    function strong(config?: Config): any;


    function sub(attr: Attributes, value: Primitive, config?: Config): any;
    function sub(attr: Attributes, config?: Config): any;
    function sub(value?: Primitive, config?: Config): any;
    function sub(config?: Config): any;


    function sup(attr: Attributes, value: Primitive, config?: Config): any;
    function sup(attr: Attributes, config?: Config): any;
    function sup(value?: Primitive, config?: Config): any;
    function sup(config?: Config): any;


    function time(attr: Attributes, value: Primitive, config?: Config): any;
    function time(attr: Attributes, config?: Config): any;
    function time(value?: Primitive, config?: Config): any;
    function time(config?: Config): any;


    function tt(attr: Attributes, value: Primitive, config?: Config): any;
    function tt(attr: Attributes, config?: Config): any;
    function tt(value?: Primitive, config?: Config): any;
    function tt(config?: Config): any;


    function u(attr: Attributes, value: Primitive, config?: Config): any;
    function u(attr: Attributes, config?: Config): any;
    function u(value?: Primitive, config?: Config): any;
    function u(config?: Config): any;


    function wbr(attr: Attributes, value: Primitive, config?: Config): any;
    function wbr(attr: Attributes, config?: Config): any;
    function wbr(value?: Primitive, config?: Config): any;
    function wbr(config?: Config): any;


    function area(attr: Attributes, value: Primitive, config?: Config): any;
    function area(attr: Attributes, config?: Config): any;
    function area(value?: Primitive, config?: Config): any;
    function area(config?: Config): any;


    function audio(attr: Attributes, value: Primitive, config?: Config): any;
    function audio(attr: Attributes, config?: Config): any;
    function audio(value?: Primitive, config?: Config): any;
    function audio(config?: Config): any;


    function img(attr: Attributes, value: Primitive, config?: Config): any;
    function img(attr: Attributes, config?: Config): any;
    function img(value?: Primitive, config?: Config): any;
    function img(config?: Config): any;


    function map(attr: Attributes, value: Primitive, config?: Config): any;
    function map(attr: Attributes, config?: Config): any;
    function map(value?: Primitive, config?: Config): any;
    function map(config?: Config): any;


    function track(attr: Attributes, value: Primitive, config?: Config): any;
    function track(attr: Attributes, config?: Config): any;
    function track(value?: Primitive, config?: Config): any;
    function track(config?: Config): any;


    function video(attr: Attributes, value: Primitive, config?: Config): any;
    function video(attr: Attributes, config?: Config): any;
    function video(value?: Primitive, config?: Config): any;
    function video(config?: Config): any;


    function applet(attr: Attributes, value: Primitive, config?: Config): any;
    function applet(attr: Attributes, config?: Config): any;
    function applet(value?: Primitive, config?: Config): any;
    function applet(config?: Config): any;


    function embed(attr: Attributes, value: Primitive, config?: Config): any;
    function embed(attr: Attributes, config?: Config): any;
    function embed(value?: Primitive, config?: Config): any;
    function embed(config?: Config): any;


    function iframe(attr: Attributes, value: Primitive, config?: Config): any;
    function iframe(attr: Attributes, config?: Config): any;
    function iframe(value?: Primitive, config?: Config): any;
    function iframe(config?: Config): any;


    function noembed(attr: Attributes, value: Primitive, config?: Config): any;
    function noembed(attr: Attributes, config?: Config): any;
    function noembed(value?: Primitive, config?: Config): any;
    function noembed(config?: Config): any;


    function object(attr: Attributes, value: Primitive, config?: Config): any;
    function object(attr: Attributes, config?: Config): any;
    function object(value?: Primitive, config?: Config): any;
    function object(config?: Config): any;


    function param(attr: Attributes, value: Primitive, config?: Config): any;
    function param(attr: Attributes, config?: Config): any;
    function param(value?: Primitive, config?: Config): any;
    function param(config?: Config): any;


    function picture(attr: Attributes, value: Primitive, config?: Config): any;
    function picture(attr: Attributes, config?: Config): any;
    function picture(value?: Primitive, config?: Config): any;
    function picture(config?: Config): any;


    function source(attr: Attributes, value: Primitive, config?: Config): any;
    function source(attr: Attributes, config?: Config): any;
    function source(value?: Primitive, config?: Config): any;
    function source(config?: Config): any;


    function canvas(attr: Attributes, value: Primitive, config?: Config): any;
    function canvas(attr: Attributes, config?: Config): any;
    function canvas(value?: Primitive, config?: Config): any;
    function canvas(config?: Config): any;


    function noscript(attr: Attributes, value: Primitive, config?: Config): any;
    function noscript(attr: Attributes, config?: Config): any;
    function noscript(value?: Primitive, config?: Config): any;
    function noscript(config?: Config): any;


    function script(attr: Attributes, value: Primitive, config?: Config): any;
    function script(attr: Attributes, config?: Config): any;
    function script(value?: Primitive, config?: Config): any;
    function script(config?: Config): any;


    function del(attr: Attributes, value: Primitive, config?: Config): any;
    function del(attr: Attributes, config?: Config): any;
    function del(value?: Primitive, config?: Config): any;
    function del(config?: Config): any;


    function ins(attr: Attributes, value: Primitive, config?: Config): any;
    function ins(attr: Attributes, config?: Config): any;
    function ins(value?: Primitive, config?: Config): any;
    function ins(config?: Config): any;


    function caption(attr: Attributes, value: Primitive, config?: Config): any;
    function caption(attr: Attributes, config?: Config): any;
    function caption(value?: Primitive, config?: Config): any;
    function caption(config?: Config): any;


    function col(attr: Attributes, value: Primitive, config?: Config): any;
    function col(attr: Attributes, config?: Config): any;
    function col(value?: Primitive, config?: Config): any;
    function col(config?: Config): any;


    function colgroup(attr: Attributes, value: Primitive, config?: Config): any;
    function colgroup(attr: Attributes, config?: Config): any;
    function colgroup(value?: Primitive, config?: Config): any;
    function colgroup(config?: Config): any;


    function table(attr: Attributes, value: Primitive, config?: Config): any;
    function table(attr: Attributes, config?: Config): any;
    function table(value?: Primitive, config?: Config): any;
    function table(config?: Config): any;


    function tbody(attr: Attributes, value: Primitive, config?: Config): any;
    function tbody(attr: Attributes, config?: Config): any;
    function tbody(value?: Primitive, config?: Config): any;
    function tbody(config?: Config): any;


    function td(attr: Attributes, value: Primitive, config?: Config): any;
    function td(attr: Attributes, config?: Config): any;
    function td(value?: Primitive, config?: Config): any;
    function td(config?: Config): any;


    function tfoot(attr: Attributes, value: Primitive, config?: Config): any;
    function tfoot(attr: Attributes, config?: Config): any;
    function tfoot(value?: Primitive, config?: Config): any;
    function tfoot(config?: Config): any;


    function th(attr: Attributes, value: Primitive, config?: Config): any;
    function th(attr: Attributes, config?: Config): any;
    function th(value?: Primitive, config?: Config): any;
    function th(config?: Config): any;


    function thead(attr: Attributes, value: Primitive, config?: Config): any;
    function thead(attr: Attributes, config?: Config): any;
    function thead(value?: Primitive, config?: Config): any;
    function thead(config?: Config): any;


    function tr(attr: Attributes, value: Primitive, config?: Config): any;
    function tr(attr: Attributes, config?: Config): any;
    function tr(value?: Primitive, config?: Config): any;
    function tr(config?: Config): any;


    function button(attr: Attributes, value: Primitive, config?: Config): any;
    function button(attr: Attributes, config?: Config): any;
    function button(value?: Primitive, config?: Config): any;
    function button(config?: Config): any;


    function datalist(attr: Attributes, value: Primitive, config?: Config): any;
    function datalist(attr: Attributes, config?: Config): any;
    function datalist(value?: Primitive, config?: Config): any;
    function datalist(config?: Config): any;


    function fieldset(attr: Attributes, value: Primitive, config?: Config): any;
    function fieldset(attr: Attributes, config?: Config): any;
    function fieldset(value?: Primitive, config?: Config): any;
    function fieldset(config?: Config): any;


    function form(attr: Attributes, value: Primitive, config?: Config): any;
    function form(attr: Attributes, config?: Config): any;
    function form(value?: Primitive, config?: Config): any;
    function form(config?: Config): any;


    function input(attr: Attributes, value: Primitive, config?: Config): any;
    function input(attr: Attributes, config?: Config): any;
    function input(value?: Primitive, config?: Config): any;
    function input(config?: Config): any;


    function label(attr: Attributes, value: Primitive, config?: Config): any;
    function label(attr: Attributes, config?: Config): any;
    function label(value?: Primitive, config?: Config): any;
    function label(config?: Config): any;


    function legend(attr: Attributes, value: Primitive, config?: Config): any;
    function legend(attr: Attributes, config?: Config): any;
    function legend(value?: Primitive, config?: Config): any;
    function legend(config?: Config): any;


    function meter(attr: Attributes, value: Primitive, config?: Config): any;
    function meter(attr: Attributes, config?: Config): any;
    function meter(value?: Primitive, config?: Config): any;
    function meter(config?: Config): any;


    function optgroup(attr: Attributes, value: Primitive, config?: Config): any;
    function optgroup(attr: Attributes, config?: Config): any;
    function optgroup(value?: Primitive, config?: Config): any;
    function optgroup(config?: Config): any;


    function option(attr: Attributes, value: Primitive, config?: Config): any;
    function option(attr: Attributes, config?: Config): any;
    function option(value?: Primitive, config?: Config): any;
    function option(config?: Config): any;


    function output(attr: Attributes, value: Primitive, config?: Config): any;
    function output(attr: Attributes, config?: Config): any;
    function output(value?: Primitive, config?: Config): any;
    function output(config?: Config): any;


    function progress(attr: Attributes, value: Primitive, config?: Config): any;
    function progress(attr: Attributes, config?: Config): any;
    function progress(value?: Primitive, config?: Config): any;
    function progress(config?: Config): any;


    function select(attr: Attributes, value: Primitive, config?: Config): any;
    function select(attr: Attributes, config?: Config): any;
    function select(value?: Primitive, config?: Config): any;
    function select(config?: Config): any;


    function textarea(attr: Attributes, value: Primitive, config?: Config): any;
    function textarea(attr: Attributes, config?: Config): any;
    function textarea(value?: Primitive, config?: Config): any;
    function textarea(config?: Config): any;


    function details(attr: Attributes, value: Primitive, config?: Config): any;
    function details(attr: Attributes, config?: Config): any;
    function details(value?: Primitive, config?: Config): any;
    function details(config?: Config): any;


    function dialog(attr: Attributes, value: Primitive, config?: Config): any;
    function dialog(attr: Attributes, config?: Config): any;
    function dialog(value?: Primitive, config?: Config): any;
    function dialog(config?: Config): any;


    function menu(attr: Attributes, value: Primitive, config?: Config): any;
    function menu(attr: Attributes, config?: Config): any;
    function menu(value?: Primitive, config?: Config): any;
    function menu(config?: Config): any;


    function menuitem(attr: Attributes, value: Primitive, config?: Config): any;
    function menuitem(attr: Attributes, config?: Config): any;
    function menuitem(value?: Primitive, config?: Config): any;
    function menuitem(config?: Config): any;


    function summary(attr: Attributes, value: Primitive, config?: Config): any;
    function summary(attr: Attributes, config?: Config): any;
    function summary(value?: Primitive, config?: Config): any;
    function summary(config?: Config): any;


    function content(attr: Attributes, value: Primitive, config?: Config): any;
    function content(attr: Attributes, config?: Config): any;
    function content(value?: Primitive, config?: Config): any;
    function content(config?: Config): any;


    function element(attr: Attributes, value: Primitive, config?: Config): any;
    function element(attr: Attributes, config?: Config): any;
    function element(value?: Primitive, config?: Config): any;
    function element(config?: Config): any;


    function shadow(attr: Attributes, value: Primitive, config?: Config): any;
    function shadow(attr: Attributes, config?: Config): any;
    function shadow(value?: Primitive, config?: Config): any;
    function shadow(config?: Config): any;


    function slot(attr: Attributes, value: Primitive, config?: Config): any;
    function slot(attr: Attributes, config?: Config): any;
    function slot(value?: Primitive, config?: Config): any;
    function slot(config?: Config): any;


    function template(attr: Attributes, value: Primitive, config?: Config): any;
    function template(attr: Attributes, config?: Config): any;
    function template(value?: Primitive, config?: Config): any;
    function template(config?: Config): any;


    function acronym(attr: Attributes, value: Primitive, config?: Config): any;
    function acronym(attr: Attributes, config?: Config): any;
    function acronym(value?: Primitive, config?: Config): any;
    function acronym(config?: Config): any;


    function applet(attr: Attributes, value: Primitive, config?: Config): any;
    function applet(attr: Attributes, config?: Config): any;
    function applet(value?: Primitive, config?: Config): any;
    function applet(config?: Config): any;


    function basefont(attr: Attributes, value: Primitive, config?: Config): any;
    function basefont(attr: Attributes, config?: Config): any;
    function basefont(value?: Primitive, config?: Config): any;
    function basefont(config?: Config): any;


    function bgsound(attr: Attributes, value: Primitive, config?: Config): any;
    function bgsound(attr: Attributes, config?: Config): any;
    function bgsound(value?: Primitive, config?: Config): any;
    function bgsound(config?: Config): any;


    function big(attr: Attributes, value: Primitive, config?: Config): any;
    function big(attr: Attributes, config?: Config): any;
    function big(value?: Primitive, config?: Config): any;
    function big(config?: Config): any;


    function blink(attr: Attributes, value: Primitive, config?: Config): any;
    function blink(attr: Attributes, config?: Config): any;
    function blink(value?: Primitive, config?: Config): any;
    function blink(config?: Config): any;


    function center(attr: Attributes, value: Primitive, config?: Config): any;
    function center(attr: Attributes, config?: Config): any;
    function center(value?: Primitive, config?: Config): any;
    function center(config?: Config): any;


    function command(attr: Attributes, value: Primitive, config?: Config): any;
    function command(attr: Attributes, config?: Config): any;
    function command(value?: Primitive, config?: Config): any;
    function command(config?: Config): any;


    function content(attr: Attributes, value: Primitive, config?: Config): any;
    function content(attr: Attributes, config?: Config): any;
    function content(value?: Primitive, config?: Config): any;
    function content(config?: Config): any;


    function dir(attr: Attributes, value: Primitive, config?: Config): any;
    function dir(attr: Attributes, config?: Config): any;
    function dir(value?: Primitive, config?: Config): any;
    function dir(config?: Config): any;


    function element(attr: Attributes, value: Primitive, config?: Config): any;
    function element(attr: Attributes, config?: Config): any;
    function element(value?: Primitive, config?: Config): any;
    function element(config?: Config): any;


    function font(attr: Attributes, value: Primitive, config?: Config): any;
    function font(attr: Attributes, config?: Config): any;
    function font(value?: Primitive, config?: Config): any;
    function font(config?: Config): any;


    function frame(attr: Attributes, value: Primitive, config?: Config): any;
    function frame(attr: Attributes, config?: Config): any;
    function frame(value?: Primitive, config?: Config): any;
    function frame(config?: Config): any;


    function frameset(attr: Attributes, value: Primitive, config?: Config): any;
    function frameset(attr: Attributes, config?: Config): any;
    function frameset(value?: Primitive, config?: Config): any;
    function frameset(config?: Config): any;


    function image(attr: Attributes, value: Primitive, config?: Config): any;
    function image(attr: Attributes, config?: Config): any;
    function image(value?: Primitive, config?: Config): any;
    function image(config?: Config): any;


    function isindex(attr: Attributes, value: Primitive, config?: Config): any;
    function isindex(attr: Attributes, config?: Config): any;
    function isindex(value?: Primitive, config?: Config): any;
    function isindex(config?: Config): any;


    function keygen(attr: Attributes, value: Primitive, config?: Config): any;
    function keygen(attr: Attributes, config?: Config): any;
    function keygen(value?: Primitive, config?: Config): any;
    function keygen(config?: Config): any;


    function listing(attr: Attributes, value: Primitive, config?: Config): any;
    function listing(attr: Attributes, config?: Config): any;
    function listing(value?: Primitive, config?: Config): any;
    function listing(config?: Config): any;


    function marquee(attr: Attributes, value: Primitive, config?: Config): any;
    function marquee(attr: Attributes, config?: Config): any;
    function marquee(value?: Primitive, config?: Config): any;
    function marquee(config?: Config): any;


    function menuitem(attr: Attributes, value: Primitive, config?: Config): any;
    function menuitem(attr: Attributes, config?: Config): any;
    function menuitem(value?: Primitive, config?: Config): any;
    function menuitem(config?: Config): any;


    function multicol(attr: Attributes, value: Primitive, config?: Config): any;
    function multicol(attr: Attributes, config?: Config): any;
    function multicol(value?: Primitive, config?: Config): any;
    function multicol(config?: Config): any;


    function nextid(attr: Attributes, value: Primitive, config?: Config): any;
    function nextid(attr: Attributes, config?: Config): any;
    function nextid(value?: Primitive, config?: Config): any;
    function nextid(config?: Config): any;


    function nobr(attr: Attributes, value: Primitive, config?: Config): any;
    function nobr(attr: Attributes, config?: Config): any;
    function nobr(value?: Primitive, config?: Config): any;
    function nobr(config?: Config): any;


    function noembed(attr: Attributes, value: Primitive, config?: Config): any;
    function noembed(attr: Attributes, config?: Config): any;
    function noembed(value?: Primitive, config?: Config): any;
    function noembed(config?: Config): any;


    function noframes(attr: Attributes, value: Primitive, config?: Config): any;
    function noframes(attr: Attributes, config?: Config): any;
    function noframes(value?: Primitive, config?: Config): any;
    function noframes(config?: Config): any;


    function plaintext(attr: Attributes, value: Primitive,
        config?: Config): any;
    function plaintext(attr: Attributes, config?: Config): any;
    function plaintext(value?: Primitive, config?: Config): any;
    function plaintext(config?: Config): any;


    function shadow(attr: Attributes, value: Primitive, config?: Config): any;
    function shadow(attr: Attributes, config?: Config): any;
    function shadow(value?: Primitive, config?: Config): any;
    function shadow(config?: Config): any;


    function spacer(attr: Attributes, value: Primitive, config?: Config): any;
    function spacer(attr: Attributes, config?: Config): any;
    function spacer(value?: Primitive, config?: Config): any;
    function spacer(config?: Config): any;


    function strike(attr: Attributes, value: Primitive, config?: Config): any;
    function strike(attr: Attributes, config?: Config): any;
    function strike(value?: Primitive, config?: Config): any;
    function strike(config?: Config): any;


    function tt(attr: Attributes, value: Primitive, config?: Config): any;
    function tt(attr: Attributes, config?: Config): any;
    function tt(value?: Primitive, config?: Config): any;
    function tt(config?: Config): any;


    function xmp(attr: Attributes, value: Primitive, config?: Config): any;
    function xmp(attr: Attributes, config?: Config): any;
    function xmp(value?: Primitive, config?: Config): any;
    function xmp(config?: Config): any;


    function area(attr: Attributes, value: Primitive, config?: Config): any;
    function area(attr: Attributes, config?: Config): any;
    function area(value?: Primitive, config?: Config): any;
    function area(config?: Config): any;


    function audio(attr: Attributes, value: Primitive, config?: Config): any;
    function audio(attr: Attributes, config?: Config): any;
    function audio(value?: Primitive, config?: Config): any;
    function audio(config?: Config): any;


    function img(attr: Attributes, value: Primitive, config?: Config): any;
    function img(attr: Attributes, config?: Config): any;
    function img(value?: Primitive, config?: Config): any;
    function img(config?: Config): any;


    function map(attr: Attributes, value: Primitive, config?: Config): any;
    function map(attr: Attributes, config?: Config): any;
    function map(value?: Primitive, config?: Config): any;
    function map(config?: Config): any;


    function track(attr: Attributes, value: Primitive, config?: Config): any;
    function track(attr: Attributes, config?: Config): any;
    function track(value?: Primitive, config?: Config): any;
    function track(config?: Config): any;


    function video(attr: Attributes, value: Primitive, config?: Config): any;
    function video(attr: Attributes, config?: Config): any;
    function video(value?: Primitive, config?: Config): any;
    function video(config?: Config): any;


}

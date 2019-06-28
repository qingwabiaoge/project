
import theme from '../theme'
import {injectGlobal} from 'vue-styled-components'

injectGlobal` 

*, *:before,
*:after {
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */

}

*.active,
*:hover,
  /*当链接被聚焦时*/
*:focus {
  outline: @global-color-primary;
}

html {
  /* 1 */
  font-family:${theme.font_family};
  font-size: ${theme.font_size};
  line-height:${theme.line_height};

  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 3 */
  background: ${theme.color_white};
  color: ${theme.color_gray};
  &:after { //兼容移动端的fix背景
    content: ' ';
    position: fixed;
    z-index: -1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

}



body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
}


a{
  color: ${theme.color_gray_dark};
  text-decoration: none;
  cursor: pointer;
}

a:hover,
a.active,
a:hover>*,
a.active>*
{

  color: ${theme.color_primary};
  text-decoration: none;

}

p {
  //margin: 0 0 @base-margin-vertical 0;
  margin: 0;
}

* + p {
  //margin-top: @base-margin-vertical;
}

audio,
canvas,
img,
svg,
video {
  vertical-align: middle;
  /* 1 */
  max-width: 100%; //响应式不得超过父窗口
  /* 2 */
  height: auto;
  /* 3 */
  box-sizing: border-box;
}


img:not([src]) {
  visibility: hidden;
}

svg {
  fill: currentColor;
}

svg:not(:root) {
  overflow: hidden;
}

//img[src$="jpg"] {
//  background: data-uri() no-repeat center;
//}

/* Lists
 ========================================================================== */

ul > li > ul,
ul > li > ol,
ol > li > ol,
ol > li > ul {
  margin: 0;
}

/* Description lists
 ========================================================================== */

dt {
  font-weight: bold;
}

dd {
  margin-left: 0;
}

hr, .uk-hr {
  /* 1 */
  box-sizing: content-box;
  height: 0;
  /* 2 */
  overflow: visible;
  /* 3 */
  text-align: inherit;
  /* 4 */
  margin: 0 0 20px 0;
  border: 0;
  border-top: 1px solid #eee;

}


* + hr,
* + .uk-hr {
  margin-top: @base-hr-margin-vertical
}


abbr[title] {
  /* 1 */
  border-bottom: none;
  /* 2 */
  text-decoration: underline dotted;
}


b,
strong {
  font-weight: @base-strong-font-weight !important;
  color: @global-color-gray-dark !important;
}

em {
  color: @base-em-color;
}


ins {
  background: @base-ins-background;
  color: @base-ins-color;
  text-decoration: none;
}



mark {
  background: @base-mark-background;
  color: @base-mark-color;
}



small {
  font-size: @base-small-font-size;
}



i, .uk-i {
  color: @global-color-gray-dark;
  font-style: italic;
}


q {
  font-style: @base-quote-font-style;
}


blockquote {
  margin: 0 0 @base-blockquote-margin-vertical 0;
  font-size: @base-blockquote-font-size;
  line-height: @base-blockquote-line-height;
  font-style: @base-blockquote-font-style;
  padding: @global-gutter;
  border-left: 5px solid @global-color-gray-lighter;
  background: #fff;

}


* + blockquote {
  margin-top: @base-blockquote-margin-vertical;
}

blockquote p:last-of-type {
  margin-bottom: 0;
}

blockquote footer {
  margin-top: @base-blockquote-footer-margin-top;
  font-size: @base-blockquote-footer-font-size;
  line-height: @base-blockquote-footer-line-height;
  text-align: right;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}


.uk-inverse, .uk-hover-inverse:hover {
  background: #000;
  color: #ccc;
  h1, h2, h3, b, i {
    color: white!important;
  }
  h4, h5, h6, p, ul, li, div, a, .uk-link {
    color: #ccc;
  }
  a:hover,
  .uk-link:hover,
  a.active {
    color: @global-color-primary;
  }
}

article, .article {
  * + audio,
  * + canvas,
    //* + img,
  * + video {
    margin-top: @base-margin-vertical
  }
  p,
  ul,
  ol,
  dl,
  pre,
  address,
  fieldset,
  figure {
    margin: 0 0 @base-margin-vertical 0;
  }

  /* Add margin if adjacent element */
  * + p,
  * + ul,
  * + ol,
  * + dl,
  * + pre,
  * + address,
  * + fieldset,
  * + figure {
    margin-top: @base-margin-vertical;
  }


  h1, .uk-h1,
  h2, .uk-h2,
  h3, .uk-h3,
  h4, .uk-h4,
  h5, .uk-h5,
  h6, .uk-h6 {
    margin: 0 0 @base-margin-vertical 0;
    font-family: @base-heading-font-family;
    font-weight: @base-heading-font-weight;
    color: @base-heading-color;
    text-transform: @base-heading-text-transform;

  }

  /* Add margin if adjacent element */
  * + h1, * + .uk-h1,
  * + h2, * + .uk-h2,
  * + h3, * + .uk-h3,
  * + h4, * + .uk-h4,
  * + h5, * + .uk-h5,
  * + h6, * + .uk-h6 {
    margin-top: @base-heading-margin-top;
  }

  /*
   * Sizes
   */

  h1, .uk-h1 {
    font-size: @base-h1-font-size;
    line-height: @base-h1-line-height;

  }

  h2, .uk-h2 {
    font-size: @base-h2-font-size;
    line-height: @base-h2-line-height;

  }

  h3, .uk-h3 {
    font-size: @base-h3-font-size;
    line-height: @base-h3-line-height;

  }

  h4, .uk-h4 {
    font-size: @base-h4-font-size;
    line-height: @base-h4-line-height;

  }

  h5, .uk-h5 {
    font-size: @base-h5-font-size;
    line-height: @base-h5-line-height;

  }

  h6, .uk-h6 {
    font-size: @base-h6-font-size;
    line-height: @base-h6-line-height;

  }

  /* Tablet landscape and bigger */
  @media (min-width: @global-breakpoint-tablet) {

    h1, .uk-h1 {
      font-size: @base-h1-font-size-m;
    }

    h2, .uk-h2 {
      font-size: @base-h2-font-size-m;
    }

  }



  ul,
  ol {
    padding-left: @base-list-padding-left;
  }
  ul > li > ul,
  ul > li > ol,
  ol > li > ol,
  ol > li > ul {
    margin: 0;
  }


}

/*---------------------- 滚动条-----------------*/
/*定义滚动条高宽及背景 高宽分别对应 横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #Fff;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 0px;
  background-color: #eee;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: @global-color-gray-lighter;
}

::-moz-selection {
  background: @base-selection-background;
  color: @base-selection-color;
  text-shadow: none;
}

::selection {
  background: @base-selection-background;
  color: @base-selection-color;
  text-shadow: none;
}

`
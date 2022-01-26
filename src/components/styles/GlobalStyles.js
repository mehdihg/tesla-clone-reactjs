import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --main: #393c41;
  --nav: #181b21;

}
*{
	box-sizing:border-box;
}
#home{
	overflow-x: hidden;
}

@font-face {
	font-family:'gotham-medium' ;
	src: local("GothamMedium"),
 	url("./Gotham-font/GothamMedium.ttf") format("truetype");

}
@font-face {
	font-family:'gotham-book' ;
	src: local("GothamBook"),
 	url("./Gotham-font/GothamBook.ttf") format("truetype");
}
@font-face {
	font-family:'gotham-light' ;
	src: local("GothamLight"),
 	url("./Gotham-font/GothamLight.ttf") format("truetype");
}
@font-face {
	font-family:'gotham-ssm' ;
	src: local("GothamSSm"),
 	url("./Gotham-font/GothamSSm.otf") format("truetype");
}
@keyframes animateDown{
	0%,20%,60%,80%,100%{
		transform: translateY(0);
	}
	40%{
		transform:translateY(5px)
	}
	60%{
		transform:translateY(3px)
	}
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;

	font: inherit;
	vertical-align: baseline;
	font-family: 'Rubik', sans-serif;

	
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
	overflow-x: hidden;

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a{
	text-decoration: none;
}

`;
export default GlobalStyles;

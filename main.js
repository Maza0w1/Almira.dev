/* Background animation
body{
    background-image: url('https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVNITEphR2s1alQ1bGNOSzZaSGNvdDhrSGhEd3xBQ3Jtc0trVGtfcjZtUG95bENfaEpDZUdKeFg1RXppQ1phdHRqTHVwc200RkRpekphRUJQdjZwVV9xNGs3VHZWRHZnMHg2bE1Da2NOU3UxcWVqcjhoTXNsWFdUSlhyWGlWUFZvT0FlSE5aWWptdC02UEJRUWZIMA&q=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F79%2Fa3%2F84%2F79a384c3c449ad01b0e57e790807b2c0.gif');
    background-size: cover;
    
    
    
    height: 100vh;
    padding:0;
    margin:0;
}
*/

/*Main Section-*/
#main {
    width: 100%;
    height: 100vh;
    background: url("https://wallpaperaccess.com/full/5985690.jpg") top center;
    background-size: cover;
    position: relative;
    margin-bottom: -72px;
  }
    @media (max-width: 992px) {
    #main {
      margin-bottom: -58px;
    }
  }
  
  /*
  #main:before {
    content: "";
    background: rgba(21, 5, 23, 0.5) linear-gradient(rgba(26, 0, 33, 0.5) 0%, rgba(26, 0, 33, 0.5) 5%, rgba(38, 6, 51, 0.5) 40%, rgba(47, 147, 147, 0.7) 76%, rgba(169, 243, 231, 0.7) 94%, rgba(93, 236, 205, 0.5) 100%) repeat scroll 0% 0%;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  */
  
  #main .main-container {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 15px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  
  #main h1 {
    margin-left: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    text-transform: uppercase;
    color: #fff;
  }
  
  #main h2 {
    color: #eee;
    margin: 15px 0 0 0;
    font-size: 24px;
  }
  
  #main .main-btn {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 40px;
    border-radius: 4px;
    transition: 0.5s;
    margin-top: 30px;
    border: 2px solid #fff;
    color: #fff;
  }
  
  #main .main-btn:hover {
    background: rgba(#000) 76%;
    border: 2px solid #fff;
  }
  
  @media (min-width: 1024px) {
    #main {
      background-attachment: fixed;
    }
  }
  
  @media (max-width: 768px) {
    #main h1 {
      font-size: 30px;
      line-height: 36px;
    }
    #main h2 {
      font-size: 18px;
      line-height: 24px;
    }
  }
  /*==============Nav=====*/
  #navigation {
	background-color: #000000;
    padding: 20px 40px;
    z-index: 100;
    width: 100%;
}

#navigation li {
	padding: 0 10px;
}

#navigation li a {
	color: #fff;
}

.navbar-brand,
.navbar-brand:hover {
    color: #fff;
    font-weight: bold;
}
/*-
# Header Social Link------*/
.header-social-links {
  padding-left: 20px;
}

.header-social-links a {
  color: #fff;
  padding-left: 6px;
  display: inline-block;
  line-height: 1px;
  transition: 0.3s;
}

.header-social-links a:hover {
  color: #57cf57;
}

@media (max-width: 768px) {
  .header-social-links {
    padding: 0 48px 0 0;
  }
}

.navbar-toggler i {
color: #fff;
}
.navbar-toggler{
    outline: none!important;
}

.fixedNav #navigation {
	position: fixed;
	top: 0;
}
  /*========== end of Navbar=======*/
  /*====Services Section======*/
  .services {
  padding-bottom: 30px;
}

.services .des-box {
  padding: 60px 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 30px 0 35px 0 rgba(32, 1, 73, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  text-align: center;
}

.services .des-box::before {
  content: '';
  position: absolute;
  background: #fdeff2;
  right: 0;
  left: 0;
  bottom: 0;
  top: 100%;
  transition: all 0.4s;
  z-index: -1;
}

.services .des-box:hover::before {
  background: #000000;
  top: 0;
  border-radius: 0px;
}

.services .icon {
  margin-bottom: 15px;
}

.services .icon i {
  font-size: 48px;
  line-height: 1;
  color: #32CD32;
  transition: all 0.3s ease-in-out;
}

.services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.services .title a {
  color: #111;
}

.services .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}

.services .des-box:hover .title a, .services .des-box:hover .description {
  color: #fff;
}

.services .des-box:hover .icon i {
  color: #fff;
}
/*========end of Services ========*/
/* Counter project style starts*/
.project
{
  background-image: url(https://wallpaperaccess.com/full/5985690.jpg);
  background-position: center;
  padding-top: 180px;
  padding-bottom: 200px;
  color: white;
  background-attachment: fixed;
  margin-top: 100px;
  
}

.project i
{
    font-size: 85px;
    
}
 
.project-items h2
{
    font-weight: bolder;
    font-size: 42px;
    color: #fff;
}
.project p
{
    font-weight: bold;
    letter-spacing: 1px;
}
/*=======================================
        Counter project style Ends
=========================================*/
  /*====Gallery====*/
/*
  .gallery-list-item {
    color: #000;
    cursor: pointer;
    user-select: none;
  }
  .active-item {
    color: #32CD32;
  }
  .bd-grid{
    max-width: 1024px;
    position: center;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width: calc(100% - 2rem);
    margin-left: 10rem;;
    margin-right: 10rem;
  }
  .gallery-image-wrapper{
    row-gap: 2rem;
  }
  .gallery-image-wrapper{
    box-shadow: 0 4px 25px rgba(14,36,49,.15);
    border-radius: .5rem;
    overflow: hidden;
  }
  .gallery-image-wrapper img{
    transition: 1s;
    cursor: pointer;
  }
  .gallery-image-wrapper img:hover{
    transform: scale(1.1);
  }
 
/*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/

.wrapper{
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.wrapper .box{
  background: #fff;
  width: calc(33% - 10px);
  padding: 25px;
  border-radius: 3px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
}
.wrapper .box i.quote{
  font-size: 20px;
  color: #32cd32;
}
.wrapper .box .content{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}
.box .info .name{
  font-weight: 600;
  font-size: 17px;
}
.box .info .job{
  font-size: 16px;
  font-weight: 500;
  color: #32cd32;
}
.box .info .stars{
  margin-top: 2px;
}
.box .info .stars i{
  color: #32CD32;
}
.box .content .image{
  height: 75px;
  width: 75px;
  padding: 3px;
  background: #32CD32;
  border-radius: 50%;
}
.content .image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
}
.box:hover .content .image img{
  border-color: #fff;
}
@media (max-width: 1045px) {
  .wrapper .box{
    width: calc(50% - 10px);
    margin: 10px 0;
  }
}
@media (max-width: 702px) {
  .wrapper .box{
    width: 100%;
  }
}

/*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
.section-bg{
  background-image: url(https://wallpaperaccess.com/full/5985690.jpg);
  /*background-position: center;*/
  color: white;
  background-attachment: fixed;
  margin-top: 100px;
}

.team .member {
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(32, 1, 73, 0.12);
}

.team .member .member-img {
  position: relative;
  overflow: hidden;
}

.team .member .social {
  position: absolute;
  left: 0;
  bottom: 30px;
  right: 0;
  opacity: 0;
  transition: ease-in-out 0.3s;
  text-align: center;
}

.team .member .social a {
  transition: color 0.3s;
  color: #32CD32;
  margin: 0 3px;
  padding-top: 7px;
  border-radius: 50px;
  width: 36px;
  height: 36px;
  background: rgba(rgba(#32CD32));
  display: inline-block;
  transition: ease-in-out 0.3s;
  color: #32CD32;
}

.team .member .social a:hover {
  background: #000000;
}

.team .member .social i {
  font-size: 18px;
}

.team .member .member-info {
  padding: 25px 15px;
}

.team .member .member-info h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 18px;
  color: #000;
}

.team .member .member-info span {
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: #000;
}

.team .member .member-info p {
  font-style: italic;
  font-size: 14px;
  line-height: 26px;
  color: #aaaa;
}

.team .member:hover .social {
  opacity: 1;
  bottom: 15px;
}

 /*--------------------------------------------------------------
# Contact Us
--------------------------------------------------------------*/
.contact-section{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info{
 color: #32CD32;
 max-width: 500px;
 line-height: 65px;
 padding-left: 50px;
 font-size: 18px;
}

.contact-info{
  margin-left: 20px;
  font-size: 25px;
}

.contact-form{
  max-width: 700px;
  margin-right: 50px;
}

.contact-info, .contact-form{
  flex: 1;
}

.contact-form h2{
  color: #fff;
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  margin-top: 30px;

}

.contact-form .text-box{
  background: #000;
  color: #fff;
  border: none;
  width: calc(50% - 10 px);
  height: 50px;
  padding: 12 px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; 
  opacity: 0.9;
}

.contact-form .text-box:first-child{
  margin-right: 15px;
}

.contact-form textarea{
  background: #000;
  color: #fff;
  border: none;
  width: 100%;
  padding: 12px;
  font-size: 15px;
  min-height: 200px;
  max-height: 400px;
  resize: vertical;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  opacity: 0.9;
}

.contact-form .send-btn{
  float:right;
  background: #32CD32;
  color: #fff;
  border: none;
  width:120px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  transition-property: #32CD32;

}

.contact-form .send-btn:hover{
  background: #57cf57
}

@media  screen and (max-width: 950px){
  .contact-section{
    flex-direction: column;
  }

  .contact-info .contact-form{
    margin: 30px 50px;
  }
  .contact-form h2{
    font-size: 30px;
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 80px 0; 
  }

  .contact-form .text-box{
    width: 100%;
  }  
}

 /*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/

#footer .footer-top {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 80px 0;
}

#footer .footer-top h3 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  position: relative;
  padding-bottom: 0;
  margin-bottom: 0;
}

#footer .footer-top p {
  font-size: 15;
  font-style: italic;
  margin: 30px 0 0 0;
  padding: 0;
}

#footer .footer-top .footer-newsletter {
  text-align: center;
  font-size: 15px;
  margin-top: 30px;
}

#footer .footer-top .footer-newsletter form {
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
}

#footer .footer-top .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}

#footer .footer-top .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: 0;
  right: -1px;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: #000;
  color: #fff;
  transition: 0.3s;
  border-radius: 0 4px 4px 0;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#footer .footer-top .footer-newsletter form input[type="submit"]:hover {
  background: #32CD32;
}

#footer .footer-top .social-links {
  margin-top: 30px;
  
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #32CD32;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 4px;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  background: #57cf57;
  color: #fff;
  text-decoration: none;
}

#footer .footer-bottom {
  border-top: 1px solid #000000;
  z-index: 2;
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
}

#footer .copyright {
  float: left;
}

#footer .credits {
  float: right;
  font-size: 13px;
}

@media (max-width: 768px) {
  #footer .copyright, #footer .credits {
    float: none;
    text-align: center;
  }
  #footer .credits {
    padding-top: 5px;
  }
}

@import url(//fonts.googleapis.com/css?family=Montserrat:300,400,500);
.contact4 {
  font-family: "Montserrat", sans-serif;
	color: #8d97ad;
  font-weight: 300;
}

.contact4 h1, .contact4 h2, .contact4 h3, .contact4 h4, .contact4 h5, .contact4 h6 {
  color: #3e4555;
}

.contact4 .font-weight-medium {
	font-weight: 500;
}

.contact4 .form-control {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.contact4 .form-control:focus {
  border-color: #ffffff;
}

.contact4 input::-webkit-input-placeholder,
.contact4 textarea::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.contact4 input:-ms-input-placeholder,
.contact4 textarea:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.contact4 input::placeholder,
.contact4 textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.contact4 .right-image {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
}

.contact4.bg-info {
    background-color: #188ef4 !important;
}

.contact4 .text-inverse {
    color: #3e4555 !important;
}

@media (min-width: 1024px) {
	.contact4 .contact-box {
    padding: 80px 105px 80px 0px;
	}
}

@media (max-width: 767px) {
	.contact4 .contact-box {
    padding-left: 15px;
    padding-right: 15px;
	}
}

@media (max-width: 1023px) {
	.contact4 .right-image {
			position: relative;
			bottom: -95px;
	}
}

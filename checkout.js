/*===========================================================

   Template Name: Oxyy - Login and Register Form Html Templates
   Author: Harnish Design
   Template URL: http://demo.harnishdesign.net/html/oxyy
   Author URL: https://themeforest.net/user/harnishdesign
   File Description : Main css file of the template
	
=================================================
  Table of Contents
=================================================

	1. Basic
	2. Helpers Classes
	3. Layouts
	4  Elements
		4.1 Hero Background
		4.2 Nav
		4.3 Tabs
		4.4 Video Play button
	5 Social Icons
	6 Extra
		6.1 Form
		6.2 Form Dark
		6.3 Form Border
		6.4 Form Border Light
		6.5 Vertical Multilple input group
		6.6 Other Bootstrap Specific

=======================================================*/
/* =================================== */
/*  1. Basic Style 
/* =================================== */
body, html {
    height: 100%;
  }
  
  body {
    background: #f1f3f6;
    color: #4c4d4d;
    font-family: "Poppins", sans-serif;
  }

input{
  border-bottom: solid 2px #00000057 !important;
}

  /*-------- Preloader --------*/
  
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
  form {
    padding: 0;
    margin: 0;
    display: inline;
  }
  
  img {
    vertical-align: inherit;
  }
  
  a, a:focus {
    color: #007bff;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  
  a:hover, a:active {
    color: #006adb;
    text-decoration: none;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  
  a:focus, a:active,
  .btn:active:focus,
  .btn:focus,
  button:focus,
  button:active {
    outline: none;
  }
  
  p {
    line-height: 1.8;
  }
  
  h1, h3 {
    color: #252b33;
    font-family: "Poppins", sans-serif;
  }
  
  /* =================================== */
  /*  2. Helpers Classes
  /* =================================== */
  /* Box Shadow */
  
  /* Border Radius */
  
  /* Border Size */
  
  /* Text Size */
  .oxyy-login-register .text-2 {
    font-size: 14px !important;
    font-size: 0.875rem !important;
  }
  .oxyy-login-register .text-9 {
    font-size: 36px !important;
    font-size: 2.25rem !important;
  }
  .oxyy-login-register .text-13 {
    font-size: 3.25rem !important;
  }
  @media (max-width: 1200px) {
    .oxyy-login-register .text-13 {
      font-size: calc(1.45rem + 2.4vw)  !important;
    }
  }
   .oxyy-login-register .text-13 {
    line-height: 1.3;
  }
  
  /* Line height */
  
  /* Font Weight */
  .oxyy-login-register .font-weight-300 {
    font-weight: 300 !important;
  }
  .oxyy-login-register .font-weight-400 {
    font-weight: 400 !important;
  }
  
  /* Opacity */
  
  /* Background light */
  
  /* Background Dark */
  .oxyy-login-register hr {
    border-top: 1px solid rgba(16, 85, 96, 0.1);
  }
  
  /* =================================== */
  /*  3. Layouts
  /* =================================== */
  #main-wrapper.oxyy-login-register {
    background: #fff;
  }
  @media (min-width: 1200px) {
    .oxyy-login-register .container {
      max-width: 1170px !important;
    }
  }
  
  /* =================================== */
  /*  4. Elements
  /* =================================== */
  /*=== 4.1 Hero Background ===*/
  
  /* 4.2 Nav */
  
  /*=== 4.3 Tabs ===*/
  
  /* 4.4 Video Play button */
  
  /* =================================== */
  /*  5. Social Icons
  /* =================================== */
  
  /* =================================== */
  /*  6. Extras
  /* =================================== */
  /* 6.1 Form */
  .oxyy-login-register .form-control {
    border-color: #dae1e3;
    font-size: 16px;
    color: #656565;
  }
  .oxyy-login-register .form-control.bg-light {
    background-color: #f5f5f6 !important;
  }
  .oxyy-login-register .form-control.border-light {
    border-color: #f5f5f6 !important;
  }
  .oxyy-login-register .form-control:not(.form-control-sm) {
    padding: .810rem .96rem;
    height: inherit;
  }
  .oxyy-login-register .form-control:focus {
    -webkit-box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
    box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
    border-color: #80bdff !important;
  }
  .oxyy-login-register .form-control::-webkit-input-placeholder {
    color: #b1b4b6;
  }
  .oxyy-login-register .form-control:-moz-placeholder {
    /* FF 4-18 */
    color: #b1b4b6;
  }
  .oxyy-login-register .form-control::-moz-placeholder {
    /* FF 19+ */
    color: #b1b4b6;
  }
  .oxyy-login-register .form-control:-ms-input-placeholder, .oxyy-login-register .form-control::-ms-input-placeholder {
    /* IE 10+ */
    color: #b1b4b6;
  }
  
  /* 6.2 Form Dark */
  
  /* 6.3 Form Border (Input with only bottom border)  */
  
  /* 6.4 Form Border Light (Input with only bottom border)  */
  
  /* 6.5 Vertical Multilple input group */
  
  /* 6.6 Other Bootstrap Specific */
  .oxyy-login-register .btn {
    padding: 0.8rem 2.6rem;
    font-weight: 500;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .oxyy-login-register .btn-sm {
    padding: 0.5rem 1rem;
  }
  .oxyy-login-register .btn:not(.btn-link) {
    -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  }
  .oxyy-login-register .btn:not(.btn-link):hover {
    -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  @media (max-width: 575.98px) {
    .oxyy-login-register .btn:not(.btn-sm) {
      padding: .810rem 2rem;
    }
  }
   .oxyy-login-register .btn-link {
    color: #007bff !important;
  }
  .oxyy-login-register .btn-link:hover {
    color: #006adb !important;
  }
  
  .oxyy-login-register .custom-control-input:checked ~ .custom-control-label::before,
  .oxyy-login-register .custom-checkbox .custom-control-input:checked ~ .custom-control-label:before,
  .oxyy-login-register .custom-control-input:checked ~ .custom-control-label:before {
    background-color: #007bff;
    border-color: #007bff;
  }
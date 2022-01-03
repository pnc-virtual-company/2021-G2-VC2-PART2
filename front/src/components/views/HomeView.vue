<template>
   <v-app class="">
       <div class="home-page">
           <div class="text">
                <h1> We enable young underprivileged <br>  people to build their employability</h1>
                <h1 class="uder"> through education in the digital industry. </h1>
           </div>
        </div>
        <div class="free">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
        <br>
        <div id="box">
            <div class="show">
                <h4 id="white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4><br>
            </div>
            <div class="box-list" >
                <div id="box1" class="hvr-grow">
                    <h2 id="html">HTML/CSS</h2>
                    <span>Card subtitle<br>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                    <button type="button" class="btn" id="btn-html-color" >HTML/CSS</button>
                </div>
                <div id="box1" class="hvr-grow">
                    <h2 id="python">PYTHON</h2>
                    <span>Card subtitle<br>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                    <button type="button" class="btn" id="btn-python-color" >PYTHON</button>
                </div> 
                <div id="box1" class="hvr-grow">
                    <h2 id="java">JAVA</h2>
                    <span>Card subtitle<br>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                    <button type="button" class="btn" id="btn-java-color" >JAVA</button>
                </div>
                <div id="box1" class="hvr-grow">
                    <h2 id="javascript">JAVASCRIPT</h2>
                    <span>Card subtitle<br>Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                    <button type="button" class="btn" id="btn-javascript-color" >JAVASCRIPT</button>
                </div>
            </div>
        </div>
        <div id="service">
            <div class="service1">
                <div class="left">
                    <div id="amazon" class="hvr-float">
                        <button type="button" class="client" >Amazon</button>
                    </div>
                    <p style="text-align: center;">Mauris magna sapien,<br> pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                    <div id="lenovo" class="hvr-float">
                        <button type="button" class="client" >Lenovo</button>
                    </div>
                    <p style="text-align: center;">Mauris magna sapien,<br> pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                </div>
                <div class="right">
                    <div id="google" class="hvr-float">
                        <button type="button" class="client" >Google</button>
                    </div>
                    <p style="text-align: center;">Mauris magna sapien,<br> pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                    <div id="alphabet" class="hvr-float">
                        <button type="button" class="client" >Alphabet</button>
                    </div>
                    <p style="text-align: center;">Mauris magna sapien,<br> pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                </div>
            </div>
        </div>
        <div class="in-contact" id="contact">
            <div id="all-in-contact">
                <div id="about-us">
                    <h3 style="color: #ffff;">About us </h3>
                    <small style="color: rgb(179, 176, 176);">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Dolor nihil neque illo laudantium assumenda, non, corrupti <br> quidem error delectus atque eligendi debitis praesentium excepturi <br> enim libero veritatis doloribus impedit facilis?</small>
                </div>
                <div id="get-in-touch">
                    <h3 style="color: #ffff;">Get in Touch</h3>
                    <small style="color: rgb(179, 176, 176);">Address: Phnom Penh, Cambodia</small>
                    <small style="color: rgb(179, 176, 176);">Phone: 097 400 6649</small>
                    <small style="color: rgb(179, 176, 176);">Email: lyeden999@gmail.com</small>
                </div>
                <div id="social-media">
                    <h3 style="color: #ffff;">Social Media</h3>
                    <small style="color: rgb(179, 176, 176);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, <br> hic. Asperiores eaque iste illum eligendi,sed, nam odit et, <br> vitae accusantium ratione ducimus accusamus veritatis <br> odio aliquid nemo? Possimus, quisquam.</small>
                    <div class="social">
                        <a href="https://web.facebook.com/?_rdc=1&_rdr" target="blank"><i class="fa fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/accounts/login/" target="blank"><i class="fa fa-instagram"></i></a>
                        <a href="https://ads.twitter.com/login" target="blank"><i class="fa fa-youtube"></i></a>
                        <a href="https://www.pinterest.com/login/" target="blank"><i class="fa fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            ©Copyright designed by Lyden
        </footer>
   </v-app>
</template>

<style  scoped>
    .home-page{
        background-image: url('../../assets/lV9LYT.jpg');
        background-position: center;
        background-size: cover;
        display: flex;
        height: 100vh;
    }  
    
    .text{
        color: #fff;
        margin-left: 9%;
        margin-top: 18%;
    }

    .uder{
        margin-left: -8%;
    }
    .free{
        padding:1px;
        height: 60px;
        display: flex;
        text-align: center;
        justify-content: center;
        background: rgb(60, 95, 95);
    }

    h3{
        margin-top: 10px;
        color: #fff;
    }

    #box{
        width: 100%;
        height: 400px;
        background-image: url(/image/box-bg.jpg);
        background-size: cover;
        background-position: center;
    }
    .box-list{
        display: flex;  
    }

    #box1{
        padding: 15px;
        width: 500px;
        height: auto;
        margin-left: 50px;
        border-radius: 5px;
        margin-right: 50px;
        background: rgb(255, 255, 255);
    }

    .btn{
        margin: auto;
        width: 150px;
        height: auto;
        padding: 10px;
        border: none;
        outline: none;
        display: flex;
        color: #ffff;
        margin-left: 25px;
        border-radius: 3px;
        text-align: center;
        align-items: center;
        justify-content: center;
        background: rgb(41, 198, 219);
    }
    #html{
        color: rgb(41, 198, 219);
    }

    #python{
        color: rgb(49, 93, 236);
    }

    #java{
        color: rgb(219, 41, 41);
    }

    #javascript{
        color: rgb(7, 7, 7);
    }

    #btn-html-color{
        background:rgb(41, 198, 219);
    }

    #btn-python-color{
        background:rgb(49, 93, 236);
    }

    #btn-java-color{
        background:rgb(219, 41, 41);
    }

    #btn-javascript-color{
        background:rgb(7, 7, 7);
    }

    .service1{
        display: flex;
    }
    .left,
    .right{
        margin-left: 3px;
        width: 50%;
        height: 50%;
    }

    #amazon,
    #lenovo,
    #google,
    #alphabet{
        display: flex;
        margin-left: 33%;
    }

    .client{
        margin: 10px;
        width: 200px;
        height: 50px;
        border: none;
        outline: none;
        color: #fff;
        font-size: 20px;
        background: rgb(41, 198, 219);
    }

    .in-contact{
        display: flex;
        background: rgb(60, 95, 95);
    }

    #all-in-contact{
        display: flex;
        margin-left: 30px;
    }

    #about-us,
    #get-in-touch,
    #social-media{
        margin: 30px;
    }

    .social > a > i {
        padding: 10px;
        font-size: 40px;
        color: rgb(41, 198, 219);
    }

    footer{
        height: 40px;
        display: flex;
        color: #ffff;
        text-align: center;
        align-items: center;
        justify-content: center;
        background: rgb(41, 198, 219);
    }
</style>
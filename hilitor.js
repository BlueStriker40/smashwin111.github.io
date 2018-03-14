<!DOCTYPE html>
<head>
<script src="/assets/jquery.js"></script>
<link href='https://media.glassdoor.com/l/153054/red-lobster-office.jpg' rel='stylesheet' type='text/css'>
<style>
body {
  background: url("https://media.glassdoor.com/l/153054/red-lobster-office.jpg");
  font-family: helvetica, sans-serif;
  margin: 0 auto;
  max-width: 600px;
}
div {
  height: 200px;
  background-size: cover;
  position: relative;
  margin: 40px 0 0 0;
  border-radius: 12px;
}
h1 {
  font-family: 'Londrina Shadow', cursive;
  text-align: center;
  font-size: 75px;
  color: #aaaaaa;
  margin: 60px 0 0 0;
}
h2 {
  text-align: center;
  color: #bbbbbb;
  margin: 0px 0 70px 0;
}
p {
  color: rgba(255,255,255,1);
  background: black;
  background: linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,.4));
  background: -webkit-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,.4));
  background: -moz-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,.4));
  padding: 10px;
  line-height: 28px;
  text-align: justify;
  position: absolute;
  bottom: 0;
  margin: 0;
  height: 30px;
  transition: height .5s;
  -webkit-transition: height .5s;
  -moz-transition: height .5s;
}

small {
  opacity: 0;
}

.show-description p {
  height: 150px;
}

.show-description small {
  opacity: 1;
}

.first{
  background-image: url("https://1.bp.blogspot.com/-MXQYY8y5v-8/V47xrhzJNoI/AAAAAAAAwiw/-pph6zjnt14QWeU6-DBxbCtro2dXluO-wCLcB/s1600/red-lobster-bairdi-crab-legs.jpg");
}
.second{
  background-image: url("https://www.visitgreensboronc.com/wp-content/uploads/2017/06/ultimate_feast.jpg");
}
.dessert{
  background-image: url("https://3.bp.blogspot.com/-6w4-oW4hbJI/VsBD65X5mfI/AAAAAAAAtLo/BYs8x0VFZH4/s640/red-lobster-lobster-lovers-dream.jpg");
}
.price {
  float: right;
}
@media (max-width: 500px) {
  h1 {
    font-size: 50px;
    margin-top: 20px;
    line-height: 40px;
  }
  h2 {
    font-size: 20px;
    margin: 20px 0 30px 0;
  }
  div {
    margin: 20px 12px 0 12px;
  }
  p {
    font-size: 20px;
    line-height: 24px;
  }
  small {
    font-size: 16px;
  }
}
.jumbotron {
     background-color: #f4511e;
     color: #fff;
     padding: 100px 25px;
 }
 .container-fluid {
     padding: 60px 50px;
 }
 .bg-grey {
     background-color: #f6f6f6;
 }
 .logo-small {
     color: #f4511e;
     font-size: 50px;
 }
 .logo {
     color: #f4511e;
     font-size: 200px;
 }
</style>

</head>

<body>
<h1>Red lobster</h1>
<h2>One of the best sea food restaurant in New York</h2>
<div class="first">
  <p>Red lobster legs only. <span class="price">$5</span><br />
  <small>Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil. </small></p>
</div>

<div class="second">
  <p>Lobster legs with fried shrimp. <span class="price">$22</span><br />
  <small>Tri-tip capicola kielbasa salami brisket chicken rump strip steak drumstick. Meatloaf chuck boudin ribeye pork jowl. Andouille bacon jowl meatloaf pork loin prosciutto bresaola.</small></p>
</div>
  
<div class="dessert">
  <p>Pasta with lobster meat next to it. <span class="price">$14</span><br />
  <small>Lollipop tart cotton candy jelly-o carrot cake apple pie cupcake. Jelly-o bear claw ice cream candy canes.</small></p>
</div>

<script>
  $('div').on('click', function() {
      $(this).toggleClass('show-description');
  });
</script>

</body>
<div class="jumbotron text-center">
  <h1>Company</h1> 
  <p>We specialize in blablabla</p> 
  <form class="form-inline">
    <div class="input-group">
      <input type="email" class="form-control" size="50" placeholder="Email Address" required>
      <div class="input-group-btn">
        <button type="button" class="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>


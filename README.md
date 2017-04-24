# Mobile-first-slick-slider

This is a beautiful slick slider that can be used in wide range of devices. Written with the main idea of mobile-first approach, this slider supports devices of all sizes. 

### Features

- Gradient hover effects
- Images of any size (width, height) fits inside the slider without editing the actual size
- Can include any number of slides

### Usage

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mobile first slick slider</title>
        
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="slider.css" />
        <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet"/>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.0.0/jquery-migrate.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
        <script type="text/javascript" src="slider.js"></script>
        
    </head>
    <body>
        
        <div class="slider-wrapper">
            <button id="btnPrevious" type="button" class="slick-prev prev">Previous</button>
            <div class="container-middle">
                <div class="slide-wrapper slide"><div class="image"><img src="Images/client1.png" class="image-style"></div></div>
                <div class="slide-wrapper slide"><div class="image"><img src="Images/client2.png" class="image-style"></div></div>
                <div class="slide-wrapper slide"><div class="image"><img src="Images/client3.png" class="image-style"></div></div>
                <div class="slide-wrapper slide"><div class="image"><img src="Images/client4.png" class="image-style"></div></div>
                <div class="slide-wrapper slide"><div class="image"><img src="Images/client5.png" class="image-style"></div></div>
            </div>
            <button id="btnNext" type="button" class="slick-next next">Next</button>
        </div>
        
    </body>
</html>
```

### Requirements

- jQuery 1.7 or later
- Bootstrap

### Browser support

- Chrome, IE, Opera, Edge
Tested: Chrome 57, IE 10 & 11, Opera 44, Edge 38

### Attribution

Inspired by [Slick - Ken Wheeler] (http://kenwheeler.github.io/slick/)

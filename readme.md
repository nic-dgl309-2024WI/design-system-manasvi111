index file

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- External files' links -->
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="design-system.css">
    <script src="design-system.js" defer></script>
</head>
<body>
 
    <!-- Main header -->
    <header>
        <nav>
            <div class="navbar">
                <a href="index.html" class="nav__link nav__link--logo">Design System</a> 
                <!-- Hamburger icon -->
                <span class="toggle" onclick="toggleNav()">
                    <span class="hamburger">&#9776;</span>
                    <!-- Cancel icon initially hidden -->
                    <span class="cancel">&#10006;</span>
                </span>
                <div class="nav__links">
                    <a href="about-me.html" class="nav__link">About Me</a>
                    <a href="#" class="nav__link">Demo Site</a>
                </div>
            </div>
                
            
        </nav>
    </header>   
        <!-- Side navbar -->
        <div class="sidenav" id="Sidenav">
            <ul class="SN__list">
              <!-- For mobile view -->
                <a href="about-me.html" class="SN__links">About Me</a>
                <a href="#" class="SN__links">Demo Site</a><br>
              <p>Branding</p><br>
              <li><a href="color.html" class="SN__link">01 Colours</a></li>
              <li><a href="#" class="SN__link">02 Typography</a></li>
              <li><a href="#" class="SN__link">03 Logo</a></li><br> 
              <p>Utilities</p><br>
              <li><a href="#" class="SN__link">04 Spacing</a></li>
              <li><a href="#" class="SN__link">05 Containers</a></li>
              <li><a href="#" class="SN__link">06 Images</a></li>
              <li><a href="#" class="SN__link">07 Interactive</a></li>
              <li><a href="#" class="SN__link">08 Pages</a></li><br>
              <p>Navigation</p><br>
              <li><a href="#" class="SN__link">09 Navbar</a></li>
              <li><a href="#" class="SN__link">10 Breadcrumbs</a></li>
              <li><a href="#" class="SN__link">11 Pagination</a></li><br>
              <p>Blocks</p><br>
              <li><a href="#" class="SN__link">12 Hero</a></li>
              <li><a href="#" class="SN__link">13 Carousel</a></li>
              <li><a href="#" class="SN__link">14 Slats</a></li>
              <li><a href="#" class="SN__link">15 Footer</a></li><br>
              <p>Components</p><br>
              <li><a href="#" class="SN__link">16 Cards</a></li>
              <li><a href="#" class="SN__link">17 Forms</a></li>
              <li><a href="#" class="SN__link">18 Accordion</a></li>
              <li><a href="#" class="SN__link">19 lists</a></li>
            </ul>
          </div>

</body>
</html>


design-system.cc
/* Formatting Specifications */

/* BEM Naming Convention */
/* Block: navbar */
/* Element: navbar__link */

/* Commented Rulesets with Explanation */
/* Styles for the top-level navigation */
.navbar {
    display: flex;
    align-items: center; /* Align items vertically */
    justify-content: space-between; /* Distribute items evenly */
    background-color: var(--clr-light); /* Using color variable */
    overflow: hidden;
}
.nav__link--logo {
    color: var(--clr-primary);
    font-weight: lighter;
}
/* Styles for navigation links */
.nav__link {
    padding: 12px 14px;
    text-decoration: none;
    color: var(--clr-primary); /* Using color variable */
}
/* .nav__links {
    display: none;
} */
/* Hover state for navigation links */
.nav__link:hover {
    color: var(--clr-accent); /* Using color variable */
    background-color: var(--clr-white);
}

/* Active state for navigation links */
.nav__link.active {
    font-weight: bold;
}

/* Responsiveness */

/* Mobile Layout */
/* Following Normal Document Flow */
/* Minimal Layout Properties, Padding, and Margins */

/* Mobile Layout - Navbar */
.navbar {
    padding: 10px;
}
.nav__links {
    display: none;
}

/* Styles for Side navbar */
.sidenav {
    background-color: var(--clr-light);
    padding-top: 20px;
    display: none; /* Initially hidden */
}
.sidenav p {
    color: var(--clr-primary);
}
.SN__link {
    color: var(--clr-primary);
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
}
  
.SN__links {
    display: block;
}
.SN__link:hover {
    color: var(--clr-secondary);
    background-color: var(--clr-white);
}

/* Mobile Layout - Navigation Links */
.nav__link {
    margin: 0 10px; /* Minimal margin */
}

/* Styles for the Design System text */
.design-system {
    font-size: 20px;
    font-weight: bold;
    color: var(--clr-primary); /* Using color variable */
}

/* Mobile Layout - Design System Text */
.design-system {
    font-size: 18px;
}

/* Styles for the hover state of the Design System text */
.design-system:hover {
    color: var(--clr-accent); /* Using color variable */
}

/* Styles for the hamburger icon */
.hamburger {
    display: block;
    cursor: pointer;
    float: right;
}


/* Media query for screens larger than 700px */
@media screen and (min-width: 700px) {
    /* Top navbar */
    .nav__links {
        display: block; /* Show top nav links on larger screens */
    }
    .navbar {
        display: flex;
        gap: 65%;
    }
    /* Side navbar */
    .sidenav {
        display: block; /* Show side navbar on larger screens */
        height: 100%;
        width: 250px;
        top: 46px;
        left: 0;
        z-index: 1;
        overflow-x: hidden;
        transition: 0.5s;
        background-color: var(--clr-light);
    }
    .SN__link {
        display: block;
    }
    .SN__links {
        display: none;
    }
    /* Hamburger icon */
    .hamburger {
        display: none; /* Hide hamburger icon on larger screens */
    }
}

color.html
          <h1>Color List</h1>
          <div class="primary_bgcolor">
            <p>Headings</p>
            <p>#f1e1e1</p>
            <p>Contract ratio:7.8:1 : Pass</p>
          </div>
    
          <div class="primary__text">
            <p>Paragraphs</p>
            <p>#464140</p>
            <p>Contract ratio:7.8:1 : Pass</p>
          </div>
    
          <div class="accent__color">
            <p>CTAs</p>
            <p>#49033A</p>
            <p>Contract ratio:12.22:1 :Pass</p>
          </div>
    
          <div class="secondary_bgcolor">
            <p>Headings</p>
            <p>#E6E6FA</p>
            <p>Contract ratio:5.76:1 : Pass</p>
          </div>
    
          <div class="secondary__text">
            <p>Paragraphs</p>
            <p>#8B4513</p>
            <p>Contract ratio:5.76:1 : Pass</p>
          </div>

// HeroSection.js

const HeroSection = {
    render: () => {
      // Hero section HTML content
      const heroHTML = `
        <section class="vs-hero-wrapper hero-layout2 position-relative">
        <div class="vs-hero-carousel" data-height="920" data-container="1900" data-slidertype="responsive">
        <div class="ls-slide" data-ls="duration: 8000; transition2d: 5;"><img src="assets/img/hero/hero-bg-2-1.jpg"
                alt="Hero Image" class="ls-bg"> <img src="assets/img/hero/slider-shape-1.png" alt="Shape"
                class="ls-l ls-hide-phone" style="left: 98%; top: 97%;"
                data-ls="offsetyin: bottom; durationin: 4000; delayin: 1000; offsetyout: bottom; durationout: 4000; parallax: true; parallaxlevel: -10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <img src="assets/img/hero/slider-shape-2.png" alt="Shape" class="ls-l ls-hide-phone"
                style="left: 85%; top: 30%;"
                data-ls="offsetyin: top; durationin: 4000; delayin: 2000; offsetyout: top; durationout: 4000; parallax: true; parallaxlevel: 10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <img src="assets/img/hero/slider-shape-3.png" alt="Shape" class="ls-l ls-hide-phone"
                style="left: 70%; top: 83%; transform: rotate(30deg);"
                data-ls="offsetyin: bottom; durationin: 4000; delayin: 2000; offsetyout: bottom; durationout: 4000; parallax: true; parallaxlevel: -10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <p class="ls-l ls-hide-tablet ls-hide-phone"
                style="left: 950px; top: 365px; font-size: 18px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.9em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <h1 class="ls-l ls-hide-phone text-theme"
                style="left: 950px; top: 396px; font-size: 100px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Foodelio</h1>
            <h1 class="ls-l ls-hide-phone"
                style="left: 950px; top: 502px; font-size: 100px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                organic food</h1>
            <p class="ls-l ls-hide-phone ls-hide-desktop"
                style="left: 950px; top: 335px; font-size: 34px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.9em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <p class="ls-l ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 180px; font-size: 72px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <h1 class="ls-l text-theme ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 296px; font-size: 150px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Foodelio</h1>
            <h1 class="ls-l ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 502px; font-size: 150px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                organic food</h1>
            <div class="ls-l ls-hide-phone" style="left: 950px; top: 640px;"
                data-ls="offsetyin: 100; fadein: true; durationin: 2000; delayin: 900; parallax: true; parallaxlevel: 2;">
                <a href="shop.html" class="vs-btn style2 hero-btn">Purchase</a>
            </div>
        </div>
        <div class="ls-slide" data-ls="duration: 8000; transition2d: 5;"><img src="assets/img/hero/hero-bg-2-2.jpg"
                alt="Hero Image" class="ls-bg"> <img src="assets/img/hero/slider-shape-1.png" alt="Shape"
                class="ls-l ls-hide-phone" style="left: 98%; top: 97%;"
                data-ls="offsetyin: bottom; durationin: 4000; delayin: 1000; offsetyout: bottom; durationout: 4000; parallax: true; parallaxlevel: -10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <img src="assets/img/hero/slider-shape-2.png" alt="Shape" class="ls-l ls-hide-phone"
                style="left: 85%; top: 30%;"
                data-ls="offsetyin: top; durationin: 4000; delayin: 2000; offsetyout: top; durationout: 4000; parallax: true; parallaxlevel: 10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <img src="assets/img/hero/slider-shape-3.png" alt="Shape" class="ls-l ls-hide-phone"
                style="left: 70%; top: 83%; transform: rotate(30deg);"
                data-ls="offsetyin: bottom; durationin: 4000; delayin: 2000; offsetyout: bottom; durationout: 4000; parallax: true; parallaxlevel: -10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <p class="ls-l ls-hide-tablet ls-hide-phone"
                style="left: 950px; top: 365px; font-size: 18px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.9em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <h1 class="ls-l ls-hide-phone text-theme"
                style="left: 950px; top: 396px; font-size: 100px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Foodelio</h1>
            <h1 class="ls-l ls-hide-phone"
                style="left: 950px; top: 502px; font-size: 100px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Fresh food</h1>
            <p class="ls-l ls-hide-phone ls-hide-desktop"
                style="left: 950px; top: 335px; font-size: 34px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.9em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <p class="ls-l ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 180px; font-size: 72px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <h1 class="ls-l text-theme ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 296px; font-size: 150px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Foodelio</h1>
            <h1 class="ls-l ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 502px; font-size: 150px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Fresh food</h1>
            <div class="ls-l ls-hide-phone" style="left: 950px; top: 640px;"
                data-ls="offsetyin: 100; fadein: true; durationin: 2000; delayin: 900; parallax: true; parallaxlevel: 2;">
                <a href="shop.html" class="vs-btn style2 hero-btn">Purchase</a>
            </div>
        </div>
        <div class="ls-slide" data-ls="duration: 8000; transition2d: 5;"><img src="assets/img/hero/hero-bg-2-3.jpg"
                alt="Hero Image" class="ls-bg"> <img src="assets/img/hero/slider-shape-1.png" alt="Shape"
                class="ls-l ls-hide-phone" style="left: 98%; top: 97%;"
                data-ls="offsetyin: bottom; durationin: 4000; delayin: 1000; offsetyout: bottom; durationout: 4000; parallax: true; parallaxlevel: -10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <img src="assets/img/hero/slider-shape-2.png" alt="Shape" class="ls-l ls-hide-phone"
                style="left: 85%; top: 30%;"
                data-ls="offsetyin: top; durationin: 4000; delayin: 2000; offsetyout: top; durationout: 4000; parallax: true; parallaxlevel: 10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <img src="assets/img/hero/slider-shape-3.png" alt="Shape" class="ls-l ls-hide-phone"
                style="left: 70%; top: 83%; transform: rotate(30deg);"
                data-ls="offsetyin: bottom; durationin: 4000; delayin: 2000; offsetyout: bottom; durationout: 4000; parallax: true; parallaxlevel: -10; parallaxaxis: y; parallaxdurationmove: 2000; parallaxevent: scroll;">
            <p class="ls-l ls-hide-tablet ls-hide-phone"
                style="left: 950px; top: 365px; font-size: 18px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.9em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <h1 class="ls-l ls-hide-phone text-theme"
                style="left: 950px; top: 396px; font-size: 100px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Foodelio</h1>
            <h1 class="ls-l ls-hide-phone"
                style="left: 950px; top: 502px; font-size: 100px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Natural food</h1>
            <p class="ls-l ls-hide-phone ls-hide-desktop"
                style="left: 950px; top: 335px; font-size: 34px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.9em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <p class="ls-l ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 180px; font-size: 72px; font-family: 'Advent Pro', sans-serif; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 600;"
                data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  ">
                We in Troducton</p>
            <h1 class="ls-l text-theme ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 296px; font-size: 150px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Foodelio</h1>
            <h1 class="ls-l ls-hide-tablet ls-hide-desktop"
                style="left: 950px; top: 502px; font-size: 150px; text-transform: uppercase; text-shadow: 0px 16px 24px rgba(235, 225, 225, 0.52);"
                data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; ">
                Natural food</h1>
            <div class="ls-l ls-hide-phone" style="left: 950px; top: 640px;"
                data-ls="offsetyin: 100; fadein: true; durationin: 2000; delayin: 900; parallax: true; parallaxlevel: 2;">
                <a href="shop.html" class="vs-btn style2 hero-btn">Purchase</a>
            </div>
        </div>
    </div>
        </section>
      `;
      
      return heroHTML;
    },
  
    after_render: () => {
      // Additional logic or setup after rendering
    },
  };
  
  export default HeroSection;
  
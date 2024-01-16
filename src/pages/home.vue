<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-first">

        <div class="nav-first">
          <h2 class="nav-first-text">DubaiRealty</h2>
          <h3 class="nav-first-small-text">Real Estate</h3>
          <img class="nav-first-img" src="../assets/img/Rectangle 14 (1).svg" alt="">
        </div>
        <div class="nav-second-one">
          <Menubar :model="items"/>
        </div>
      </div>
      <div class="navbar-second">
        <div class="nav-third">
          <button class="nav-third-button" @click="">Book a consultation</button>
        </div>
        <div class="nav-fourth">
          <button class="nav-fourth__first-button" @click="En">En</button>
          <button class="nav-fourth__second-button" @click="Ru">Ru</button>
        </div>
        <div class="nav-fifth">
          <p class="nav-fifth__number">+7 (212) 674-25-10</p>
        </div>
      </div>
      <div class="nav-second-two">
        <Menubar :model="items"/>
      </div>

    </div>
  </div>
  <div class="container">
    <header class="header">
      <section class="welcomeHome">
        <div class="container">
          <div class="background__hero">
            <div style="display: flex;  flex-wrap:wrap; justify-content:end">
              <div class="social-main__images flex justify-content-end  pr-3 pt-3" >
                <img class="social-img " src="../assets/img/social%20icons.svg" alt="">
              </div>

            </div>
            <img class="hero__image" src="../assets/img/sec.1.2.png" alt="photo">

            <div class="hero__box">
              <h5 class="hero__text">Lorem ipsum</h5>
              <h1 class="hero__title">Welcome home <br> <span class="span">to</span> luxury</h1>
              <div class="main-hero-icon">
                <h5
                    class="hero__text hero__text-">Book a consultation
                  <span class=" pi pi-chevron-right"></span>
                </h5>
              </div>
            </div>
            <div class="grid header__thirst align-items-center noning mr-0 ml-0">
              <div class="col-12 md:col-4 pt-0  md:pt-8 pl-8 ">
                <div class="prev-next__main">
                  <div class="flex">
                    <div class="prev-div"><p class="prev-texts">PREV <span class="prev-icon h-2rem">|</span></p></div>
                    <div class="next-div">
                      <p CLASS="next-texts">NEXT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 md:col-8 ">
                <div class="welcome__row  md: w-full">
                  <div class="grid">
                    <div class="col flex align-items-center pl-6">
                      <h1 class="welcome-block__number1">01</h1>
                      <P class="welcome-block__text pl-3">Lorem Ipsum <br> Dolorem apset</P>
                    </div>
                    <div class="col md:ml-7">
                      <div class="welcome__block">
                        <h1 class="welcome-block__number">02</h1>
                        <P class="welcome-block__text pl-3">Lorem Ipsum <br>Dolorem apset</P>
                      </div>
                    </div>
                    <div class="col md:ml-7">
                      <div class="welcome__block">
                        <h1 class="welcome-block__number">03</h1>
                        <P class="welcome-block__text pl-3">Lorem Ipsum <br>Dolorem apset</P>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-content-start moring  pt-0 ">
              <div class="prev-next__main">
                <div class="flex">
                  <div class="prev-div"><p class="prev-texts">PREV <span class="prev-icon h-2rem">|</span></p></div>
                  <div class="next-div">
                    <p CLASS="next-texts">NEXT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
    <div class="bloking  md:mt-7 w-full">
      <div class="grid">
        <div class="col-12 sm:col-3 flex align-items-center ">
          <h1 class="welcome-block__number1">01</h1>
          <P class="welcome-block__text pl-3">Lorem Ipsum Dolorem apset</P>
        </div>
        <div class="col-12 sm:col-3 md:5 ml-7">
          <div class="welcome__block">
            <h1 class="welcome-block__number">02</h1>
            <P class="welcome-block__text pl-3">Lorem Ipsum  Dolorem apset</P>
          </div>
        </div>
        <div class="col-12 sm:col-3 md:5 ml-7">
          <div class="welcome__block">
            <h1 class="welcome-block__number">03</h1>
            <P class="welcome-block__text pl-3">Lorem Ipsum Dolorem apset</P>
          </div>
        </div>
      </div>
    </div>

  </div>

<section>
  <div class="about">
    <div class="about__text">
      <div class="about__big-text">
        <h1>Latest projects</h1>
      </div>
      <div class="about__link">
        <a class="about__link-w" href="#">All</a>
        <a class="about__link-w" href="#">Building</a>
        <a class="about__link-w" href="#">Interior</a>
        <a class="about__link-black-text" href="#">View all projects</a>
      </div>
    </div>
  </div>
  <div class="coverflow-example">
    <swiper
        class="swiper"
        :modules="modules"
        :space-between="30"
        :slides-per-view="4"
        :free-mode="true"
        :grid="{
          rows: 2,
          fill: 'row'
        }"
        :pagination="{ clickable: true }"
        :breakpoints="{
                0: {
                  grid:{
                    rows: 2,
                    fill: 'row'
                  },
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                328: {
                  grid:{
                    rows: 1,
                    fill: 'row'
                  },
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  grid:{
                    rows: 1,
                    fill: 'row'
                  },
                  slidesPerView: 4,
                  spaceBetween: 40
                }
        }"
    >
      <swiper-slide class="slide">
        <div class="container">
          <div class="card flex justify-content-center">
            <div class="image-container">
              <img class="image__swaper" src="../assets/img/sec2.1.png " alt="">
              <h1 class="image-container__text">Villas</h1>
              <div class="image-container__text-hover">
                <h1 class="image-container__text-hover-h1-text">Villas</h1>
                <p class="image-container__text-hover-lorem-text">Lorem ipsum dolor  sit amet,<br class="br"> consectetur  adipiscing elit.<br class="br"> Consequat
                  molestie integer<br class="br"> aliquam consectetur. Faucibus vitae dui <br class="br"> massa tellus magna sit.</p>
                <a href="#" class="image-container__text-hover-link">See project</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slide">
        <div class="container">
          <div class="card flex justify-content-center">
            <div class="image-container">
              <img class="image__swaper" src="../assets/img/sec.2.2.png" alt="">
              <h1 class="image-container__text">Dubai</h1>
              <div class="image-container__text-hover">
                <h1 class="image-container__text-hover-h1-text">Dubai</h1>
                <p class="image-container__text-hover-lorem-text">Lorem ipsum dolor  sit amet,<br class="br"> consectetur  adipiscing elit.<br class="br"> Consequat
                  molestie integer<br class="br"> aliquam consectetur. Faucibus vitae dui <br class="br"> massa tellus magna sit.</p>
                <a href="#" class="image-container__text-hover-link">See project</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slide">
        <div class="container">
          <div class="card flex justify-content-center">
            <div class="image-container">
              <img class="image__swaper" src="../assets/img/sec2.3.png" alt="">
              <h1 class="image-container__text">Houses</h1>
              <div class="image-container__text-hover">
                <h1 class="image-container__text-hover-h1-text">Houses</h1>
                <p class="image-container__text-hover-lorem-text">Lorem ipsum dolor  sit amet,<br class="br"> consectetur  adipiscing elit.<br class="br"> Consequat
                  molestie integer<br class="br"> aliquam consectetur. Faucibus vitae dui <br class="br"> massa tellus magna sit.</p>
                <a href="#" class="image-container__text-hover-link">See project</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slide">
        <div class="container">
          <div class="card flex justify-content-center">
            <div class="image-container">
              <img class="image__swaper" src="../assets/img/sec1.1.png" alt="">
              <h1 class="image-container__text">Houses</h1>
              <div class="image-container__text-hover">
                <h1 class="image-container__text-hover-h1-text">Housses</h1>
                <p class="image-container__text-hover-lorem-text">Lorem ipsum dolor  sit amet,<br class="br"> consectetur  adipiscing elit.<br class="br"> Consequat
                  molestie integer<br class="br"> aliquam consectetur. Faucibus vitae dui <br class="br"> massa tellus magna sit.</p>
                <a href="#" class="image-container__text-hover-link">See project</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slide">
        <div class="container">
          <div class="card flex justify-content-center">
            <div class="image-container">
              <img class="image__swaper" src="../assets/img/sec.2.2.png" alt="">
              <h1 class="image-container__text">Dubai</h1>
              <div class="image-container__text-hover">
                <h1 class="image-container__text-hover-h1-text">Dubai</h1>
                <p class="image-container__text-hover-lorem-text">Lorem ipsum dolor  sit amet,<br class="br"> consectetur  adipiscing elit.<br class="br"> Consequat
                  molestie integer<br class="br"> aliquam consectetur. Faucibus vitae dui <br class="br"> massa tellus magna sit.</p>
                <a href="#" class="image-container__text-hover-link">See project</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slide">
        <div class="container">
          <div class="card flex justify-content-center">
            <div class="image-container">
              <img class="image__swaper" src="../assets/img/sec2.3.png" alt="">
              <h1 class="image-container__text">hotels</h1>
              <div class="image-container__text-hover">
                <h1 class="image-container__text-hover-h1-text">hotels</h1>
                <p class="image-container__text-hover-lorem-text">Lorem ipsum dolor  sit amet,<br class="br"> consectetur  adipiscing elit.<br class="br"> Consequat
                  molestie integer<br class="br"> aliquam consectetur. Faucibus vitae dui <br class="br"> massa tellus magna sit.</p>
                <a href="#" class="image-container__text-hover-link">See project</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</section>

  <section class="latestProject mb-5">
    <div class="container">
      <div class="second__container">
        <div class="latestProject__row">
          <div class="latestProject__box">
            <h1 class="latestProject__title">Latest projects</h1>
          </div>
          <div class="latestProject__box">
            <ul class="mt-6">
              <a href="#" class="link">All</a>
              <a href="#" class="link">Building</a>
              <a href="#" class="link">Interior</a>
              <a href="#" class="link opacity-50">View all projects</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="expertise">
    <div class="mini__container">
      <div class="expertise__grid">
        <div class="grid">
          <p class="expertise-subtitle">Our expertise</p>
          <h1 class="title">"The best apartment in Dubai" we will find your dream</h1>
          <p class="expertise-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa,
            euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus
            fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl
            vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum
            venenatis
            sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem.
            Quisque ut risus ex. Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce
            nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem.
            Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="play video" style="position: relative;">
    <video id="myVideo" class="mt-5" controls style="width: 100%; height: auto;">      <source src="https://www.shutterstock.com/shutterstock/videos/1088787217/preview/stock-footage-modern-skyscrapers-and-busy-evening-highways-day-to-night-transition-timelapse-in-luxury-downtown.webm" type="video/webm">
      Ваш браузер не поддерживает тег <code>video</code>.    </video>
    <div class="play">      <button id="continueButton" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%; width: 50px; height: 50px; background-color: #fad44c; border: none;">
      <img src="../assets/play%20button.svg" alt="" style="width: 100%; height: 100%;">      </button>
    </div>  </section>

  <section class="quote">
    <div class="second__container">
      <div class="quote-border">
        <p class="quote-text">
          “Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as
          your
          mind lets you. What you believe, remember, you can achieve.” <span
            class="quote-span">— Mary Kay Ash</span>
        </p>
      </div>
      <div class="grid">
        <div class=" col-12 md:col-6 lg:col-6 sm:col-12">
          <img class="quote-img" src="../assets/img/sec4.1.png" alt="photo">
          <p class="quote__col-text">Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque
            augue
            elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros
            dolor
            aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue
            ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum
            nunc,
            feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id
            efficitur
            pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque
            accumsan
            pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl
            pharetra
            consequat. Nunc in venenatis orci.</p>
        </div>
        <div class=" col-12 md:col-6 lg:col-6 sm:col-12">
          <img class="quote-img" src="../assets/img/sec4.2.png" alt="">
          <p class="quote__col-text">Vivamus non diam vel lorem efficitur mattis in gravida ante. Ut ullamcorper
            dapibus
            ante, eu tincidunt orci feugiat vel. Curabitur eget lectus lectus. Pellentesque malesuada, felis at
            accumsan
            interdum, nisl mi fermentum est, eu suscipit dui lorem a dui. Aliquam rhoncus risus in leo vestibulum
            efficitur. Suspendisse tortor quam, faucibus a lacinia a, bibendum vitae quam. Suspen disse et metus
            et orci
            rutrum dictum eu eu nibh. Suspendisse blandit in diam in rhoncus. Nam volutpat hendrerit enim, sed
            aliquet
            quam gravida at. Nullam dictum sagittis nisi, eu porta sem mollis eu. Nulla faucibus sed ipsum sed
            sodales.
            Curabitur varius iaculis felis, in aliquet sem suscipit quis. Ut vulputate, magna ac bibendum
            elementum,
            nulla magna tincidunt urna, a venenatis dolor arcu sed leo. </p>
        </div>
      </div>
    </div>
  </section>

  <section class="contact">
    <div class="container">
      <div class="contact__background">
        <div class="contact__box">
          <p class="apartments__subtitle text-center pt-8" style="color:#272727">Do you have any questions?</p>
          <h1 class="contact__title">Contact us</h1>
          <div class="inputs">
            <div class=" card flex justify-content-center">
              <InputText type="text" v-model="value" placeholder =" Enter your mail"/>
              <Button class="input__btn" label="Send" style="background-color: black" raised/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="swiper">
    <div class="container">
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="3"
        :space-between="60"
        :grid="2"
        :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 90,
      modifier: 1,
      slideShadows: true,
    }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
        :breakpoints="obj.breakpoints"
    >
      <swiper-slide
      >
        <div class="image">
          <img class="slide__img" src="../assets/img/cor.1.svg" alt="">
        </div>
        <div class="slide__card  ">
          <div class="flex justify-content-between">
            <img class="slide__svg" src="../assets/img/1.svg" alt="">
          </div>
          <div class="px-3">
            <h2 class="slide__title">Paul</h2>
            <p class="slide__text">Owner in <span class="slide__span-txt">Paul.com</span></p>
            <p class="slide__second-text">Projects for many large domestic and foreign corporations, enterprises in many
              elds such as nance, banking, F&B, education, communication.
            </p>
          </div>

        </div>

      </swiper-slide>
      <swiper-slide
      >
        <div class="image">
          <img class="slide__img" src="../assets/img/cor.2.svg" alt="">
        </div>
        <div class="slide__card  ">
          <div class="flex justify-content-between">
            <img class="slide__svg" src="../assets/img/1.svg" alt="">
          </div>
          <div class="px-3">
            <h2 class="slide__title">Robert</h2>
            <p class="slide__text">Founder in  <span class="slide__span-txt">Apple inc.</span></p>
            <p class="slide__second-text">Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing
            </p>
          </div>

        </div>

      </swiper-slide>
      <swiper-slide
      >
        <div class="image">
          <img class="slide__img" src="../assets/img/cor.1.svg" alt="">
        </div>
        <div class="slide__card  ">
          <div class="flex justify-content-between">

            <img class="slide__svg" src="../assets/img/1.svg" alt="">
          </div>
          <div class="px-3">
            <h2 class="slide__title">Paul</h2>
            <p class="slide__text">Owner in <span class="slide__span-txt">Paul.com</span></p>
            <p class="slide__second-text">Projects for many large domestic and foreign corporations, enterprises in many
              elds such as nance, banking, F&B, education, communication.
            </p>
          </div>

        </div>

      </swiper-slide>
      <swiper-slide
      >
        <div class="image">
          <img class="slide__img" src="../assets/img/cor.2.svg" alt="">
        </div>
        <div class="slide__card  ">
          <div class="flex justify-content-between">

            <img class="slide__svg" src="../assets/img/1.svg" alt="">
          </div>
          <div class="px-3">
            <h2 class="slide__title">Robert</h2>
            <p class="slide__text">Founder in  <span class="slide__span-txt">Apple inc.</span></p>
            <p class="slide__second-text">Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing
            </p>
          </div>

        </div>

      </swiper-slide>
      <swiper-slide
      >
        <div class="image">
          <img class="slide__img" src="../assets/img/cor.1.svg" alt="">
        </div>
        <div class="slide__card  ">
          <div class="flex justify-content-between">

            <img class="slide__svg" src="../assets/img/1.svg" alt="">
          </div>
          <div class="px-3">
            <h2 class="slide__title">Paul</h2>
            <p class="slide__text">Owner in <span class="slide__span-txt">Paul.com</span></p>
            <p class="slide__second-text">Projects for many large domestic and foreign corporations, enterprises in many
              elds such as nance, banking, F&B, education, communication.
            </p>
          </div>

        </div>

      </swiper-slide>
      <swiper-slide
      >
        <div class="image">
          <img class="slide__img" src="../assets/img/cor.2.svg" alt="">
        </div>
        <div class="slide__card  ">
          <div class="flex justify-content-between">

            <img class="slide__svg" src="../assets/img/”.svg" alt="">
          </div>
          <div class="px-3">
            <h2 class="slide__title">Robert</h2>
            <p class="slide__text">Founder in <span class="slide__span-txt">Apple inc. </span></p>
            <p class="slide__second-text">Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing
            </p>
          </div>

        </div>

      </swiper-slide>
    </swiper>
    </div>
  </section>

  <section class="accordion">
    <div class="second__container">
      <h1 class="accordion__title">FAQ</h1>
      <div class="card">
        <Accordion :multiple="true" :activeIndex="[0]">
          <AccordionTab content header="The largest and oldest Quotations Page on the Web with about 30 categories">
            <p class="accordion__text m-0">
              Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet
              commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit
              amet
              pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium
              ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna
              rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam
              sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
              tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra
              consequat. Nunc in venenatis orci.
            </p>
          </AccordionTab>
          <AccordionTab content class="accordion__title"
                        header="A huge collection of inspirational quotes, thoughts of greatest minds in history">
            <p class="accordion__text m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
              qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </AccordionTab>
          <AccordionTab content class="accordion__title" header="Quotations from the great works of literature">
            <p class="accordion__text m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
              minus.
            </p>
          </AccordionTab>
          <AccordionTab content class="accordion__title" header="Read quotes and sayings from famous people in history">
            <p class="accordion__text m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
              minus.
            </p>
          </AccordionTab>
          <AccordionTab content class="accordion__title" header="Collected quotes from Albert Einstein">
            <p class="accordion__text m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
              minus.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="flex justify-content-center">
        <img src="../assets/images/Logo%20(1).svg" alt="" style="margin-bottom: 38px">
      </div>
      <div class="footer-block">
        <div class="row">
          <div class="col1" style=" margin-bottom: 70px">
            <p class="footer__col-title">Buy</p>
            <ul style="padding: 0!important;" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">Apartment in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">House in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Apartments in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Loft in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Penthouse in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Villa in Dubai</a></li>
            </ul>
          </div>
          <div class="col2" style=" margin-bottom: 70px">
            <p class="footer__col-title">Services</p>
            <ul style="padding: 0; margin: 0" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">Property management in Dubai, UAE</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Sell ​​property in Dubai, UAE</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Rent property in Dubai, UAE</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Investments in Dubai, UAE</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Real estate for cryptocurrency in Dubai</a>
              </li>
              <li class="footer-menu__item"><a class="footer-link" href="">Moving to Dubai, UAE</a></li>
            </ul>
          </div>
          <div class="col3" style=" margin-bottom: 70px">
            <p class="footer__col-title">Information</p>
            <ul style="padding: 0!important;" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">Video</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Podcasts</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Laws</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Questions and answers</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Books</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Articles</a></li>
            </ul>
          </div>
          <div class="col4" style=" margin-bottom: 70px">
            <p class="footer__col-title">About company</p>
            <ul style="padding: 0!important;" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">Jobs</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Story</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Licenses</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Why are we</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Real estate agency</a></li>
            </ul>
          </div>
          <div class="col5" style=" margin-bottom: 70px">
            <p class="footer__col-title">Contact</p>
            <ul style="padding: 0!important;" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">964 Worthington Drive
                <br>
                Dubai, UAE</a></li>
              <a class="footer-menu__mail" href="">dubairealty@mail.com</a>
            </ul>
            <Button class="btn-warning" style="margin-top: 50px;" label="Book a consultation" severity="warning"/>

          </div>
        </div>
      </div>
      <div class="footer-card">
        <Accordion :activeIndex="0">
          <AccordionTab header="Buy">
            <ul style="padding: 0!important;" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">Apartment in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">House in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Apartments in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Loft in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Penthouse in Dubai</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Villa in Dubai</a></li>
            </ul>
          </AccordionTab>
          <AccordionTab header="Services">
            <ul style="padding: 0; margin: 0" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">Property management in Dubai, UAE</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Sell ​​property in Dubai, UAE</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Rent property in Dubai, UAE</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Investments in Dubai, UAE</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Real estate for cryptocurrency in Dubai</a>
              </li>
              <li class="footer-menu__item"><a class="footer-link" href="">Moving to Dubai, UAE</a></li>
            </ul>
          </AccordionTab>
          <AccordionTab header="Information">
            <ul style="padding: 0!important;" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">Video</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Podcasts</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Laws</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Questions and answers</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Books</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Articles</a></li>
            </ul>
          </AccordionTab>
          <AccordionTab header="About company">
            <ul style="padding: 0!important;" type="none">
              <li class="footer-menu__item"><a class="footer-link" href="">Jobs</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Story</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Licenses</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Why are we</a></li>
              <li class="footer-menu__item"><a class="footer-link" href="">Real estate agency</a></li>
            </ul>
          </AccordionTab>
        </Accordion>
        <div class="footer-card__block">
          <div class="col lg:col-4 md:col-4" style=" margin-bottom: 70px">
            <div class="flex justify-content-between">
              <div>
                <p class="footer__col-title">Contact</p>
                <ul style="padding: 0!important;" type="none">
                  <li class="footer-menu__item"><a class="footer-link" href="">964 Worthington Drive
                    <br>
                    Dubai, UAE</a></li>
                  <a class="footer-menu__mail" href="">dubairealty@mail.com</a>
                </ul>
              </div>
              <div class="flex-end">
                <Button class="btn-warning" label="Book a consultation" severity="warning"/>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-card__none">
          <div class="col lg:col-4 md:col-4" style=" margin-bottom: 50px">
            <div class="justify-content-center">
              <div>
                <p class="footer__col-title">Contact</p>
                <ul style="padding: 0!important;" type="none">
                  <li class="footer-menu__item"><a class="footer-link" href="">964 Worthington Drive
                    <br>
                    Dubai, UAE</a></li>
                  <a class="footer-menu__mail" href="">dubairealty@mail.com</a>
                </ul>
              </div>
              <div class="card flex justify-content-center">
                <Button class="btn btn--text " label="Book a consultation"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="footer__block-end">
        <div class="flex justify-content-between" style="margin: 22px 0">
          <p class="footer__text-end">Copyright © 2022 Dubai Realty</p>
          <div>
            <a href=""><img src="../assets/images/Vector.svg" alt=""></a>
            <a href=""><img class="footer__end-icon" src="../assets/images/Vector%20(1).svg" alt=""></a>
            <a href=""><img class="footer__end-icon" src="../assets/images/youtube.svg" alt=""></a>
            <a href=""><img class="footer__end-icon" src="../assets/images/instagram.svg" alt=""></a>
            <a href=""><img class="footer__end-icon" src="../assets/images/Vector%20(2).svg" alt=""></a>
          </div>
        </div>
      </div>

      <div class="footer__none-end">
        <div class="flex flex-column align-items-center justify-content-center" style="margin: 22px 0">
          <div class="w-fit" style="margin-bottom: 13px">
            <a href=""><img src="../assets/images/Vector.svg" alt=""></a>
            <a href=""><img class="footer__end-icon" src="../assets/images/Vector%20(1).svg" alt=""></a>
            <a href=""><img class="footer__end-icon" src="../assets/images/youtube.svg" alt=""></a>
            <a href=""><img class="footer__end-icon" src="../assets/images/instagram.svg" alt=""></a>
            <a href=""><img class="footer__end-icon" src="../assets/images/Vector%20(2).svg" alt=""></a>
          </div>
          <div>
            <p class="footer__text-end">Copyright © 2022 Dubai Realty</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>






<script>
import {ref} from "vue";

const items = ref([
  {
    label: 'Buy',
    items: [
      {
        label: 'Category number one',
      },
      {
        label: 'Apartments in Dubai',
      },
      {
        label: 'Category number twenty five ',
      },
    ]
  },
  {
    label: 'BLOG',
  },
  {
    label: 'ABOUT',
  },
  {
    label: 'Contact',
  }
]);


//////////////////////////////////////
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import {EffectCoverflow, Pagination} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
       modules: [EffectCoverflow, Pagination],
      obj: {
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640  px
          640: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
      }
    };
  }
};

//


</script>

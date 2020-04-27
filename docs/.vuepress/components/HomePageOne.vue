<template>
  <article class="home-page-one-wrapper">

    <!-- <section class="description">
      <img
        v-if="$frontmatter.heroImage"
        :style="heroImageStyle || {}"
        :src="$withBase($frontmatter.heroImage)"
        alt="hero"
      />
      <h1>{{ $frontmatter.heroText || $title }}</h1>
      <p class="description">{{ $description }}</p>

      <router-link class="btn-about" :to="$frontmatter.actionLink">{{ $frontmatter.actionText }}</router-link>

      <hr />
    </section> -->
    <!-- <div class="provide" align="center">
      <div class="title-box">
        <div class="title">
          We provide solutions to grow your business
        </div>
        <div class="desc"> 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
        </div>
      </div>
      <div class="list">
                <div class="item">
          <div class="icon">
            <img src="./s1.png"/>
          </div>
          <div class="title">
            Global NetWork
          </div>
          <div class="desc">
            Our goal is to help our companies maintain or achieve best in class positions. Build an online presence with this professional bootstrap 4 template.
          </div>
        </div>
      </div>
    </div> -->
    <div class="banner">
      <div class="container">
        <div class="left col-md-5">
          <h1>Meet with us to success dream business</h1>
          <p>Making use of the respective industries and our team works. Build an online presence with this professional 
            bootstrap 4 template.</p>
          <a class="btn" href="#">Get Started</a>
        </div>
        <div class="right  col-md-7">
          <img src="./images/main.jpg"/>
        </div>
      </div>
    </div>
    </div>
    <div class="provide">
      <div class="title-box">
        <div class="title">
          We provide solutions to grow your business
        </div>
        <div class="desc"> 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
        </div>
      </div>
      <div class="list">
        <div class="item col-lg-4 col-md-6">
          <div class="item-box">
            <div class="s-block p-lg-4 p-3">
              <div class="icon">
                <!-- <img src="./s1.png"/> -->
                <img src="./images/s1.png" alt="mixureSecure">
              </div>
              <div class="title">
                Global NetWork
              </div>
              <div class="desc">
                Our goal is to help our companies maintain or achieve best in class positions. Build an online presence with this professional bootstrap 4 template.
              </div>
            </div>
          </div>
        </div>
        <div class="item col-lg-4 col-md-6">
          <div class="item-box">
            <div class="s-block p-lg-4 p-3">
              <div class="icon">
                <!-- <img src="./s1.png"/> -->
                <img src="./images/s1.png" alt="mixureSecure">
              </div>
              <div class="title">
                Global NetWork
              </div>
              <div class="desc">
                Our goal is to help our companies maintain or achieve best in class positions. Build an online presence with this professional bootstrap 4 template.
              </div>
            </div>
          </div>
        </div>
        <div class="item col-lg-4">
          <div class="item-box">
            <div class="s-block p-lg-4 p-3">
              <div class="icon">
                <!-- <img src="./s1.png"/> -->
                <img src="./images/s1.png" alt="mixureSecure">
              </div>
              <div class="title">
                Global NetWork
              </div>
              <div class="desc">
                Our goal is to help our companies maintain or achieve best in class positions. Build an online presence with this professional bootstrap 4 template.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section class="md-content-wrapper">
      <Content />
    </section>

    <footer
    >
      <!-- <p>EZLINKER团队</p>
      <p>
        联系我们:
        <a href="ezlinker@qq.com">ezlinker@qq.com</a>.
      </p> -->
      <div class="container">
        <div class="col col-md-6">
          <div class="title">
          Contact Information
          </div>
          <div class="item">
            <span class="name">Address</span> : #135 block, Barnard St. Brooklyn, NY 10036, USA
          </div>
          <div class="item">
            <span class="name">Address</span> : #135 block, Barnard St. Brooklyn, NY 10036, USA
          </div>
          <div class="item">
            <span class="name">Email</span> : example@mail.com
          </div>
        </div>
        <div class="col link col-md-4">
          <div class="title">
          Company
          </div>
          <div class="item">
            About
          </div>
          <div class="item">
            Blog Posts
          </div>
          <div class="item">
            FAQ
          </div>
          <div class="item">
            Pricing
          </div>
        </div>
        <div class="col link col-md-4">
                    <div class="title">
          Company
          </div>
          <div class="item">
            About
          </div>
          <div class="item">
            Blog Posts
          </div>
          <div class="item">
            FAQ
          </div>
          <div class="item">
            Pricing
          </div>
        </div>
        <div class="col link col-md-4">
                    <div class="title">
          Company
          </div>
          <div class="item">
            About
          </div>
          <div class="item">
            Blog Posts
          </div>
          <div class="item">
            FAQ
          </div>
          <div class="item">
            Pricing
          </div>
        </div>
      </div>
    </footer>
  </article>
</template>

<script>
export default {
  data() {
    return {
      downloads: 0
    };
  },

  computed: {
    features() {
      return this.$frontmatter.features;
    },
    heroImageStyle() {
      return (
        this.$frontmatter.heroImageStyle || {
          maxHeight: "400px",
          margin: "6rem auto 1.5rem"
        }
      );
    }
  },

  created() {
    const date = new Date();
    const year = date.getFullYear();
    const mounth = date.getMonth() + 1;
    const day = date.getDate();
  },

  methods: {}
};
</script>


<style lang="stylus" scoped>
.card {
  cursor: pointer;
  margin-top: 10px;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  transition: all 0.25s;
}

.card:hover {
  margin-top: 0px;
  box-shadow: 5px 8px 5px #778899;
}

.header {
  background-color: #4caf50;
  margin: 0 auto;
  padding: 40px;
}

.body {
  padding: 10px;
}

.card img {
  width: 100%;
}

.home-page-one-wrapper {
  // content: '';
  // width: 100%;
  // height: 500px;
  // opacity: 0.9;
  // top: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
  // position: absolute;
  // z-index: -1;
  // background-image: url('./images/header.jpg');
  // padding-top: 3.4rem;
  // background-attachment: fixed;

  .banner{
    padding: 58px 0 48px;
    background-color: #fafafa;
    
    .container{
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      .left{
        position: relative;
        margin-top: 98px;
        h1{
          margin:0;
          font-size: 40px;
          line-height: 46px;
          color: #0f0f1a;
          font-weight: 700;
        }
        p{
          
          color: #6c757d;
          font-size: 16px;
          line-height: 24px;
          margin: 16px 0 48px;
        }
        .btn{
          padding: 14px 22px;
          background-color: #151965;
          border-color: #151965;
          display: inline-block;
          font-weight: 400;
          text-align: center;
          vertical-align: middle;
          line-height: 1.5;
          border-radius: 0.25rem;
        }
      }
      .right{
        img{
          max-width: 100%;
          height: auto;
          vertical-align: middle;
          border-style: none;
        }
      }
    }
  }
  .provide {
    padding: 48px 0;
    margin: 0 auto;
    .title-box{
      max-width: 750px;
      margin: 0 auto;
      text-align: center;
      .title{
        color: #0f0f1A;
        font-size: 35px;
      }
      .desc{
        margin: 16px 0;
        font-size: 16px;
        color: #6c757d;
      }
    }
    .list{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      .item{        
        margin: 48px 0 0;
        padding: 0 15px;

        .item-box{
          box-sizing: border-box;
          box-shadow: 1px 2px 6px 1px rgba(53, 54, 102, 0.08);
          transition: 0.3s ease-in;
          &:hover{
            box-shadow: 0px 0px 8px rgba(53, 54, 102, 0.2);
          }
          .p-3 {
            padding: 1rem ;
          }
          .s-block{
            box-sizing: border-box;
            
            .icon{
              height: 80px;
            img{
              height: 100%;
            }
            }
            .title{
              font-size:26px;
            }
            .desc{
              font-size:15px;
            }
          }
        }
      }
    }
  }

  section {
    &.description {
      box-sizing: border-box;
      margin: 0 auto 6rem;
      max-width: 46rem;
      width: 100%;
      text-align: center;

      h1 {
        font-size: 50px;
        margin-top: 8rem;
        color: #FFFFFF;
      }

      p {
        margin-bottom: 2rem;
        color: #330033;
        font-size: 20px;
      }

      .btn-about {
        margin: 2rem 0;
        display: inline-block;
        padding: 0.6rem 1.2rem;
        border-radius: 0.25rem;
        background: #FFD700;
        color: #000000;
        font-size: 1rem;
      }

      .banner {
        display: block;
        width: 100%;
      }
    }
  }


  footer{
    background-color: #F1F4F9;
    .container{
      margin:0 74px;
      padding: 16px 15px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .col{
        margin-top: 3rem;
        font-size:16px;
        width: 100%;
        .title{
          
          font-size: 20px;
          color: #151965; 
          margin-bottom: 15px;
        }
        .item{
          font-size: 16px;
          margin-bottom: 5px;
          color: #6c757d;
          .name {
            font-weight: bold;
          }
        }
    }
    .link {
      .item{
        &:hover{
          text-decoration:underline;
          cursor: pointer;
        }
      }
    }
    }

  }
}
@media (min-width: 576px){
  .banner .container, .provide{
    max-width: 540px;
  }
}
@media (min-width: 768px){
  .banner .container, .provide{
    max-width: 720px;
  }
  .col-md-4{
    flex: 0 0 33.33333%;
    max-width: 14%;
  }
  .col-md-5{
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-md-7{
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 44%;
  }
}
@media (min-width: 992px){
  .banner .container, .provide{
    max-width: 960px;
    
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .col-lg-4 {
      flex: 0 0 33.33333%;
      max-width: 25%;
  }
}

@media (min-width: 1200px){
  .banner .container, .provide {
      max-width: 1140px;
  }
}

@media screen and (min-width: 1400px){
  .banner .container, .provide {
      max-width: 1270px;
  }
}
@media screen and (min-width: 1600px){
  .banner .container, .provide {
      max-width: 1470px;
  }
}

@media (max-width: $MQMobile) {
  .home-page-one-wrapper {
    section {
      padding: 0 2rem;

      &.description {
        h1 {
          margin-top: 5rem;
        }

        .btn-about {
          font-size: 0.9rem;
        }
      }

      &.md-content-wrapper {
        width: 100%;
        padding: 0;
      }

      &.wish {
        .wish-inner {
          display: block;
          padding: 2rem 0;

          .img-wrapper {
            margin: 0 auto;
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-page-one-wrapper {
    section {
      padding: 0 2rem;

      &.description {
        h1 {
          margin-top: 5rem;
        }

        .btn-about {
          font-size: 0.8rem;
        }
      }

      &.md-content-wrapper {
        padding: 0;
      }

      &.wish {
        .wish-inner {
          display: block;
          padding: 2rem 0;

          .img-wrapper {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
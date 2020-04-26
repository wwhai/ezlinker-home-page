<template>
  <article class="home-page-one-wrapper">

    <section class="description">
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
    </section>
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
        <div class="item">
          <div class="icon">
            <!-- <img src="./s1.png"/> -->
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


    <section class="md-content-wrapper">
      <Content />
    </section>

    <footer
      style="background-color:#333;height:300px;color:#FFFFFF;padding-left:20px;padding-right:20px;padding-top:20px;"
    >
      <!-- <p>EZLINKER团队</p>
      <p>
        联系我们:
        <a href="ezlinker@qq.com">ezlinker@qq.com</a>.
      </p> -->
      <div class="container">
        <div class="col">
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
        <div class="col link">
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
        <div class="col link">
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
        <div class="col link">
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
  content: '';
  width: 100%;
  height: 500px;
  opacity: 0.9;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  background-image: url('./images/header.jpg');
  padding-top: 3.4rem;
  background-attachment: fixed;

  .provide {
    .title-box{
      text-align: center;
      .title{
        font-size: 35px;
      }
      .desc{
        font-size: 16px;
        color: #6c757d;
      }
    }
    .list{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .item{
        box-shadow: var(--card-box-shadow);
        border-radius: var(--card-curve);
        transition: 0.3s ease-in;
        padding:24px;
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

    .container{
      display: flex;
      justify-content: space-around;
      .col{
      font-size:16px;
      .title{
        font-size: 20px;
      }
      .item{
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
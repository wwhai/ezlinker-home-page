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

      <hr/>
    </section>
    <!-- <section class="wish">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="./images/2.png" alt />
        </div>
        <div class="text-wrapper">
          <h1>{{ features[0].title }}</h1>
          <p class="description">{{ features[0].details }}</p>
        </div>
      </div>
    </section>
    -->
    <section class="md-content-wrapper">
      <Content />
    </section>
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

  methods: {
   
  }
};
</script>


<style lang="stylus" scoped>
.home-page-one-wrapper {
  content: "";
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

  section {
    &.description {
      box-sizing: border-box;
      margin: 0 auto 6rem;
      max-width: 46rem;
      width: 100%;
      text-align: center;

      h1 {
        font-size :50px;
        margin-top: 8rem;
        color : #FFFFFF;
      }

      p {
        margin-bottom: 2rem;
        color :#330033;
        font-size :20px;

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
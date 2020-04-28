<template>
  <article class="home-page-one-wrapper">

    <div class="banner">
      <div class="container">
        <div class="left col-md-5">
          <h1>EZLINKER</h1>
          <p>轻量级，高性能的物联网业务解决方案.</p>
          <a class="btn" href="#">开始了解</a>
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
          EZLINKER专注的领域
        </div>
        <div class="desc"> 
         EZLINKER专注于私有化物联网部署方案和自底而上的业务体系。
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
                多平台安装
              </div>
              <div class="desc">
                EZLINKER支持多种操作系统平台，轻量级部署，开箱即用.
              </div>
            </div>
          </div>
        </div>
        <div class="item col-lg-4 col-md-6">
          <div class="item-box">
            <div class="s-block p-lg-4 p-3">
              <div class="icon">
                <!-- <img src="./s1.png"/> -->
                <img src="./images/s2.png" alt="mixureSecure">
              </div>
              <div class="title">
               高性能网关
              </div>
              <div class="desc">
                EZLINKER拥有高性能物联网接入网关，让物联网通信更加可靠安全.
              </div>
            </div>
          </div>
        </div>
        <div class="item col-lg-4">
          <div class="item-box">
            <div class="s-block p-lg-4 p-3">
              <div class="icon">
                <!-- <img src="./s1.png"/> -->
                <img src="./images/s3.png" alt="mixureSecure">
              </div>
              <div class="title">
                容器化部署
              </div>
              <div class="desc">
                EZLINKER派生出各种领域的解决方案，最终形成APP，一键部署，轻松使用.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <footer >

      <div class="container">
        <div class="col col-md-6">
          <div class="title">
          联系我们
          </div>
          <div class="item">
            <span class="name">地址</span> :
          </div>
          <div class="item">
            <span class="name">电话</span> :
          </div>
          <div class="item">
            <span class="name">邮箱</span> : info@EZLINKER.com
          </div>
        </div>
        <div class="col link col-md-4">
          <div class="title">
          用户区域
          </div>
          <div class="item">
            QQ交流
          </div>
          <div class="item">
            博客
          </div>
          <div class="item">
            社区
          </div>
        </div>
        <div class="col link col-md-4">
                    <div class="title">
          生态项目
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
        </div>
        <div class="col link col-md-4">
                    <div class="title">
          合作企业
          </div>
          <div class="item">
            中飞科技
          </div>
          <div class="item">
            众瑞科技
          </div>
          <div class="item">
            闪麟科技
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
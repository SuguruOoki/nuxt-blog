<template>
  <footer>
    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="flex-column">
          <div class="footer__navi">
            About
          </div>
          <div class="footer__navi">
            Intro
          </div>
          <div class="footer__navi">
            Service
          </div>
          <div class="footer__navi">
            Columns
          </div>
          <div class="footer__navi">
            Recruit
          </div>
          <div class="footer__navi">
            Contact
          </div>
        </div>
        <div class="flex-column">
          <div class="footer__navi">
            ニュース記事
          </div>
          <div class="footer__navi">
            ニュース記事
          </div>
          <div class="footer__navi">
            ニュース記事
          </div>
          <div class="footer__navi">
            ニュース記事
          </div>
          <div class="footer__navi">
          </div>
          <div class="footer__navi">
            <button>一覧</button>
          </div>
        </div>
        <div class="flex-column">
          <div class="footer__navi">
            株式会社ディチャーム
          </div>
          <div class="footer__navi">
            〒141-0031<br/>
            住所サンプル
          </div>
          <div class="footer__navi">
            ニュース記事
          </div>
          <div class="footer__navi">
            ニュース記事
          </div>
          <div class="footer__navi">
          </div>
          <div class="footer__navi">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.flex-column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.footer {
	&__info {
		background-color: $background-primary;
		padding: 1.5em 0;
  }
  
  &__info-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media (min-width: $screen-sm){
      flex-direction: row;
    }
  }

	&__copyright {
		text-align: center;
		@media (min-width: $screen-sm) {
			text-align: inherit;
		}
	}

	&__top-page {
		color: $text-negative;
		display: block;
		text-align: center;
		line-height: 1;
		-webkit-transition: 1s;
		-moz-transition: 1s;
    transition: 1s;
    
		@media (min-width: $screen-sm){
			text-align: right;
		}
	}
}
</style>


<template lang="pug">
    header.header-global(:class="{hasDrop, hasBackground}")
        b-navbar.nav-primary.hasTagList(toggleable='lg', type='dark')
            b-navbar-brand(to='/') {{appTitle}}
</template>
<script>
export default {
  name: 'header-global',
  data () {
    return {
      broadcastersURL: process.env.VUE_APP_SITE_BROADCASTERS,
      dropContent: null,
      scrollPosition: null
    }
  },
  computed: {
    appTitle: function () {
      if (process.env.VUE_APP_NSFW === 'false') {
        return process.env.VUE_APP_TITLE_SFW
      } else {
        return process.env.VUE_APP_TITLE
      }
    },
    hasBackground: function () {
      return this.scrollPosition >= 360
    },
    hasDrop: function () {
      return this.dropContent !== null
    }
  },
  destroy () {
    window.removeEventListener('scroll', this.updateScroll)
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
<style lang="scss">
.header-global {
    position: fixed;
    width: 100%;
    z-index: 10;
    -webkit-backface-visibility: hidden;
}
.nav-primary {
    background-color: #006992;
    padding: 0 10px;
}

.nav-secondary {
    padding: 0 10px;
}

</style>

<template lang="pug">
    footer.footer-global.bg-dark.text-light
        ad-space
        .container
            b-navbar(type='dark')
                b-navbar-brand(to='/') {{appTitle}}
            .row.block-links
                .col-6.col-md-3(v-for="(group, title) in footerLinks", :key="title")
                    | {{title}}
                    span(v-for="(link, index) in group", :key="index")
                        b-link(:href="link.url", target="_blank" v-if="link.url") {{link.title}}
                        b-link(:to="link.path", v-if="link.path") {{link.title}}

        .footer-legal.text-center
            p Main Office: Virginia, USA
            p This site contains sexually explicit material. Enter ONLY if you are at least 18 years old and agree to our cookie rules.
            p
                a.text-light(href="", target="_blank") 18 U.S.C. 2257 Record Keeping Requirements Compliance Statement
            p &copy; 2019 - {{new Date().getFullYear()}} Camaverse.com. All Rights Reseerved
</template>
<script>
export default {
  computed: {
    appTitle: function () {
      if (process.env.VUE_APP_NSFW === 'false') {
        return process.env.VUE_APP_TITLE_SFW
      } else {
        return process.env.VUE_APP_TITLE
      }
    }
  },
  data () {
    return {
      footerLinks: {
        Support: [
          { title: 'Billing', url: `${process.env.VUE_APP_SITE_SUPPORT}billing` },
          { title: 'Contact Us', path: '/contact-us' },
          { title: 'Feedback', url: `${process.env.VUE_APP_SITE_SUPPORT}feedback` }
        ],
        Partners: [
          { title: 'Make Money', url: `${process.env.VUE_APP_SITE_BROADCASTERS}` },
          { title: 'Streamers', url: `${process.env.VUE_APP_SITE_BROADCASTERS}` },
          { title: 'Studios', url: `${process.env.VUE_APP_SITE_PARTNERS}studios` },
          { title: 'Affiliates', url: `${process.env.VUE_APP_SITE_PARTNERS}affiliates` },
          { title: 'Buy Traffic', url: `${process.env.VUE_APP_SITE_PARTNERS}traffic` },
          { title: 'Contributors', url: `${process.env.VUE_APP_SITE_PARTNERS}contributors` }
        ],
        Business: [
          { title: 'Events', url: `${process.env.VUE_APP_SITE_BUSINESS}events` },
          { title: 'Media', url: `${process.env.VUE_APP_SITE_BUSINESS}media` },
          { title: 'Jobs', url: `${process.env.VUE_APP_SITE_BUSINESS}jobs` }
        ],
        Legal: [
          { title: 'Law Enforcement', path: `/law-enforcement` },
          { title: 'Terms & Conditions', path: `/terms` },
          { title: 'Privacy Policy', path: `/privacy` },
          { title: 'Cookies', path: `/cookies` },
          { title: 'Anti-Spam', path: `/anti-spam` },
          { title: 'Refunds', path: `/refunds` }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
    .block-links a {
        display: block;
    }
    .footer-global {
        a {
            color: #3d9264;
        }
        .navbar {
            padding: 0 10px 0 0;
        }
    }
    .footer-legal {
        background-color: #001016;
        font-size: .8em;
        margin-top: 20px;
        padding: 20px 0;
        p {
            margin: 0;
        }
    }
</style>

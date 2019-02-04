<template>
<span>
  <Navigation></Navigation>
  <header-section></header-section>
  <about-section></about-section>
  <portfolio></portfolio>
  <callout></callout>
  <call-to-action></call-to-action>
  <footer-section></footer-section>
</span>
</template>

<script>
import Navigation from '~/components/NavigationSection.vue'
import HeaderSection from '~/components/PageHeader.vue'
import AboutSection from '~/components/AboutSection.vue'
// import ServicesSection from '~/components/ServicesSection.vue'
import Callout from '~/components/CalloutSection.vue'
import Portfolio from '~/components/PortfolioSection.vue'
import CallToAction from '~/components/CallToAction.vue'
import FooterSection from '~/components/FooterSection.vue'

export default {
  name: 'homepage',
  components: {
    Navigation,
    HeaderSection,
    AboutSection,
    // ServicesSection,
    Callout,
    Portfolio,
    CallToAction,
    FooterSection
  }
}
</script>

<style>
</style>

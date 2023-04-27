<template>
  <div class="overlay"></div>
  <div class="events-home">
    <h1 class="events-home__title">
      Upcoming Events
      <hr />
    </h1>
    <!-- <eventTemplate
      v-for="event in eventInfo"
      :title="event.title"
      :imgSrc1="event.imgSrc1"
      :imgSrc2="event.imgSrc2"
      :imgSrc3="event.imgSrc3"
      :link1="event.link1"
      :link2="event.link2"
    ></eventTemplate> -->
    <eventTemplate
      v-for="(event, index) in eventInfo"
      :key="event.id"
      :index="index"
      :title="event.title"
      :previewImage="event.previewImage"
      :referenceItems="event.referenceItems"
    ></eventTemplate>
  </div>

  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'
import eventTemplate from './events/eventTemplate.vue'

export default {
  components: {
    theFooter,
    eventTemplate,
  },
  data() {
    return {
      eventInfo: [
        {
          id: 1,
          title: 'A Ride to Remember',
          previewImage: '/ride-to-remember-main.png',
          referenceItems: [
            {
              imgLabel: 'Facebook Event Page',
              imgSrc: '/ride-to-remember-fb.png',
              link:
                'https://www.facebook.com/events/1623633818078435?ref=newsfeed',
            },
            {
              imgLabel: 'Registration Page',
              imgSrc: '/ride-to-remember-main.png',
              link:
                'https://www.eventbrite.com/e/ride-to-remember-3rd-annual-motorcycle-ride-registration-526927974757',
            },
          ],
        },
        {
          id: 2,
          title: '12 Outdoors Festival',
          previewImage: '/12-outdoors-festival-main.png',
          referenceItems: [
            {
              imgSrc: '/12-outdoors-festival-main.png',
            },
            {
              imgSrc: '/12-outdoors-flier.jpeg',
            },
            {
              imgLabel: 'Vendor Booth Application',
              imgSrc: '/Vendor-Booth-Application.png',
            },
            {
              imgLabel: 'Vet Focused Application',
              imgSrc: '/Nonprofit-Vendor-application.png',
            },
            {
              imgLabel: 'Back Field Booth Layout',
              imgSrc: '/back-field-booths.png',
            },
            {
              imgLabel: 'Front Field Booth Layout',
              imgSrc: '/front-field-booths.png',
            },
          ],
        },
        {
          id: 3,
          title: 'Coffee and Conversations',
          previewImage: '/beard-brothers-main.jpeg',
          referenceItems: [
            {
              imgLabel: 'Facebook Event Page',
              imgSrc: '/beard-brothers-main.jpeg',
              link:
                'https://www.facebook.com/events/771766201037496/771766214370828?active_tab=about',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.events-home {
  top: 10%;
  position: relative;
  width: 100vw;
  height: fit-content;
  text-align: center;
  margin-bottom: 25vh;
}

.events-home hr {
  position: relative;
  width: 15%;
}

.events-home__title {
  margin-top: 5%;
}
</style>

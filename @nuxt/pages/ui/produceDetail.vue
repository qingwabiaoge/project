<template>
  <div class="container">
    <producePage :data="data">

    </producePage>
  </div>
</template>

<script>
  export default {   layout: 'ui',
    data() {
      return {
        data: {
          image:require('@/assets/images/image.svg'),
          title: 'title',
          weight: 0.05,
          color: 'red',
          description: 'Cancellation cannot be made after 12:00p.m. on the next day of the order date, though the shipment hasn’t begun.',
          content: 'Cancellation cannot be made after 12:00p.m. on the next day of the order date, though the shipment hasn’t begun.'
        }
      }
    }
  }
</script>

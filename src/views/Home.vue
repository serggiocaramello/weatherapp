<template>
  <div class="main">
    <CurrentWeather />
    <Stats />
  </div>
</template>

<script>
import CurrentWeather from "@/components/CurrentWeather";
import Stats from "@/components/Stats";
export default {
  name: "Home",
  components: { CurrentWeather, Stats },
};
</script>

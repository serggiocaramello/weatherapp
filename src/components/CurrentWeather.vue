<template>
  <div class="current-weather">
    <div class="current-weather--buttons p-1">
      <router-link to="/login" class="btn btn-light">Login</router-link>
      <span>or</span>
      <router-link to="/register" class="btn btn-outline">Register</router-link>
      <span>to save places.</span>
    </div>
    <div class="current-weather--search p-1 mt-1">
      <a href="#" class="btn btn-outline">Search for places</a>
      <span class="icon-background">
        <font-awesome-icon class="map-marker-btn" icon="map-marker-alt" />
      </span>
    </div>
    <div class="current-weather__img--container">
      <img class="current-weather__img" src="@/assets/Shower.png" alt="" />
    </div>
    <div class="current-weather--temp text-center">
      <span class="current-weather--temp-value text-light">15</span>
      <span class="current-weather--temp-unit text-alt">°C</span>
    </div>
    <span
      class="current-weather--weather text-alt text-center w-100 d-block fw-600"
      >Shower</span
    >
    <div class="current-weather--day text-alt">
      <span>Today</span>
      <span>•</span>
      <span>Fri, 5 Jun</span>
    </div>
    <div class="current-weather--location text-alt">
      <font-awesome-icon class="map-marker-alt-icon" icon="map-marker-alt" />
      <span class="fw-600">Helsinki</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentWeather",
};
</script>

<style lang="scss" scoped>
.current-weather {
  height: 100vh;
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.current-weather--buttons {
  font-size: 0.95em;
  color: $text-color;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > * {
    margin-right: 0.5em;
    &:last-child {
      margin-right: 0;
    }
  }
}
.current-weather--search {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-background {
    background-color: $text-color;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    display: inline-block;
    text-align: center;
    line-height: 2em;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover,
    &:active,
    &:focus {
      background-color: $primary-color;
      border: 1px solid $text-color;
      .map-marker-btn {
        color: $text-color;
      }
    }
    .map-marker-btn {
      color: $primary-color;
    }
  }
}

.current-weather__img--container {
  position: relative;
  text-align: center;
  overflow-x: hidden;
  min-height: 250px;
}

.current-weather__img {
  transform: scale(0.75);
}

.current-weather__img--container::before {
  background-image: url("../assets/Cloud-background.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  opacity: 0.05;
  content: "";
  position: absolute;
  top: 0;
  left: -10%;
  width: 120%;
  height: 100%;
}

.current-weather--temp {
  &-value {
    font-size: 7em;
  }
  &-unit {
    font-size: 3em;
  }
}

.current-weather--weather {
  font-size: 2.25em;
  margin-top: 1em;
  margin-bottom: 1em;
}

.current-weather--day {
  text-align: center;
  font-size: 1.125em;
  & > * {
    margin-right: 0.75em;
    &:last-child {
      margin-right: 0;
    }
  }
}

.current-weather--location {
  text-align: center;
  margin-top: 2em;
  margin-bottom: 4em;
  .map-marker-alt-icon {
    margin-right: 0.5em;
  }
}
</style>

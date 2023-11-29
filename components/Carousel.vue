<template>
    <section
      class="w-100 vh-40 m-auto d-flex align-items-center justify-content-center"
      container="md"
      >
      <ClientOnly fallbackTag="div">
        <MDBCarousel v-model="carousel" :items="items1" fade />
        <template #fallback>
          <MDBSpinner />
        </template>
      </ClientOnly>
    </section>
  </template>
  <script setup lang="ts">
  import { MDBCarousel, MDBSpinner } from "mdb-vue-ui-kit";

  const items1 = [
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
      alt: "...",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
      alt: "...",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
      alt: "...",
      label: "Third slide label",
      caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  const carousel = useState("carousel", () => 0);
  </script>
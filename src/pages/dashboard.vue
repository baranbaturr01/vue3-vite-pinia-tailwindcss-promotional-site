<script setup>
import Header from "../components/layout/header.vue";
import About from "../components/layout/about.vue";
import Footer from "../components/layout/footer.vue";
import Cta from "../components/layout/cta.vue";
import Blog from "../components/layout/blog.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <body class="antialiased bg-white font-sans text-gray-900">
    <main class="w-full">
      <!-- start header -->

      <Header></Header>
      <!-- end header -->

      <!-- start hero -->
      <div class="bg-gray-100">
        <section
          class="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen"
        >
          <div class="h-full absolute top-0 left-0 z-0">
            <img
              src="images/cover-bg.jpg"
              alt=""
              class="w-full h-full object-cover opacity-20"
            />
          </div>

          <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
            <div>
              <h1
                class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
              >
                A better life starts with a beautiful smile.
              </h1>
              <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
                Welcome to the Dentist Office of Dr. Thomas Dooley, where trust
                and comfort are priorities.
              </p>
              <a
                @click="router.push({name:'Dashboard'})"
                class="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold"
                >Book Appointment</a
              >
            </div>
          </div>
        </section>
      </div>
      <!-- end hero -->

      <!-- start about -->
      <About></About>
      <!-- end about -->

      <!-- start testimonials -->
      <section
        class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32"
      >
        <div class="flex flex-col lg:flex-row lg:-mx-8">
          <div class="w-full lg:w-1/2 lg:px-8">
            <h2 class="text-3xl leading-tight font-bold mt-4">
              Why choose the Mesothelioma Center?
            </h2>
            <p class="mt-2 leading-relaxed">
              Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt
              lacus tellus, sed aliquam est vehicula a. Pellentesque consectetur
              condimentum nulla, eleifend condimentum purus vehicula in. Donec
              convallis sollicitudin facilisis. Integer nisl ligula, accumsan
              non tincidunt ac, imperdiet in enim. Donec efficitur ullamcorper
              metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a,
              faucibus mi.
            </p>
          </div>

          <div
            class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0"
          >
            <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

            <p class="italic text-sm mt-2 text-center">
              Aenean ante nisi, gravida non mattis semper.
            </p>
          </div>
        </div>
      </section>
      <!-- end testimonials -->

      <!-- start blog -->
      <Blog></Blog>
      <!-- end blog -->

      <!-- start cta -->
      <Cta></Cta>
      <!-- end cta -->

      <!-- start footer -->
      <Footer></Footer>
      <!-- end footer -->
    </main>
  </body>
</template>
<style>
#menu-toggle:checked + #menu {
  display: block;
}

#dropdown-toggle:checked + #dropdown {
  display: block;
}

a,
span {
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
}

a.arrow,
span.arrow {
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1.5;
}

a.arrow .arrow_icon,
span.arrow .arrow_icon {
  position: relative;
  margin-left: 0.5em;
}

a.arrow .arrow_icon svg,
span.arrow .arrow_icon svg {
  transition: transform 0.3s 0.02s ease;
  margin-right: 1em;
}

a.arrow .arrow_icon::before,
span.arrow .arrow_icon::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  width: 0;
  height: 2px;
  background: #38b2ac;
  transform: translateY(-50%);
  transition: width 0.3s ease;
}

a.arrow:hover .arrow_icon::before,
span.arrow:hover .arrow_icon::before {
  width: 1em;
}

a.arrow:hover .arrow_icon svg,
span.arrow:hover .arrow_icon svg {
  transform: translateX(0.75em);
}

/* .cover {
      border-bottom-right-radius: 128px;
    } */

.bg-blue-teal-gradient {
  background: rgb(49, 130, 206);
  background: linear-gradient(
    90deg,
    rgba(49, 130, 206, 1) 0%,
    rgba(56, 178, 172, 1) 100%
  );
}

/* @media (min-width: 1024px) {
      .cover {
        border-bottom-right-radius: 256px;
      }
    } */
</style>

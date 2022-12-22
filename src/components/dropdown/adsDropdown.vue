<script setup></script>
<template>
  <body class="">
    <div class="group inline-block">
      <button
        aria-haspopup="true"
        aria-controls="menu"
        class="rounded-sm flex items-center"
      >
        <span class="pr-1 font-semibold text-white flex-1">İlanlar</span>
      </button>
      <ul
        id="menu"
        aria-hidden="true"
        class="border bg-blue-300-teal-gradient rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-180 ease-in-out origin-top min-w-32"
      >
        <li class="rounded-sm relative px-10 py-1 hover:bg-gray-100">
          <button
            aria-haspopup="true"
            aria-controls="menu-lang"
            class="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span class="pr-1 flex-1">Ruhsatlar</span>
            <span class="mr-auto">
              <svg
                class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              ></svg>
            </span>
          </button>
          <ul
            id="menu-lang"
            aria-hidden="true"
            class="bg-blue-300-teal-gradient border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
          >
            <li class="px-3 py-1 hover:bg-gray-100">Özel Hastane</li>
            <li class="px-3 py-1 hover:bg-gray-100">Tıp Merkezi</li>
          </ul>
        </li>
      </ul>
    </div>
  </body>
</template>
<style scoped>
/* since nested groupes are not supported we have to use 
         regular css for the nested dropdowns
      */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}
</style>

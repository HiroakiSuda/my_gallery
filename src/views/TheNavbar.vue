<template>
  <div class="bg-nav_bg w-full flex justify-between">
    <p class="flex items-center xs:pl-4 md:pl-8 pb-4 mt-6 text-2xl lg:text-5xl text-amber-500 text-start font-bold">Home Made Bread Gallery</p>
    <div class="mb-2 text-lg flex flex-col justify-strech items-end 
                md:flex-row pt-4">
      <router-link to="/#about">
        <p class="mr-12 text-gray-300 hover:text-amber-500
          relative cursor-pointer transition-all duration-500
          before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5
          before:rounded-full before:opacity-0 before:transition-all before:duration-500
          before:bg-amber-500 hover:before:w-full hover:before:opacity-100"
        >
          About
        </p>
      </router-link>          
      <router-link to="/#bread">
        <p class="mr-12 text-gray-300 hover:text-amber-500
          relative cursor-pointer transition-all duration-500
          before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5
          before:rounded-full before:opacity-0 before:transition-all before:duration-500
          before:bg-amber-500 hover:before:w-full hover:before:opacity-100"
        >
          Bread
        </p>
      </router-link>
      <router-link to="/#pieces">
        <p class="mr-12 text-gray-300 hover:text-amber-500
          relative cursor-pointer transition-all duration-500
          before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5
          before:rounded-full before:opacity-0 before:transition-all before:duration-500
          before:bg-amber-500 hover:before:w-full hover:before:opacity-100"
        >
        Pièces
        </p>
      </router-link>
    </div>
    
    
  </div>
</template>

<script setup>

</script>


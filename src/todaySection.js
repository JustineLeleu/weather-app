// HTML section to display today cards

document.querySelector('#todaySection').innerHTML = `
  <div class="w-3/4 mx-auto mt-4 font-Dosis">
    <h2 class="text-lg md:text-xl lg:text-3xl text-weatherGray">Today</h2>
    <div class="flex gap-4 overflow-x-scroll no-scrollbar">
        <div class="todayCard ml-auto"></div>
        <div class="todayCard"></div>
        <div class="todayCard"></div>
        <div class="todayCard"></div>
        <div class="todayCard"></div>
        <div class="todayCard"></div>
        <div class="todayCard"></div>
        <div class="todayCard mr-auto"></div>
    </div>
  </div>
`
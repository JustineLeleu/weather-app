// HTML section to display next days cards

document.querySelector('#weekSection').innerHTML = `
  <div class="w-3/4 mx-auto mt-4 font-Dosis">
    <h2 class="text-lg md:text-xl lg:text-3xl text-weatherGray">Next Days</h2>
    <div class="flex gap-4 justify-center">
        <div class="weekCard"></div>
        <div class="weekCard"></div>
        <div class="weekCard"></div>
        <div class="weekCard"></div>
    </div>
  </div>
`
$(document).ready(() => {
   const $fire = $(".fire");
   const $fireItem = $(".fire-item");
   const fireItemHeight = $fireItem.height();
   const fireItemWidth = $fireItem.width();

   const horzCount = Math.floor($fire.width() / fireItemWidth);
   const vertCount = Math.floor($fire.height() / fireItemHeight);

   const totalfireItems = horzCount * vertCount;
   for (let i = 0; i < totalfireItems; i++) {
      const $fireItemClone = $fireItem.clone();
      $fire.append($fireItemClone);
   }
});

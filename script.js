

window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress)=>{
        let value = progress.getAttribute('data-value');
        progress.style.width = `${value}%`;
        // progress.style.width = ;
        let count = 0;
        let progressAnimation = setInterval(()=>{
            count++;
            progress.setAttribute('data-text', `${count}%`);
            if (count >= value) {
                clearInterval(progressAnimation);
            }       
         }, 15);
    });



  }

  //******************************** FOR CIRCULAR BAR *************************************** */
  const progText = document.querySelectorAll(".progText");
  const progressT = document.querySelectorAll(".progressT");
  const progContainer = document.querySelector(".skillSection");
  let bol = false;

  // Add on scroll event listern 
  window.addEventListener("scroll", function(){
    if (this.pageYOffset > progContainer.offsetTop - 50 && bol === false) {
      for(let i = 0; i < progText.length; i++){
        progText[i].innerText = 0;
        count = 0;
        progressT[i].style.bottom = "100%";
        progressT[i].style.bottom = progText[i].dataset.count - 100 + "%";

        function updateCount() {
          target = parseInt(progText[i].dataset.count);

          if (count < target) {
            count++;
            progText[i].innerText = count;
            setTimeout(updateCount,70); //count speed
          }else{
            progText[i].innerText = target + "%";

          }
        }
        updateCount();
        bol = true;

      }
    }
  });

  
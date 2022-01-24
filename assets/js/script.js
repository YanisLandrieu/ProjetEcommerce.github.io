/* Contenu */

/* ----------------------------------
Ajout produit en json
---------------------------------- */

  fetch('assets/data/figurines.json')
    .then(response => response.json())
    .then((jsonFigurines) => {
      jsonFigurines.results.map((figurine) => {

        let title = figurine.original_title;
        let overview = figurine.overview;
        let poster = figurine.poster_path;
        let price = figurine.price  
        let figurineElToInject = `
        <div class='col-12 col-sm-6 col-xl-4 mb-3'>
          <div class='row no-gutters'>
            <div class='col-md-4'>
              <img class='img-fluid' src='${poster}' />
            </div>
            <div class='col-md-7 pl-2'>
              <h5 class="pt-3 pt-md-0">${title}</h5>
              <p class='text'>${overview}</p>
              <p class='text' style='font-weight: bold; font-size: 1.5em;'>${price}</p>
              <input class="favorite styled"
                type="button"
                value="Ajouter au panier"
                style="border: 0;
                line-height: 2.5;
                padding: 0 20px;
                font-size: 0,5rem;
                text-align: center;
                color: #fff;
                text-shadow: 1px 1px 1px #000;
                border-radius: 10px;
                background-color: #000;
                background-image: linear-gradient(to top left,
                                                  rgba(0, 0, 0, .2),
                                                  rgba(0, 0, 0, .2) 30%,
                                                  rgba(0, 0, 0, 0));
                box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                            inset -2px -2px 3px rgba(0, 0, 0, .6);">
            </div>
          </div>
        </div>
      `;
        document.getElementById('figurineTable').innerHTML += figurineElToInject;
          
      })
    })

/* -------------------------
modal panier
---------------------------- */

window.onload = () => {
  // On récupère tous les boutons d'ouverture de modale
  const modalButtons = document.querySelectorAll("[data-toggle=modal]");
  
  for(let button of modalButtons){
      button.addEventListener("click", function(e){
          // On empêche la navigation
          e.preventDefault();
          // On récupère le data-target
          let target = this.dataset.target
          
          // On récupère la bonne modale
          let modal = document.querySelector(target);
          // On affiche la modale
          modal.classList.add("show");

          // On récupère les boutons de fermeture
          const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
          
          for(let close of modalClose){
              close.addEventListener("click", () => {
                  modal.classList.remove("show");
              });
          }

          // On gère la fermeture lors du clic sur la zone grise
          modal.addEventListener("click", function(){
              this.classList.remove("show");
          });
          // On évite la propagation du clic d'un enfant à son parent
          modal.children[0].addEventListener("click", function(e){
              e.stopPropagation();
          })
      });
  }

}





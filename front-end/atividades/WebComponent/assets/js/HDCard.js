export class HDCard extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        let titulo = this.getAttribute('titulocard');
        let texto = this.innerHTML;
        let botao = this.getAttribute('')
        let img =

        this.innerHTML = `<div class="card" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${texto}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;
    }
}




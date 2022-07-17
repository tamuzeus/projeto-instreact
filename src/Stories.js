export default function Stories() {

  function Post(props) {
    return (
      <div class="story">
        <div class="imagem">
          <img src={props.svg} />
        </div>
        <div class={props.usuario}>
          {props.nome}
        </div>
      </div>
    )
  }

  return (
    <div class="stories">

      <Post
        svg="assets/img/9gag.svg"
        usuario="usuario"
        nome="9gag"
      />

      <Post
        svg="assets/img/meowed.svg"
        usuario="usuario"
        nome="meowed"
      />

      <Post
        svg="assets/img/barked.svg"
        usuario="usuario"
        nome="barked"
      />

      <Post
        svg="assets/img/nathanwpylestrangeplanet.svg"
        usuario="usuario"
        nome="nathanwpylestrangeplanet"
      />

      <Post
        svg="assets/img/wawawicomics.svg"
        usuario="usuario"
        nome="wawawicomics"
      />


      <Post
        svg="assets/img/respondeai.svg"
        usuario="usuario"
        nome="respondeai"
      />

      <Post
        svg="assets/img/filomoderna.svg"
        usuario="usuario"
        nome="filomoderna"
      />

      <Post
        svg="assets/img/memeriagourmet.svg"
        usuario="usuario"
        nome="memeriagourmet"
      />

      <Post
        svg="assets/img/respondeai.svg"
        usuario="usuario"
        nome="respondeai"
      />

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )

}
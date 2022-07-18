export default function Stories() {

  const storys = [{
    svg: "assets/img/9gag.svg",
    nome: "9gag"
  }, {
    svg: "assets/img/meowed.svg",
    nome:"meowed"
  },{
    svg: "assets/img/barked.svg",
    nome:"barked"
  },{
    svg: "assets/img/nathanwpylestrangeplanet.svg",
    nome:"nathanwpylestrangeplanet"
  },{
    svg: "assets/img/wawawicomics.svg",
    nome:"wawawicomics"
  },{
    svg: "assets/img/respondeai.svg",
    nome:"respondeai"
  },{
    svg: "assets/img/filomoderna.svg",
    nome:"filomoderna"
  },{
    svg: "assets/img/memeriagourmet.svg",
    nome:"memeriagourmet"
  }]

  function Post(props) {
    return (

      <div class="story">
        <div class="imagem">
          <img src={props.img} alt=''/>
        </div>
        <div class="usuario">
          {props.name}
        </div>
      </div>
    )
  }

  return (
    <div class="stories">
      {storys.map((value) => <Post
      img={value.svg}
      name={value.nome}/>)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}


export default function Posts() {

    function Post(props) {
        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.svg} />
                        {props.name}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div class="conteudo">
                    <img src={props.img} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="heart"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.liker} />
                        <div class="texto">
                            Curtido por <strong>{props.likername}</strong> e <strong>outras {props.number} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div class="posts">
            <Post
                svg="assets/img/meowed.svg"
                img="assets/img/gato-telefone.svg"
                name="meowed"
                liker="assets/img/respondeai.svg"
                likername="respondeai"
                number="101.523"
            />


            < Post
                svg="assets/img/barked.svg"
                img="assets/img/dog.svg"
                name="barked"
                liker="assets/img/adorable_animals.svg"
                likername="adorable_animals"
                number="99.159"
            />
        </div>
    )
}
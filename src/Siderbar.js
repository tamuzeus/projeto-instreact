export default function Sidebar() {


    const arrayObjects = [{
        img: "assets/img/bad.vibes.memes.svg",
        name: "bad.vibes.memes",
        condition: "Sugestões para você",
    }, {
        img: "assets/img/chibirdart.svg",
        name: "chibirdart",
        condition: "Sugestões para você",
    }, {
        img: "assets/img/razoesparaacreditar.svg",
        name: "razoesparaacreditar",
        condition: "Novo no Instagram",
    }, {
        img: "assets/img/adorable_animals.svg",
        name: "adorable_animals",
        condition: "Sugestões para você",
    }, {
        img: "assets/img/smallcutecats.svg",
        name: "smallcutecats",
        condition: "Sugestões para você",
    },]

    function Post(props) {
        return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.img} />
                    <div class="texto">
                        <div class="nome">{props.name}</div>
                        <div class="razao">{props.condition}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        )
    }

    return (
        <div class="sidebar">


            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {arrayObjects.map((value) =>
                    <Post
                        img={value.img}
                        name={value.name}
                        condition={value.condition} />)}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
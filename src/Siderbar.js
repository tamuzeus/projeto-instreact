export default function Sidebar() {

    function Post(props) {
        return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.svg} />
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

                <Post
                    svg="assets/img/bad.vibes.memes.svg"
                    name="bad.vibes.memes"
                    condition="Segue você"
                />

                <Post
                    svg="assets/img/chibirdart.svg"
                    name="chibirdart"
                    condition="Segue você"
                />

                <Post
                    svg="assets/img/razoesparaacreditar.svg"
                    name="razoesparaacreditar"
                    condition="Novo no Instagram"
                />

                <Post
                    svg="assets/img/adorable_animals.svg"
                    name="adorable_animals"
                    condition="Segue você"
                />

                <Post
                    svg="assets/img/smallcutecats.svg"
                    name="smallcutecats"
                    condition="Segue você"
                />
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
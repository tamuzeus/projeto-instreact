import React from "react"


function Post(props) {
    const [setButton, setColorButton] = React.useState('heart-outline')
    const [setClass, setColorClass] = React.useState("nocolor")

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
                <img src={props.img} onClick={() => {
                            if (setButton === "heart-outline") {
                                setColorButton("heart")
                                setColorClass("red")
                            } else {
                                setColorButton("heart-outline")
                                setColorClass("nocolor")
                            }
                        }}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={setButton} class={setClass} onClick={() => {
                            if (setButton === "heart-outline") {
                                setColorButton("heart")
                                setColorClass("red")
                            } else {
                                setColorButton("heart-outline")
                                setColorClass("nocolor")
                            }
                        }}></ion-icon>
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


export default function Posts() {

    const arrayObjects = [{
        svg: "assets/img/meowed.svg",
        img: "assets/img/gato-telefone.svg",
        name: "meowed",
        liker: "assets/img/respondeai.svg",
        likername: "respondeai",
        number: "101.523",
    }, {
        svg: "assets/img/barked.svg",
        img: "assets/img/dog.svg",
        name: "barked",
        liker: "assets/img/adorable_animals.svg",
        likername: "adorable_animals",
        number: "99.159",
    }]

    return (
        <div class="posts">

            {arrayObjects.map((value, index) =>
                <Post
                    svg={value.svg}
                    img={value.img}
                    name={value.name}
                    liker={value.liker}
                    likername={value.likername}
                    number={value.number}
                    key={index}
                />
            )}
        </div>
    )
}
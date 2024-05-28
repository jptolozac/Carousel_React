import gato_paz from '../assets/gato_paz.jpg'
import gato_resentido from '../assets/gato_resentido.jpg'
import minchin_relajado from '../assets/minchin_relajado.jpg'
import mincho_desmayado from '../assets/mincho_desmayado.jpg'
import mincho_dormido from '../assets/mincho_dormido.jpg'
import mincho_morido from '../assets/mincho_morido.jpg'
import mincho_pensante from '../assets/mincho_pensante.jpg'
import mincho_teletubi from '../assets/mincho_teletubi.jpg'
import mincho_tomando_sol from '../assets/mincho_tomando_sol.jpg'
import minchos_tiernos from '../assets/minchos_tiernos.jpg'

export async function GetImagesData(){
    return [{
        src: gato_paz,
        alt: "Gato en paz"
    },{
        src: gato_resentido,
        alt: "Gato resentido"
    },{
        src: minchin_relajado,
        alt: "Gato relajado"
    },{
        src: mincho_desmayado,
        alt: "Gato desmayado"
    },{
        src: mincho_dormido,
        alt: "Gato dormido"
    },{
        src: mincho_morido,
        alt: "Gato morido"
    },{
        src: mincho_pensante,
        alt: "Gato pensante"
    },{
        src: mincho_teletubi,
        alt: "Gato con un teletubi"
    },{
        src: mincho_tomando_sol,
        alt: "Gato tomando el sol"
    },{
        src: minchos_tiernos,
        alt: "Gatos tiernos"
    }]
}
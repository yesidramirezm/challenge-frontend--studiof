import { useRuntime } from 'vtex.render-runtime'
import React from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
interface BannerPromocionalprops {
  sizeTitleMobile: string
  sizeTitleDesktop: string
  colorTitle: string
  title: string
  heigtDesktop: number
  imageMobile: string
  colorbutton: string
  sizebuttonDesktop:number
  sizebuttonMobile: string
  backgrounbutton: string
 imageDesktop:string
 heigtMobile:number
 
}

const BannerPromocional = ({
  sizeTitleMobile,
  sizeTitleDesktop,
  colorTitle,
  title,
  imageMobile,
 heigtMobile,
  heigtDesktop,
  imageDesktop,
 sizebuttonMobile,
 sizebuttonDesktop,
 backgrounbutton,
 colorbutton,
}: BannerPromocionalprops) => {
   const { orderForm:{value} } = useOrderForm()
   console.log(value, "data")
  const { deviceInfo: { isMobile } } = useRuntime()
  const backgroundImageUrl = isMobile ? imageMobile : imageDesktop
  const heightImage = isMobile ? heigtMobile : heigtDesktop

  const sizeTitle = isMobile ? sizeTitleMobile : sizeTitleDesktop

  const sizeTextbutton = isMobile ? sizebuttonMobile : sizebuttonDesktop

  const stylesBackground = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: `${heightImage}px`,
  }

  const stylesTitle = {
    color: colorTitle,
    fontSize: sizeTitle
  }

  const stylesbutton = {
    color: colorbutton,
    fontSize: sizeTextbutton,
    background: backgrounbutton
  }
  

  return value>=15000000 && (
    <div style={stylesBackground}>
      <h1 style={stylesTitle} >{title}</h1>
      <button style={stylesbutton}>ver  esta  promo </button>
    </div>
  )
}

export default BannerPromocional

BannerPromocional.schema = {
  title: "banner promocional",
  description: "este  mostrara  las   promociiones disponibles",
  type: 'object',
  properties: {
    title: {
      title: "Titutlo",
      type: "string"
    },
    colorTitle: {
      title: "Color del titulo",
      type: "string",
      default: "#000",
      widget: {
        'ui:widget': 'color',
      },
    },
    sizeTitleDesktop: {
      title: "Tamaño del titulo en desktop",
      description: "Esta medida es en pixeles",
      type: "number",
      default: "22"
    },
    sizeTitleMobile: {
      title: "Tamaño del titulo en mobile",
      description: "Esta medida es en pixeles",
      type: "number",
      default: "14"
    },
    urlbutton: {
      title: "Url a donde redirigira la boton",
      type: "string",
    },
    imageDesktop: {
      title: 'Imagen desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    heigtDesktop: {
      title: "Altura de la imagen en desktop",
      description: "Esta medida es en pixeles",
      type: "number",
      default: "400"
    },
    imageMobile: {
      title: 'Imagen mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    heigtMobile: {
      title: "Altura de la imagen en mobile",
      description: "Esta medida es en pixeles",
      type: "number",
      default: "200"
    },
    colorbutton: {
      title: "Color del texto del  boton",
      type: "string",
      default: "#000",
      widget: {
        'ui:widget': 'color',
      },
    },
    sizebuttonDesktop: {
      title: "Tamaño del texto del boton en desktop",
      description: "Esta medida es en pixeles",
      type: "number",
      default: "18"
    },
    sizebuttonMobile: {
      title: "Tamaño del texto del boton en mobile",
      description: "Esta medida es en pixeles",
      type: "number",
      default: "14"
    },
    backgrounbutton: {
      title: "Color del texto del  boton",
      type: "string",
      default: "#000",
      widget: {
        'ui:widget': 'color',
      }
    }
  }

}
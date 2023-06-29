import Card from "../../common/Cards/Card"
import CardGrid from "../../common/Cards/CardGrid"
import Image from "../../common/Image/Image"
import { TRAD_IMAGES } from "../../../store/consts/consts"

const ImageGallery = () => {
    return(
        <CardGrid>
          {TRAD_IMAGES.map((imageName, index) => (
            <Card key={index}>
              <Image src={require('../../../assets/gallery/' + imageName)} alt={imageName} />
            </Card>
          ))}
        </CardGrid>
    )
}

export default ImageGallery
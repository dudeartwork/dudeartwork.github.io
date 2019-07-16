'use strict';
import { photos } from "./photo";
const e = React.createElement;

class Gallery extends React.Component {
    
    render() {
        return e(
            <div>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel currentIndex={currentImage} views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        );
    }
}

const domContainer = document.querySelector('#galleryId');
ReactDOM.render(e(Gallery), domContainer);
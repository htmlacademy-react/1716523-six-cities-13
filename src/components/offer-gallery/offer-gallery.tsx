

type OfferGalleryPrors = {
  imageUrls: string[];
}

function OfferGallery({imageUrls}: OfferGalleryPrors) {
  return (
    <div className="offer__gallery">
      {imageUrls.map((imageUrl) =>
        (
          <div key={imageUrl} className="offer__image-wrapper">
            <img
              className="offer__image"
              src={imageUrl}
              alt="Photo studio"
            />
          </div>
        )
      )}
    </div>
  );
}

export default OfferGallery;

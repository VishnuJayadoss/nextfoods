import './Gallery.css';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="gallerySection space-top space-extra-bottom">
      <div className="mx-10 my-10">
        <div className="gallery-grid">
          {/* Item 1 */}
          <div className="gallery-item w-7/10">
            <div className="team-style1">
              <div className="team-img img-box5 mega-hover">
                <Image
                  className="w-100 lg:h-75 h-50 object-cover"
                  src="/gallery/curd rice.jpeg"
                  alt="Delicious Pasta Dish"
                  width={400}
                  height={300}
                />
              </div>
              <div className="team-content">
                <h6 className="team-name">Curd rice</h6>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="gallery-item w-7/10">
            <div className="team-style1">
              <div className="team-img img-box5 mega-hover">
                <Image
                  className="w-100 lg:h-75 h-50 object-cover"
                  src="/gallery/masala dosa.jpeg"
                  alt="Fresh Garden Salad"
                  width={400}
                  height={300}
                 
                />
              </div>
              <div className="team-content">
                <h6 className="team-name">Masala dosa</h6>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="gallery-item w-7/10">
            <div className="team-style1">
              <div className="team-img img-box5 mega-hover">
                <Image
                  className="w-100 lg:h-75 h-50 object-cover"
                  src="/gallery/Dosa.jpeg"
                  alt="Gourmet Dessert Plate"
                  width={400}
                  height={300}
                />
              </div>
              <div className="team-content">
                <h6 className="team-name">Dosa</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

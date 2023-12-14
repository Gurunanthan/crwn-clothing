import CategoriesData from '../../Assets/Categories';
import './Directory.Styles.css'
const Directory = () => {

  return (
    <div>
      {CategoriesData.map(({ title, id, imageUrl }) => {
        return (
          <div className="category-container" id={id}>
            <div
              className="background-image"
              style={{
                background: `url(${imageUrl})`,
              }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default Directory;
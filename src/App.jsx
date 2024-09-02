import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Spinner from "./components/Spinner";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect( () => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setLoading(false)
    })
    .catch(err => console.log(err))
  },[term])
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)}/>
      {!loading && images.length===0 && <h2 className="mx-auto text-5xl mt-32 text-center">Opps! No Result</h2>}
      {loading? <Spinner/> : <div className="grid grid-cols-3 gap-9">
          {images.map( (item) => (
            <ImageCard key={images.id} image={item}/>
          ))}
      </div>}
    </div>
  );
}

export default App;

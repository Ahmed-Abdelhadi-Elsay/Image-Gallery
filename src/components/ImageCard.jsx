
const ImageCard = ({image}) => {
    const tags = image.tags.split(",")
    return (
        <>
            <div className="shadow-lg overflow-hidden duration-700 hover:shadow-2xl">
                <img className="rounded" src={image.webformatURL} alt="img" />
                <div className="p-4">
                    <h1 className="text-purple-500 text-3xl">Photo by {image.user}</h1>
                    <ul className="mt-3">
                        <li>
                            <strong>
                                Views: <span className="font-normal">{image.views}</span>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                Download: <span className="font-normal">{image.downloads}</span>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                Likes: <span className="font-normal">{image.likes}</span>
                            </strong>
                        </li>
                    </ul>
                </div>
                <div className="p-4 gap-4 text-white">
                    {tags.map( (tag, index) => (
                        <span key={index} className="inline-block bg-purple-600 px-4 rounded-full mb-3 mr-4">#{tag}</span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImageCard;
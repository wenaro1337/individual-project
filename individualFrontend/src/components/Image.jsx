function Image({ source }) {
  let sourceSplit = source.split(" ");
  function returnPhotoToTask() {
    if (sourceSplit.length === 8) {
      return `${import.meta.env.VITE_URL}${sourceSplit[5].split('"')[1]}`;
    } else {
      return `${import.meta.env.VITE_URL}${sourceSplit[3].split('"')[1]}`;
    }
  }

  function returnStyleToPhoto() {
    const objectStyle = {};
    const razdelenie = sourceSplit[3].split('"')[1].split(":");
    objectStyle[razdelenie[0]] =
      razdelenie[1].slice(0, razdelenie[1].length - 2) + "%";
    return objectStyle;
  }

  return (
    <>
      {sourceSplit.length === 8 ? (
        <img
          src={returnPhotoToTask()}
          style={returnStyleToPhoto()}
          alt="task image"
        />
      ) : (
        <img src={returnPhotoToTask()} alt="task image" />
      )}
    </>
  );
}

export default Image;

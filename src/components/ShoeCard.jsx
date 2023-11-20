const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if(bigShoeImg != imgURL.bigShoe1) {
      changeBigShoeImage(imgURL.bigShoe1)
    }
  }

  return (
    <div className={`border-2 rounded-xl
      ${bigShoeImg === imgURL 
        ? 'border-coral-red' : 'border-transparent'
        } cursor-pointer max-sm:flex-1
      `}
      onClick={handleClick}
    >
    <div className="flex justify-center items-center bg-card">
      <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain" />
    </div>
    </div>
  )
}

export default ShoeCard
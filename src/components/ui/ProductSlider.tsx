
interface ProductSliderProps{
    images: string[]
}
export default function ProductSlider(props:ProductSliderProps){
    return(
        <div className="relative">
            <div>
                <img className="w-full object-contain"
                    src={props.images[0]}
                    alt="" />
            </div>
        <div className="absolute">
            <button className="bg-yellow-500 text-white p-2">1</button>
        </div>
        </div>
        
    )
}
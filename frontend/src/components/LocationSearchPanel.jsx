const LocationSearchPanel = ({suggestions, setPickup, setDestination, activeField}) => {

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        setPickup(suggestion)
    } else if (activeField === 'destination') {
        setDestination(suggestion)
    }
}
  return (
    <div>
      {suggestions.map((item, index)=>{
        return (
          <div onClick={() => handleSuggestionClick(item)} key={index} className="flex items-center justify-start gap-4 p-3 my-4 border-2 rounded-xl border-gray-50 active:border-black">
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">
            {item}
          </h4>
        </div>
        )
      })}
  
    </div>
  );
};

export default LocationSearchPanel;

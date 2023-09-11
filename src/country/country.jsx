
import "./country.css";

export default function Country({ countries ,handlevisit}) {
  const { name, flags } = countries;
  //console.log(countries);

  return (
    <>
      <div className="card text-center space-y-8">
        <p className="text-white ">{name.common}</p>
        <div className="flex justify-center">
          <img src={flags.png} alt="" className="img" />
        </div>
        <div className="flex justify-center pb-1">
          <button
            className="btn-info text-xs w-32 btn-sm btn text-white"
            onClick={()=>{
              handlevisit(countries)
            }}
          >
           Add visited Country
          </button>
        </div>
      </div>
    </>
  );
}

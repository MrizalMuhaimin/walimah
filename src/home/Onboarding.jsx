import andvelop from './../assets/img/andvelop.svg'
import union from './../assets/img/union.svg'
import logoAA from './../assets/img/logoAA.svg'


export const Onboarding = () => {

    const header = () =>{
        return (
            <div className="relative px-6 pt-6 z-20">
                <p className="font-[alice] font-medium text-body4">dari:</p>
                <p className="font-[tanPearl] font-medium text-header1 text-coklat600 ">Afra & Akram</p>
            </div>
        )
    }

    const inputForm = () => {
        return (
            <div className="relative px-6 z-20">
                <p className="font-[alice] font-medium text-body4">untuk:</p>
                <div className="flex flex-col space-y-2 w-full">
                    <div className="w-full">
                        <p className="font-[alice] font-light text-body5">Nomer</p>
                        <input 
                            type="text" 
                            className="input-type1 border w-full border-steel500 rounded-sm text-body5 p-2 placeholder:text-body4 placeholder:text-steel400" 
                            placeholder="+6281234567890">
                        </input>
                    </div>
                    <div className="w-full">
                        <p className="font-[alice] text-body5 font-light">Nama</p>
                        <input 
                            type="text" 
                            className="input-type1 border w-full border-steel500 rounded-sm text-body5 p-2 placeholder:text-body5 placeholder:text-steel400" 
                            placeholder="Isi dengan Nama Lengkap Anda">
                        </input>
                    </div>
                </div>
            </div>
        )
    }

    const ornamentBackground = () => {
        return (
            <div className="absolute w-full h-max flex justify-center bottom-0 left-0 px-2">
                <div className="absolute w-full flex justify-center bottom-16 left-0 z-10">
                    <img src={union}></img>
                </div>
                <div className="absolute w-full flex justify-center bottom-0 left-0 z-30">
                    <img src={andvelop}></img>
                </div>
                <div className="relative w-full flex justify-center h-80 top-0 left-0 z-10">
                    <div className="relative h-32 w-32 bg-coklat400 rounded-full flex justify-center text-center items-center">
                        <p className="absolute font-[alice] font-medium text-body4">Ketuk untuk melanjutkan</p>
                        <div className="absolute w-full flex justify-center">
                            <img src={logoAA}></img>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
  
    return (
      <div className="w-full h-full flex flex-col justify-between relative">
        <div className="w-full py-3">
        {header()}
        {inputForm()}
        </div>
        
        {ornamentBackground()}
      </div>
    );
  };
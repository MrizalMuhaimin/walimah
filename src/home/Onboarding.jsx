import { useState } from 'react';
import imgEnvelope from './../assets/img/imgEnvelope.svg'
import union from './../assets/img/union.svg'
import logoAA from './../assets/img/logoAA.svg'
import lampLeft from './../assets/img/lampLeft.svg'
import lampRight from './../assets/img/lampRight.svg'
import card from './../assets/img/card.svg'
import done_ring_round from './../assets/img/done_ring_round.svg'


export const Onboarding = ({setStatePage = ()=>{},}) => {

    const [isCard, setIsCard] = useState(false)


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

    const background = () => {
        return (
            <div className="w-full flex absolute bottom-40">
                <div className="relative w-full flex justify-center bottom-0 left-0">
                    <img src={lampLeft}></img>
                </div>
                <div className="relative w-full flex justify-center -bottom-10 left-0">
                    <img src={lampRight}></img>
                </div>
            </div>

        )
    }

    const envelope = () => {
        return (
            <div className={`absolute w-full h-max flex justify-center left-0 px-2 trans ${isCard ? '-bottom-16' : 'bottom-0'}`}>
                <div className="absolute w-full flex justify-center bottom-16 left-0 z-10">
                    <img src={union}></img>
                </div>
                <div className="absolute w-full flex justify-center bottom-0 left-0 z-30">
                    <img src={imgEnvelope}></img>
                </div>
                <div className="relative w-full flex justify-center h-80 top-0 left-0 z-10">
                    { !isCard && 
                        <div 
                            className="cursor-pointer relative h-32 w-32 bg-coklat400 rounded-full flex justify-center text-center items-center drop-shadow-md"
                            onClick={() => {setIsCard(true)}}
                        >
                            <p className="absolute font-[alice] font-medium text-body4">Ketuk untuk melanjutkan</p>
                            <div className="absolute w-full flex justify-center">
                                <img src={logoAA}></img>
                            </div>
                        </div> 
                    }

                    { isCard && 
                        <div 
                            className="cursor-pointer relative h-9 w-10/12 -bottom-5 bg-coklat400 rounded-sm flex justify-center text-center items-center drop-shadow-md"
                            onClick={setStatePage}
                        >
                            <img src={done_ring_round}></img>
                            <p className="px-1 font-[alice] font-medium text-body4 text-white">Terima Tantangan</p>
                        </div>

                    }
                </div>
            </div>
        )
    }

    const cardMessage = () =>{
        return (
            <div className={`absolute w-full flex justify-center transition-all drop-shadow-md z-20 ${isCard ? '-bottom-20 -translate-y-80' : '-bottom-20'}`}>
                <p className="absolute w-full p-14 text-body3 font-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci est, ultrices sed tempor eu, sagittis id erat. In pretium accumsan vehicula. Integer ac libero leo.
                </p>
                <img src={card}></img>
            </div>
        )
    }
  
    return (
      <div className="w-full h-full flex flex-col justify-between relative">
        <div className="w-full h-full">
            {header()}
            {inputForm()}
            {cardMessage()}
        </div>
        <div className="w-full h-80 relative">
            {background()}
            {envelope()}
        </div>
      </div>
    );
  };
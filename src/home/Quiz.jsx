import { useState } from 'react';
import tent1 from './../assets/img/tent1.svg'

export const Quiz = () => {
    const [indexSelected, setIndexSelected] = useState(-1);

    
    const listAnswer = [
        {
            q: "A",
            status: true,
        },
        {
            q: "B",
            status: false,
        },
        {
            q: "C",
            status: false,
        }
    ]


    const header = () => {
        return (
            <div className="px-6 pt-6">
                <p className="font-[tanPearl] font-medium text-header1 text-steel700 ">Jawab ini dulu!</p>
                <div className="w-72 text-center ml-auto mr-auto">
                    <p className="font-[alice] font-medium text-body3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci est, ultrices sed tempor eu, sagittis id erat</p>
                </div>
                
            </div>
        )
    }

    const questionItem = (text="", isSelected=false, index=0) => {
        return (
            <div 
                className="flex items-center bg-white px-2 py-1 border border-grey rounded-md cursor-pointer focus:bg-coklat300"
                onClick={() => setIndexSelected(index)}
                >
                <input type="radio" checked={isSelected} className="w-6 h-6 rounded-full accent-coklat500" />
                <span className="ml-2 font-[alice] font-medium text-body5 ">{text}</span>
            </div>
        )
    }

    const card = () => {
        return (
            <div className="px-6 pt-3 ">
                <div className="p-3 bg-coklat100 rounded-md drop-shadow">
                    <img src='' style={{width: '288px', height: '138px'}}></img>
                    <div className="w-72 pt-2 pb-2 text-center ml-auto mr-auto">
                        <p className="font-[alice] font-medium text-body3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci est, ultrices sed tempor eu, sagittis id erat</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      {listAnswer.map((val, index) => (
                        questionItem(val.q, index === indexSelected, index)
                      ))}
                    </div>
                </div>
            </div>
        )
    }

    const ornament = () => {
        return (
            <div className="w-full">
                <img src={tent1}></img>
            </div>
        )

    }

    return (
        <div className="w-full h-full relative flex flex-col justify-between">
        {header()}
        {card()}
        {ornament()}
        </div>
    )
}
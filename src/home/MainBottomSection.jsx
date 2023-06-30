/* eslint-disable no-irregular-whitespace */
import  decoration3 from './../assets/img/decoration3.svg'
import  leaf2 from './../assets/img/leaf2.svg'
import  Download from './../assets/img/Download.svg'
import done_ring_round from './../assets/img/done_ring_round.svg'
import GIftWhite from './../assets/img/GIftWhite.svg'
import Send_fill from './../assets/img/Send_fill.svg'
import streetMrt2 from './../assets/img/streetMrt2.svg'
import cloud3 from './../assets/img/cloud3.svg'

import QRCode from "react-qr-code"


export const MainBottomSection = ({dataInvitation={}}) => {
    const header = () => {
        return (
            <div className="px-6 pt-6 text-center h-48 relative">
                <img src={decoration3} className='mr-auto ml-auto'></img>
                <p className="font-[tanPearl] font-medium text-header1 text-steel700 pt-9 ">Kehadiran</p>
                <div className="w-60 text-center ml-auto mr-auto pt-6">
                    <p className="font-[alice] font-medium text-body4 text-steel700">Harap simpan Kode QR reservasi berikut</p>
                </div>
                <img src={leaf2} className='absolute -bottom-24 left-0 -scale-x-100'></img>
                <img src={leaf2} className='absolute -bottom-24 right-0'></img>
            </div>
        )
    }

    const vidio = () => {
        return (
            <div className="w-full">
                <div className="px-6 pt-6 pb-3 text-center relative">
                    <img src={decoration3} className='mr-auto ml-auto'></img>
                    <p className="font-[tanPearl] font-medium text-header1  text-steel700 pt-9 ">Video</p>
                    <div style={{width:'280px'}} className="text-center ml-auto mr-auto">
                        <p className="font-[alice] font-medium text-body4 text-steel700">
                        Kami tidak tidak berkenan menerima karangan bunga sebagai ucapan. Namun, <b>kami sangat menantikan ucapan berupa video</b> yang akan ditampilkan pada hari pernikahan
                        </p>
                    </div>
                </div>
                <div className="bg-coklat800 px-6 py-6 font-[alice] font-medium text-body4 text-white">
                    <p>Ketentuan Vidio:</p>
                    <ul className="list-disc px-3 pb-4" style={{width:'311px'}}>
                        <li>Video dapat berupa film pendek, vlog, video musik, parodi, ataupun jenis video yang lain</li>
                        <li>Format .mp4, .mkv atau .mov</li>
                        <li>Video dibuat dalam layout landscape</li>
                        <li>Durasi maksimal 1 menit</li>
                        njs
                    </ul>
                    <div 
                        style={{ height:'32px', width:'311px'}} 
                        className="w-full bg-coklat600 rounded-sm  flex justify-center items-center mr-auto ml-auto">
                        <img src={done_ring_round} ></img>
                        <p className='text-white font-[alice] font-medium text-body3 px-2 drop-shadow '> Ingatkan saya untuk kirim video</p>
                    </div>

                </div>
            </div>
           
        )
    }

    const gift = () => {
        return (
            <div className="w-full pb-6">
                <div className="px-6 pt-6 pb-3 text-center relative">
                    <img src={decoration3} className='mr-auto ml-auto'></img>
                    <p className="font-[tanPearl] font-medium text-header1  text-steel700 pt-9 ">Hadiah</p>
                </div>
                <div 
                    style={{ height:'32px', width:'311px'}} 
                    className="w-full bg-coklat500 rounded-sm  flex justify-center items-center mr-auto ml-auto">
                    <img src={GIftWhite} className='fill-white, stroke-white' ></img>
                    <p className='text-white font-[alice] font-medium text-body3 px-2 drop-shadow '> Lihat Rekening dan Alamat</p>
                </div>
                <img src={decoration3} className='mr-auto ml-auto py-2 -scale-100'></img>
            </div>
           
        )
    }

    const emptyCard = () => {
        return (
            <div style={{ height: 100}} className='border  border-coklat400 rounded flex justify-center items-center '>
                <p className='text-body3 text-coklat600'>Belum ada ucapan</p>

            </div>
        )
    }

    const cardItem = () => {
        return (
            <div style={{ height: 142, width: 311}} className='border  border-coklat400 rounded p-2 '>
                <p style={{lineHeight:'12px'}} className='text-body2 text-coklat700'>Dari ....</p>
                <p className='text-body4 text-coklat500'>6 Juli 2023</p>
                <p className='text-body4 py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci est, ultrices sed tempor eu, sagittis id erat. In pretium accumsan vehicula. Integer ac libero leo.</p>
            </div>

        )
    }

    const greetingCard = () => {
        return (
            <div className="w-full">
                <div className="px-6 pt-14 pb-3 text-center relative">
                    <p className="font-[tanPearl] font-medium text-header1  text-steel700 pt-9 ">Ucapan</p>
                </div>
                <div className="bg-coklat800 px-6 py-6 font-[alice] font-medium text-body4 text-white">
                    <p>Dari {dataInvitation?.user?.name} :</p>
                    <textarea style={{ height:'100px', width:'311px'}} placeholder='Isi Ucapan' className="my-3 rounded text-blackNeutral p-2 placeholder:text-coklat400"></textarea>

                    
                    <div 
                        style={{ height:'32px', width:'311px'}} 
                        className="w-full bg-coklat500 rounded-sm  flex justify-center items-center mr-auto ml-auto">
                        <img src={Send_fill} ></img>
                        <p className='text-white font-[alice] font-medium text-body3 px-2 drop-shadow '>Kirim Ucapan</p>
                    </div>

                </div>
                <img src={decoration3} className='mr-auto ml-auto py-2 -scale-100'></img>
                <div className='px-6 py-3 flex flex-col space-y-3'>
                    {emptyCard()}
                    {cardItem()}
                </div>
            </div>
        )
    }

    const qr = ( )=>{
        return (
            <div className="w-full">
                <div className="px-6 py-6 text-center relative bg-white">
                    <div style={{ height:'311px', width:'311px'}} className='mb-6'>
                    <QRCode
                        fgColor ='#6E513B'
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={dataInvitation?.user?.id}
                        viewBox={`0 0 256 256`}
                    />
                    </div>
                    <div 
                        style={{ height:'32px', width:'311px'}} 
                        className="w-full bg-coklat600 rounded-sm  flex justify-center items-center mr-auto ml-auto  ">
                        <img src={Download} ></img>
                        <p className='text-white font-[alice] font-medium text-body3 px-2'> Unduh QR Code</p>

                    </div>
                    <div className="my-5 flex-grow border-t-2 border-dashed border-steel500"></div>
                    <div className="flex pb-4 justify-between">
                        <select  className="border py-1 px-3 text-body4 bg-white rounded border-coklat500">
                            <option value="true">Saya bisa hadir</option>
                            <option value="false">Saya tidak bisa hadir</option>
                        </select>
                        <div className="flex justify-evenly w-24 items-center">
                            <div className="w-5 h-5 rounded-full bg-coklat500 relative">
                                <span style={{top:'-24px', left:'2.5px', fontSize:'40px'}} className="absolute text-white">-</span>
                            </div>
                            <p>0</p>
                            <div className="w-5 h-5 rounded-full bg-coklat500 relative">
                                <span style={{top:'-15px', left:'2px', fontSize:'30px'}} className="absolute text-white">+</span>
                            </div>
                        </div>

                    </div>
                    <div 
                        style={{ height:'32px', width:'311px'}} 
                        className="w-full bg-coklat600 rounded-sm  flex justify-center items-center mr-auto ml-auto ">
                        <img src={done_ring_round} ></img>
                        <p className='text-white font-[alice] font-medium text-body3 px-2'> Konfirmasi</p>
                    </div>
                </div>
            </div>
        )
    }

    const footer = () => {
        return (
            <div className="py-11 ">
                <div style={{ height:'170px'}} className="flex justify-center text-center pt-6 pb-0 relative overflow-hidden items-center mr-auto ml-auto">
                    <img src={cloud3} className='absolute -top-1 -right-16'></img>
                    <p style={{ width:'311px'}} className="text-header3 font-[tanPearl] font-medium text-coklat700" >Sampai Berjumpa di Hari Pernikahan</p>
                    <img src={cloud3} className='absolute bottom-2 -scale-x-100 -left-20'></img>
                </div>
                <img src={streetMrt2} className='mr-auto ml-auto'></img>


            </div>
        )
    }

  

    return (
      <div className="w-full">
        {header()}
        {qr()}
        {vidio()}
        {gift()}
        {greetingCard()}
        {footer()}
        
        

      </div>
    );
  };
  
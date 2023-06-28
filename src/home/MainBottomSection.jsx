import  decoration3 from './../assets/img/decoration3.svg'
import  leaf2 from './../assets/img/leaf2.svg'
import  Download from './../assets/img/Download.svg'
import done_ring_round from './../assets/img/done_ring_round.svg'
import GIftWhite from './../assets/img/GIftWhite.svg'

export const MainBottomSection = () => {
    const header = () => {
        return (
            <div className="px-6 pt-6 text-center h-48 relative">
                <img src={decoration3} className='mr-auto ml-auto'></img>
                <p className="font-[tanPearl] font-medium text-header1 text-steel700 pt-9 ">Kehadiran</p>
                <div className="w-60 text-center ml-auto mr-auto">
                    <p className="font-[alice] font-medium text-body4 text-steel700">Mohon menunjukkan QR Code ini untuk memasuki venue</p>
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
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur</li>
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
            <div className="w-full">
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
    const qr = ( )=>{
        return (
            <div className="w-full">
                <div className="px-6 py-6 text-center relative bg-white">
                    <div style={{ height:'311px', width:'311px'}}>
                        <p>qr</p>
                    </div>
                    <div 
                        style={{ height:'32px', width:'311px'}} 
                        className="w-full bg-coklat600 rounded-sm  flex justify-center items-center mr-auto ml-auto  ">
                        <img src={Download} ></img>
                        <p className='text-white font-[alice] font-medium text-body3 px-2'> Unduh QR Code</p>

                    </div>
                    <div className="my-5 flex-grow border-t-2 border-dashed border-steel500"></div>
                    <div className="flex">

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

    
  

    return (
      <div className="w-full">
        {header()}
        {qr()}
        {vidio()}
        {gift()}
        
        

      </div>
    );
  };
  
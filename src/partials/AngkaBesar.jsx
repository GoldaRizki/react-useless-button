import { useState } from 'react'


export default function AngkaBesar ({angka, warna1, warna2}){


    return (
        <>
            <h1 className='rounded display-1 fw-bolder text-bold text-center p-4' style={{ fontSize : "9rem", background: `linear-gradient(to top right, rgba(204, 164, 244, ${warna1}) 4%, rgba(255, 77, 77, ${warna2}) 100%)`}}>
            {angka}
            </h1>
        </>
    );

}



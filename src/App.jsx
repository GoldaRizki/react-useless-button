import React from 'react';
import './App.css'
import './partials/AngkaBesar'
import AngkaBesar from './partials/AngkaBesar'
import TombolKontrol from './partials/TombolKontrol';
import { useState } from 'react' 


function App() {

  const [angka, setAngka] = useState(0)

  const [pewarna1, setPewarna1] = useState(1.0)
  const [pewarna2, setPewarna2] = useState(0.5)


  function angkaNambah(){
    let angkaBaru = angka + 1

    if (pewarna2 < 1){
        let pewarna2Baru = pewarna2 + 0.1
        setPewarna2(pewarna2Baru)
    }

    if (pewarna1 > 0){
        let pewarna1Baru = pewarna1 - 0.1
        setPewarna1(pewarna1Baru)
    }

    setAngka(angkaBaru)
  }

  function angkaKurang(){


    if (pewarna2 > 0.5){
        let pewarna2Baru = pewarna2 - 0.1
        setPewarna2(pewarna2Baru)
    }

    if (pewarna1 < 1){
        let pewarna1Baru = pewarna1 + 0.1
        setPewarna1(pewarna1Baru)
    }


    

    let angkaBaru = angka - 1
    setAngka(angkaBaru)
  }






  return (

    <div className='container mt-5'>

    <h1 className='display-1 fs-bolder text-center my-5'>USELESS BUTTON</h1>


      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <AngkaBesar angka={angka} warna1={pewarna1} warna2={pewarna2}/>
        </div>
        <div className="col-md-4"></div>

      </div>

      <div className='container'>       
         <TombolKontrol angkaNambahHandle={angkaNambah} angkaKurangHandle={angkaKurang}/>
      </div>


          <div className="container">
            <p className='text-center fs-5 mt-5'>
              Selamat Datang di project React pertama saya <br/>
              Silahkan cek github saya <br/>
              <a href="https://github.com/GoldaRizki" class="link-underline-primary">https://github.com/GoldaRizki</a>
            </p>
            
          </div>


          <div className="container">
            <p className='text-center fs-6 mt-5'>
              sekalian Follow IG @goldarizki_ <br/>
              sama LinkedIn sekalian juga gapapa
              👉
              <a href="https://www.linkedin.com/in/golda-rizki-abadi-850400342/" class="link-underline-primary">
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              
              </a>
            </p>
            
          </div>


    </div>



  );

}

export default App

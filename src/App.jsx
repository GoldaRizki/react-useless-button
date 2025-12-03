import React from 'react';
import './App.css'
import './partials/AngkaBesar'
import AngkaBesar from './partials/AngkaBesar'
import TombolKontrol from './partials/TombolKontrol';
import { useState } from 'react' 


function App() {

  const [angka, setAngka] = useState(0)

  const [pewarna1, setPewarna1] = useState(1.0)
  const [pewarna2, setPewarna2] = useState(0.7)


  function angkaNambah(){
    let angkaBaru = angka + 1

    if (pewarna2 < 0.7){
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


    if (pewarna2 > 0){
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


          <div className="container ">
            <p className='text-center fs-5 mt-5'>
              Selamat Datang di project React pertama saya <br/>
              <br/>
              Kepo sama codingnya?
            </p>

            <div className="container-fluid text-center">

              <a href="https://github.com/GoldaRizki/react-useless-button" className="text-decoration-none">
                  <button className='fs-2 btn btn-warning btn-lg pb-3 px-4'>
                      Liat di sini &nbsp;
                      <span>
                        <svg height="45"  width="45" aria-hidden="true" viewBox="0 0 24 24" version="1.1" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                            <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                        </svg>
                      </span>

                  </button>
              </a>

            </div>

          </div>


          <div className="container">
            <p className='text-center fs-6 mt-5'>
              sekalian Follow IG @goldarizki_ <br/>
              sama LinkedIn sekalian juga gapapa
              👉
              <a href="https://www.linkedin.com/in/golda-rizki-abadi-850400342/" className="link-underline-primary">
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              
              </a>
            </p>
            
          </div>


    </div>



  );

}

export default App

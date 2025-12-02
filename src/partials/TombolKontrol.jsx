
export default function TombolKontrol({angkaNambahHandle, angkaKurangHandle}){




    function kurangiOnClickHandle(){
        angkaKurangHandle();
    }

    function tambahOnClickHandle(){
        angkaNambahHandle();
    }


    return (

        <div className="row mt-4">
            <div className="col-1"></div>
            <div className="col-5 text-center">

                <button type="button" className="btn btn-danger btn-lg fs-2" onClick={kurangiOnClickHandle}>KURANGI</button> 


            </div>

            <div className="col-5 text-center">

                <button type="button" className="btn btn-dark btn-lg fs-2" onClick={tambahOnClickHandle}>TAMBAH</button>

            </div>
            <div className="col-1"></div>

        </div>

    )


}
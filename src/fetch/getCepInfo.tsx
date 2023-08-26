export interface GetCepInfoRequest {
    cep: string,
    city: string,
    neighborhood: string,
    service: string,
    state: string,
    street: string,
    location: {} 
}

async function getCepInfo(userCep: string) {
    const fetchApi = await fetch(`https://brasilapi.com.br/api/cep/v2/${userCep}`)
    const request = await fetchApi.json();

    if(fetchApi.ok){
        return request;
    }

}

export default getCepInfo;

// cep: "21521210"
// city: "Rio de Janeiro"
// neighborhood: "Pavuna"
// service: "correios"
// state: "RJ"
// street: "Alameda das Andorinhas"
// location: {type: 'Point', coordinates: {…}}
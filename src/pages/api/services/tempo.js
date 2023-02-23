const KEY = '5546e54b4e9d404d911113309221704'

export const fetchData = async (city) => {

    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

    const fetchResponse = await fetch(url)
    const data = await fetchResponse.json()

    console.log(data);


    return data
}
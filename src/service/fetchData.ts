var instance: any = null;

export class FetchData {
  static getInstance() {
    if (instance === null) {
      instance = new FetchData();
    }
    return instance;
  }

  static setInstance(_instance: any) {
    instance = _instance;
  }
  //dati per ogni regione
  getDataRegions() {
    return fetch(
      "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"
    )
      .then((response) => response.json())
      .then((data) => data);
  }
  //dati relativi a tutta l' italia
  getDataItaly() {
    return fetch(
      "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  //dati per tutte le provincie delle regioni
  getDataProvincie() {
    return fetch(
      "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json"
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  //dati geojson
  getDataGeojson() {
    return fetch(
      "https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson"
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  //colori regione
  getColorsRegions() {
    return fetch(
      "https://raw.githubusercontent.com/imcatta/restrizioni_regionali_covid/main/dataset.json"
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  //recupero dati vaccini per fasce d eta
  getVaccini(){
   return fetch(
      "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.json"
  )
      .then((response) => response.json())
      .then((data) => data.data);
      
  }
}

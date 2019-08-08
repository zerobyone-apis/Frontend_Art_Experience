import Axios from 'axios';
import Base from './Base';

let axios = Axios.create({
  baseURL: 'http://localhost:8092/api/events',
  headers: {'content-type': 'application/json'}
});

export default class Event {
  private _id:             number;
  private _name:           string;
  private _location:       string;
  private _startDate:      string;
  private _endDate:        string;
  private _startHour:      string;
  private _endHour:        string;
  private _description:    string;
  private _invitedsNumber: number; 
  private _created       : string; 
  
  constructor(obj: any = {}) {
    this._id             = obj._id             || null;
    this._name           = obj._name           || "";
    this._location       = obj._location       || "";
    this._startDate      = obj._startDate      || "";
    this._endDate        = obj._endDate        || "";
    this._startHour      = obj._startHour      || "";
    this._endHour        = obj._endHour        || "";
    this._description    = obj._description    || "";
    this._invitedsNumber = obj._invitedsNumber || 0;
    this._created        = obj._created        || "";
  } 

  get id():number       { return this._id;  }
  set id(value:number)  { this._id = value; }
  
  get name():string       { return this._name;   }  
  set name(value:string)  { this._name  = value; }
  
  get location():string      { return this._location;  }
  set location(value:string) { this._location = value; }
  
  get startDate():string      { return this._startDate;  }
  set startDate(value:string) { this._startDate = value; }
  
  get endDate():string      { return this._endDate;  }
  set endDate(value:string) { this._endDate = value; }
  
  get startHour():string      { return this._startHour;  }
  set startHour(value:string) { this._startHour = value; }
  
  get endHour():string      { return this._endHour;  }  
  set endHour(value:string) { this._endHour = value; }
  
  get description():string      { return this._description;  }
  set description(value:string) { this._description = value; }
  
  get invitedsNumber():number      { return this._invitedsNumber;  }
  set invitedsNumber(value:number) { this._invitedsNumber = value; }
  
  get created():string      { return this._created;  }
  set created(value:string) { this._created = value; }

  static async get(idUser:number){
    try {
      let data = {"idUser":idUser};
      let response: any = await axios.get('', {params: data});
      return {
        docs: response.data,
        total: response.data.length
      }
    } catch (error) {
      throw error.response;
    }
  }

  async add(idUser:number) {
    try {
      this.created = new Date().toLocaleString() +"-"+ idUser;
      let data = {"idUser":idUser, "event":this};
      let response: any = await axios.post('', data);
      this.id = response.data.id;
    } catch (error) {
      throw error;
    }
  }

  async save() {
    try {
      let data = {"event":this};
      console.log('///////////');
      console.log(data);
      console.log('///////////');

      let response = await axios.put('/' + this.id, data );
      // this.id = response.data.id;
      return response;
    } catch (error) {
      throw error.response;
    }
  }

  async remove() {
    try {
      let response = await axios.delete('/' + this.id);
      return response;
    } catch (error) {
      throw error.response;
    }
  }
}
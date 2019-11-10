import Reserve from "../../../models/reserve";
import { readlink } from "fs";
const reservationUrlBase = "http://localhost:8082/reserve";

export default class ReserveBackend {
  public async findAll() {
    const responsePromise = new Promise((resolve, reject) => {
      fetch(reservationUrlBase, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(response => {
          return resolve(response);
        });
    });
    return responsePromise;
  }

  public async findById(id: number) {
    const responsePromise = new Promise((resolve, reject) => {
      let url = `${reservationUrlBase}/${id}`;
      fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(response => {
          return resolve(response);
        });
    }).catch(err => {
      console.error(
        `Something is happend trying to create reserve due to: ${err}`
      );
    });
    return responsePromise;
  }

  public async createReserve(reserveObject: Record<string, any>) {
    const createReserve = new Promise((resolve, reject) => {
      let url =
        reservationUrlBase + `/create/${reserveObject.barberOrHairdresserId}`;
      let body = reserveObject;
      fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(resp => {
          if (resp.ok) {
            console.log("Reserve created successfully!");
            return resp.json();
          }
        })
        .then(response => {
          console.log(response);
          return resolve(`data = ${response}`);
        })
        .catch(err => {
          console.error(
            `Something is happend trying to create reserve due to: ${err.message}`
          );
        });
      return createReserve;
    });
  }

  public async updateReserve(reserveUpdate: Record<string, any>) {
    const updateReserve = new Promise((resolve, reject) => {
      let url = reservationUrlBase + `/update`;
      let body = reserveUpdate;
      fetch(url, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(response => {
          return resolve(response);
        })
        .catch(err => {
          console.error(
            `Something is happend trying to create reserve due to: ${err}`
          );
          return updateReserve;
        });
    });
  }

  public async cancelReserve(cancelObj: Record<string, any>) {
    const cancelReserve = new Promise((resolve, reject) => {
      let url =
        reservationUrlBase +
        `/client/${cancelObj.idClient}/cancel/${cancelObj.idReserve}`;
      fetch(url, {
        method: "PATCH",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => {
          console.log("cancel response: ", resp);
          if (resp.status === 200) {
            return resp.json();
          }
        })
        .then(response => {
          return resolve(response);
        });
    }).catch(err => {
      console.error(
        `Something is happend trying to create reserve due to: ${err}`
      );
      return cancelReserve;
    });
  }

  public async deleteReserve(deleteObj: Record<string, any>) {
    const deleteReserve = new Promise((resolve, reject) => {
      let url =
        reservationUrlBase +
        `/user/${deleteObj.idBarbOrHair}/reserve/${deleteObj.idReserve}`;
      fetch(url, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => {
          if (resp.ok) {
            return resp.text();
          }
        })
        .then(response => {
          console.log("Reserve deleted successfully!");
          return resolve(`deleted = ${response}`);
        })
        .catch(err => {
          console.error(
            `Something is happend deleting reserve due to: ${err.message}`
          );
        });

      return deleteReserve;
    });
  }
}

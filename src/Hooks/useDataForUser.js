import { uniqueItemsArray } from "../utils";

export function useDataForUser(data, user) {
  const sites = [];
  const machine = [];
  const piece = [];

  if (user === "admin") {
    data.map((v) => {
      sites.push(v[1]);
      machine.push(v[2]);
      piece.push(v[3]);
    });
    return {
      sites: uniqueItemsArray(sites),
      machines: uniqueItemsArray(machine),
      pieces: uniqueItemsArray(piece),
    };
  }
  const array = [];
  data.map((elem) => {
    if (elem[0].trim().toLowerCase() === user) {
      array.push(elem);
    }
  });

  array.map((v) => {
    sites.push(v[1]);
    machine.push(v[2]);
    piece.push(v[3]);
  });

  return {
    sites: uniqueItemsArray(sites),
    machines: uniqueItemsArray(machine),
    pieces: uniqueItemsArray(piece),
  };
}

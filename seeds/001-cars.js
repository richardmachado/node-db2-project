
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
        const cars = [
        {id: 1, 
          vin:'1FHA214321321312',
          make:'Toyota',
          model:'Tacoma',
          mileage: "10245",
          transmission:"Automatic",
          title_status:"clean"
      },
        {id: 2, 
          vin:'1FHA21214321321312',
          make:'Toyota',
          model:'Tacoma',
          mileage: "11245",
          transmission:"Automatic",
          title_status:"salvage"
        },
        {id: 3, 
          vin:'1FHAF23214321321312',
          make:'Toyota',
          model:'Tacoma',
          mileage: "22245",
          transmission:"Automatic",
          title_status:"clean"
        },
      ];
      return knex('cars').insert(cars);
    });
};
